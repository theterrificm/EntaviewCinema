import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import fs from 'fs';
import path from 'path';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add CORS headers for video serving
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Range');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Enhanced static file serving with video support
  const videoHeaders = (res: Response, path: string) => {
    if (path.endsWith('.mp4')) {
      res.setHeader('Content-Type', 'video/mp4');
      res.setHeader('Accept-Ranges', 'bytes');
      res.setHeader('Cache-Control', 'public, max-age=31536000');
      res.setHeader('Access-Control-Allow-Origin', '*');
    }
  };

  // Copy video files on server startup if in production
  
  if (process.env.NODE_ENV === 'production') {
    const publicPath = path.join(process.cwd(), 'public');
    const distPublicPath = path.join(process.cwd(), 'dist', 'public');
    
    // Ensure dist/public exists
    if (!fs.existsSync(distPublicPath)) {
      fs.mkdirSync(distPublicPath, { recursive: true });
    }
    
    // Copy all video files from public to dist/public on startup
    if (fs.existsSync(publicPath)) {
      const files = fs.readdirSync(publicPath);
      files.filter(file => file.endsWith('.mp4')).forEach(file => {
        const sourcePath = path.join(publicPath, file);
        const destPath = path.join(distPublicPath, file);
        
        if (fs.existsSync(sourcePath) && !fs.existsSync(destPath)) {
          try {
            fs.copyFileSync(sourcePath, destPath);
            console.log(`✅ Copied video file: ${file}`);
          } catch (error) {
            console.error(`❌ Failed to copy ${file}:`, error.message);
          }
        }
      });
    }
  }

  // Serve from multiple locations to ensure videos work in all environments
  app.use(express.static("public", { setHeaders: videoHeaders }));
  app.use(express.static("dist/public", { setHeaders: videoHeaders }));
  
  // Additional video-specific route handler for deployment compatibility
  app.get('*.mp4', (req, res, next) => {
    // Try multiple locations for video files
    const possiblePaths = [
      path.join(process.cwd(), 'public', req.path),
      path.join(process.cwd(), 'dist/public', req.path),
      path.join(process.cwd(), req.path.substring(1))
    ];
    
    for (const filePath of possiblePaths) {
      if (fs.existsSync(filePath)) {
        res.setHeader('Content-Type', 'video/mp4');
        res.setHeader('Accept-Ranges', 'bytes');
        res.setHeader('Cache-Control', 'public, max-age=31536000');
        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.sendFile(filePath);
      }
    }
    
    // If file not found, return 404 with proper error
    res.status(404).json({ error: 'Video file not found' });
  });
  
  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();

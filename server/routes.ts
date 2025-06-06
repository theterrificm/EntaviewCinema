import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateCoursePackageImage, generateAllCoursePackageImages } from "./image-generator";

export async function registerRoutes(app: Express): Promise<Server> {
  // Generate course package image endpoint
  app.post('/api/generate-package-image', async (req, res) => {
    try {
      const { packageType } = req.body;
      
      if (!packageType || !['essential', 'professional', 'premium'].includes(packageType)) {
        return res.status(400).json({ error: 'Invalid package type' });
      }

      const imageUrl = await generateCoursePackageImage(packageType);
      res.json({ imageUrl, packageType });
    } catch (error) {
      console.error('Error generating package image:', error);
      res.status(500).json({ error: 'Failed to generate package image' });
    }
  });

  // Generate all course package images endpoint
  app.post('/api/generate-all-package-images', async (req, res) => {
    try {
      const images = await generateAllCoursePackageImages();
      res.json({ images });
    } catch (error) {
      console.error('Error generating all package images:', error);
      res.status(500).json({ error: 'Failed to generate package images' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

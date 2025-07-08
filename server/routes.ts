import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateCoursePackageImage, generateAllCoursePackageImages } from "./image-generator";
import sgMail from '@sendgrid/mail';

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure SendGrid if API key is available
  if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, company, budget, project } = req.body;
      
      if (!name || !email || !project) {
        return res.status(400).json({ error: 'Name, email, and project details are required' });
      }

      // If SendGrid is configured, send email
      if (process.env.SENDGRID_API_KEY) {
        const emailContent = `
New contact form submission from Entaview Creative website:

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Budget: ${budget || 'Not specified'}

Project Details:
${project}

---
This message was sent from the Entaview Creative contact form.
        `;

        const msg = {
          to: 'info@entaview.com', // Your email address
          from: 'info@entaview.com', // Must be verified with SendGrid
          subject: `New Contact Form Submission from ${name}`,
          text: emailContent,
          html: emailContent.replace(/\n/g, '<br>')
        };

        await sgMail.send(msg);
        res.json({ success: true, message: 'Message sent successfully' });
      } else {
        // Log to console if no SendGrid API key
        console.log('Contact form submission (SendGrid not configured):', { name, email, company, budget, project });
        res.json({ success: true, message: 'Message received (email service not configured)' });
      }
    } catch (error) {
      console.error('Error sending contact form:', error);
      res.status(500).json({ error: 'Failed to send message. Please try again or contact us directly.' });
    }
  });

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

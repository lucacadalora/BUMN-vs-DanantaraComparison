import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLegalContributionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Legal contributions API
  app.post('/api/legal-contributions', async (req: Request, res: Response) => {
    try {
      // Validate request body
      const contributionData = insertLegalContributionSchema.parse(req.body);
      
      // Create contribution
      const contribution = await storage.createLegalContribution(contributionData);
      
      // Return success
      return res.status(201).json({
        success: true,
        message: 'Kontribusi berhasil disimpan',
        data: contribution
      });
    } catch (error) {
      console.error('Error creating legal contribution:', error);
      
      // Handle validation errors
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: 'Data kontribusi tidak valid',
          errors: error.errors
        });
      }
      
      // Handle other errors
      return res.status(500).json({
        success: false,
        message: 'Terjadi kesalahan saat menyimpan kontribusi'
      });
    }
  });
  
  // Get all legal contributions API
  app.get('/api/legal-contributions', async (_req: Request, res: Response) => {
    try {
      const contributions = await storage.getLegalContributions();
      return res.status(200).json({
        success: true,
        data: contributions
      });
    } catch (error) {
      console.error('Error fetching legal contributions:', error);
      return res.status(500).json({
        success: false,
        message: 'Terjadi kesalahan saat mengambil data kontribusi'
      });
    }
  });
  
  // Get legal contribution by ID
  app.get('/api/legal-contributions/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: 'ID tidak valid'
        });
      }
      
      const contribution = await storage.getLegalContributionById(id);
      if (!contribution) {
        return res.status(404).json({
          success: false,
          message: 'Kontribusi tidak ditemukan'
        });
      }
      
      return res.status(200).json({
        success: true,
        data: contribution
      });
    } catch (error) {
      console.error('Error fetching legal contribution by ID:', error);
      return res.status(500).json({
        success: false,
        message: 'Terjadi kesalahan saat mengambil data kontribusi'
      });
    }
  });
  
  // Approve legal contribution
  app.post('/api/legal-contributions/:id/approve', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: 'ID tidak valid'
        });
      }
      
      const success = await storage.approveLegalContribution(id);
      if (!success) {
        return res.status(404).json({
          success: false,
          message: 'Kontribusi tidak ditemukan'
        });
      }
      
      return res.status(200).json({
        success: true,
        message: 'Kontribusi berhasil disetujui'
      });
    } catch (error) {
      console.error('Error approving legal contribution:', error);
      return res.status(500).json({
        success: false,
        message: 'Terjadi kesalahan saat menyetujui kontribusi'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

import { 
  users, 
  legalContributions,
  type User, 
  type InsertUser, 
  type LegalContribution, 
  type InsertLegalContribution 
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import nodemailer from 'nodemailer';

// Define the storage interface
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Legal contributions methods
  createLegalContribution(contribution: InsertLegalContribution): Promise<LegalContribution>;
  getLegalContributions(): Promise<LegalContribution[]>;
  getLegalContributionById(id: number): Promise<LegalContribution | undefined>;
  approveLegalContribution(id: number): Promise<boolean>;
}

// Database implementation
export class DatabaseStorage implements IStorage {
  emailTransporter: any;

  constructor() {
    // Setup email transporter
    this.emailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || '',  // Would be configured in production
        pass: process.env.EMAIL_PASS || '',   // Would be configured in production
      },
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  async createLegalContribution(insertContribution: InsertLegalContribution): Promise<LegalContribution> {
    // Ensure section and sectionId are not undefined
    const dataToInsert = {
      ...insertContribution,
      section: insertContribution.section || null,
      sectionId: insertContribution.sectionId || null
    };
    
    // Insert into database
    const [contribution] = await db
      .insert(legalContributions)
      .values(dataToInsert)
      .returning();
    
    // Send email notification
    await this.sendContributionEmail(contribution);
    
    return contribution;
  }
  
  async getLegalContributions(): Promise<LegalContribution[]> {
    return db.select().from(legalContributions);
  }
  
  async getLegalContributionById(id: number): Promise<LegalContribution | undefined> {
    const [contribution] = await db
      .select()
      .from(legalContributions)
      .where(eq(legalContributions.id, id));
    
    return contribution || undefined;
  }
  
  async approveLegalContribution(id: number): Promise<boolean> {
    const result = await db
      .update(legalContributions)
      .set({ reviewed: true, approved: true })
      .where(eq(legalContributions.id, id))
      .returning();
    
    return result.length > 0;
  }
  
  private async sendContributionEmail(contribution: LegalContribution) {
    try {
      const typeLabels: Record<string, string> = {
        'suggestion': 'Usulan Perubahan',
        'review': 'Review Analisis',
        'comment': 'Komentar Cepat'
      };
      
      const typeLabel = typeLabels[contribution.type] || contribution.type;
      
      // Email subject based on contribution type
      const subject = `Kontribusi Baru: ${typeLabel} - ${contribution.section || 'Umum'}`;
      
      // Email body with contribution details
      const emailContent = `
        <h2>Kontribusi Baru dari Pakar Hukum</h2>
        <p><strong>Tipe:</strong> ${typeLabel}</p>
        <p><strong>Nama:</strong> ${contribution.name}</p>
        <p><strong>Email:</strong> ${contribution.email}</p>
        ${contribution.section ? `<p><strong>Bagian:</strong> ${contribution.section}</p>` : ''}
        ${contribution.sectionId ? `<p><strong>ID Bagian:</strong> ${contribution.sectionId}</p>` : ''}
        <h3>Pesan:</h3>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          <p>${contribution.suggestion.replace(/\n/g, '<br>')}</p>
        </div>
        <p><strong>Waktu:</strong> ${contribution.timestamp.toLocaleString()}</p>
      `;
      
      const mailOptions = {
        from: process.env.EMAIL_USER || 'noreply@example.com',
        to: 'mail@lucacadalora.com',
        subject: subject,
        html: emailContent,
      };
      
      // In development or if not configured, just log the email
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await this.emailTransporter.sendMail(mailOptions);
        console.log('Email notification sent');
      } else {
        console.log('Email would be sent (credentials not configured):');
        console.log(`To: mail@lucacadalora.com`);
        console.log(`Subject: ${subject}`);
        console.log('Content logged to console instead of sending');
      }
    } catch (error) {
      console.error('Error sending notification email:', error);
    }
  }
}

export const storage = new DatabaseStorage();

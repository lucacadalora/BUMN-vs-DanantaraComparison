import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const legalContributions = pgTable("legal_contributions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  section: text("section"),
  suggestion: text("suggestion").notNull(),
  type: text("type").notNull(), // 'suggestion', 'review', 'comment'
  sectionId: text("section_id"),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
  reviewed: boolean("reviewed").default(false).notNull(),
  approved: boolean("approved").default(false),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertLegalContributionSchema = createInsertSchema(legalContributions).pick({
  name: true,
  email: true,
  section: true,
  suggestion: true,
  type: true,
  sectionId: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertLegalContribution = z.infer<typeof insertLegalContributionSchema>;
export type LegalContribution = typeof legalContributions.$inferSelect;

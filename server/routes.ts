import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyTurnstile(token: string): Promise<boolean> {
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });

    const data = await response.json() as { success: boolean };
    return data.success;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body with Zod schema
      const parsedData = insertContactSchema.safeParse(req.body);
      
      if (!parsedData.success) {
        return res.status(400).json({ 
          error: "Invalid form data",
          details: parsedData.error.errors 
        });
      }

      const { turnstileToken, ...contactData } = parsedData.data;

      // Verify Turnstile token
      const isValidToken = await verifyTurnstile(turnstileToken);
      if (!isValidToken) {
        return res.status(400).json({ error: "Bot verification failed" });
      }

      // Save to storage
      const submission = await storage.createContactSubmission(contactData);

      // Send emails via Resend
      try {
        // Email to admin
        await resend.emails.send({
          from: process.env.CONTACT_FROM_EMAIL || "noreply@pnwcloudservices.com",
          to: [process.env.CONTACT_TO_EMAIL || "steven@pnwcloudservices.com"],
          replyTo: contactData.email,
          subject: `New Contact Form Submission from ${contactData.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Company:</strong> ${contactData.company}</p>
            <p><strong>Job Title:</strong> ${contactData.role}</p>
            ${contactData.source ? `<p><strong>Source:</strong> ${contactData.source}</p>` : ""}
            <p><strong>Message:</strong></p>
            <p>${contactData.message.replace(/\n/g, "<br>")}</p>
          `,
        });

        // Auto-reply to user
        await resend.emails.send({
          from: process.env.CONTACT_FROM_EMAIL || "noreply@pnwcloudservices.com",
          to: contactData.email,
          subject: "We received your message",
          html: `
            <p>Hi ${contactData.name},</p>
            <p>Thank you for reaching out to PNW Cloud Services. We've received your message and will get back to you shortly.</p>
            <p>Best regards,<br>PNW Cloud Services Team</p>
          `,
        });
      } catch (emailError) {
        console.error("Email sending error:", emailError);
        // Don't fail the submission if email fails, just log it
      }

      return res.json({ success: true, id: submission.id });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ error: "Failed to submit form" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

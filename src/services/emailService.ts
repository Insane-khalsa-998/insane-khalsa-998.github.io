import emailjs from '@emailjs/browser';
import { emailTemplates } from './emailTemplates';

// EmailJS credentials from environment variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
emailjs.init(PUBLIC_KEY);

interface EmailData {
  name: string;
  email: string;
  message: string;
  subject?: string;
  type?: string;
  company?: string;
  project?: string;
  budget?: string;
  timeline?: string;
  rating?: number;
  [key: string]: any;
}

type TemplateType = keyof typeof emailTemplates;

export const emailService = {
  async sendEmail(data: EmailData, templateType: TemplateType) {
    try {
      const template = emailTemplates[templateType];
      if (!template) {
        throw new Error(`Template ${templateType} not found`);
      }

      // Replace template variables with actual values
      let emailBody = template.body;
      let emailSubject = template.subject;

      Object.entries(data).forEach(([key, value]) => {
        const regex = new RegExp(`{{${key}}}`, 'g');
        emailBody = emailBody.replace(regex, String(value));
        emailSubject = emailSubject.replace(regex, String(value));
      });

      const result = await emailjs.send(
        SERVICE_ID,
        `template_${templateType}`,
        {
          to_name: "Manpreet Singh",
          to_email: "your-email@example.com", // Replace with your actual email
          from_name: data.name,
          from_email: data.email,
          subject: emailSubject,
          message_html: emailBody,
          subject: emailSubject,
          ...data
        },
        PUBLIC_KEY
      );
      
      return { success: true, message: "Email sent successfully" };
    } catch (error) {
      console.error("Email sending failed:", error);
      throw new Error("Failed to send email. Please try again.");
    }
  },

  templates: {
    contact: "template_gbqcgu1",
    hire: "template_gbqcgu1", // Using contact template for hire since it's similar
    feedback: "template_hqb2523"
  } as const
};

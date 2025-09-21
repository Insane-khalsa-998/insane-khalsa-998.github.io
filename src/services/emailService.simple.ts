import emailjs from '@emailjs/browser';

// EmailJS credentials from environment variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Initialize EmailJS only if public key is available
if (PUBLIC_KEY) {
  emailjs.init(PUBLIC_KEY);
}

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

export type TemplateType = 'contact' | 'hire' | 'feedback';

export const emailService = {
  async sendEmail(data: EmailData, templateType: TemplateType) {
    try {
      // Check if EmailJS is configured
      if (!SERVICE_ID || !PUBLIC_KEY) {
        console.warn('EmailJS not configured. Please set VITE_EMAILJS_SERVICE_ID and VITE_EMAILJS_PUBLIC_KEY in your .env file');
        // For development, we'll simulate success
        return { 
          success: true, 
          message: "Email configuration pending. Your message has been logged to console." 
        };
      }

      // Use a single template for all form types
      const templateId = "template_contact"; // Change this to your actual template ID
      
      // Create a comprehensive message that includes all form data
      let fullMessage = `Form Type: ${templateType.toUpperCase()}\n\n`;
      fullMessage += `Message: ${data.message}\n\n`;
      
      if (templateType === 'hire') {
        fullMessage += `Company: ${data.company || 'Not specified'}\n`;
        fullMessage += `Project Type: ${data.project || 'Not specified'}\n`;
        fullMessage += `Budget: ${data.budget || 'Not specified'}\n`;
        fullMessage += `Timeline: ${data.timeline || 'Not specified'}\n`;
      }
      
      if (templateType === 'feedback') {
        fullMessage += `Rating: ${data.rating || 5}/5 stars\n`;
      }

      // Log the email data for development
      console.log('Sending email with:', {
        serviceId: SERVICE_ID,
        templateId: templateId,
        templateType,
        from: `${data.name} <${data.email}>`,
      });

      // Prepare email parameters - using simple field names that work with most templates
      const emailParams = {
        from_name: data.name,
        from_email: data.email,
        to_name: "Manpreet Singh",
        subject: data.subject || `${templateType.charAt(0).toUpperCase() + templateType.slice(1)} Form - ${data.name}`,
        message: fullMessage,
        reply_to: data.email,
      };

      console.log('Email parameters:', emailParams);
      
      const result = await emailjs.send(
        SERVICE_ID,
        templateId,
        emailParams,
        PUBLIC_KEY
      );
      
      console.log('Email sent successfully:', result);
      return { success: true, message: "Email sent successfully!" };
    } catch (error) {
      console.error("Email sending failed:", error);
      
      // Provide more specific error messages
      if (error.status === 400) {
        throw new Error("Email template not found. Please check your EmailJS template configuration.");
      } else if (error.status === 401) {
        throw new Error("EmailJS authentication failed. Please check your public key.");
      } else if (error.status === 402) {
        throw new Error("EmailJS quota exceeded. Please upgrade your plan or wait for quota reset.");
      } else {
        throw new Error("Failed to send email. Please try again later.");
      }
    }
  }
};
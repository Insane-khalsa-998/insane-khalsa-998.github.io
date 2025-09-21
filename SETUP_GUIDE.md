# Portfolio Setup Guide

## Contact Form Configuration

To make the contact form fully functional, you need to set up EmailJS:

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Set up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

### 3. Create Email Templates
Create these templates in your EmailJS dashboard:

#### Contact Template (template_contact)
- **Template ID**: `template_contact`
- **Subject**: `New Contact Form Submission - {{from_name}}`
- **Content**:
```html
<div style="font-family: Arial, sans-serif;">
  <h2>New Contact Form Submission</h2>
  <p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
  <p><strong>Subject:</strong> {{subject}}</p>
  <p><strong>Message:</strong></p>
  <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
    {{message}}
  </div>
</div>
```

#### Hire Template (template_hire)
- **Template ID**: `template_hire`
- **Subject**: `New Project Inquiry - {{from_name}} | {{company}}`
- **Content**:
```html
<div style="font-family: Arial, sans-serif;">
  <h2>New Project Inquiry</h2>
  <p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
  <p><strong>Company:</strong> {{company}}</p>
  <p><strong>Project Type:</strong> {{project}}</p>
  <p><strong>Budget:</strong> {{budget}}</p>
  <p><strong>Timeline:</strong> {{timeline}}</p>
  <p><strong>Message:</strong></p>
  <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
    {{message}}
  </div>
</div>
```

#### Feedback Template (template_feedback)
- **Template ID**: `template_feedback`
- **Subject**: `New Feedback - {{from_name}}`
- **Content**:
```html
<div style="font-family: Arial, sans-serif;">
  <h2>New Feedback Received</h2>
  <p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
  <p><strong>Rating:</strong> {{rating}}/5 stars</p>
  <p><strong>Feedback:</strong></p>
  <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
    {{message}}
  </div>
</div>
```

### 4. Get Your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (User ID)

### 5. Update Environment Variables
Update the `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Update Email Templates in Code
If you want to use different template IDs, update them in `src/services/emailService.ts`:

```typescript
templates: {
  contact: "template_contact",
  hire: "template_hire", 
  feedback: "template_feedback"
} as const
```

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Features

- **Responsive Design**: Works on all devices
- **Multiple Form Types**: Contact, Hire Me, and Feedback forms
- **Email Integration**: Uses EmailJS for reliable email delivery
- **Form Validation**: Client-side validation for better UX
- **Loading States**: Visual feedback during form submission
- **Error Handling**: Graceful error handling with user feedback

## Troubleshooting

### Contact Form Not Working
1. Check browser console for errors
2. Verify EmailJS credentials in `.env` file
3. Ensure EmailJS templates are created with correct IDs
4. Check EmailJS dashboard for quota limits

### Build Errors
1. Run `npm install` to ensure all dependencies are installed
2. Check for TypeScript errors: `npm run lint`
3. Ensure all imports are correct

### Deployment Issues
1. Verify `homepage` field in `package.json`
2. Ensure GitHub Pages is enabled in repository settings
3. Check GitHub Actions for deployment logs
# EmailJS Setup Guide

## Current Error Fix

The 400 error you're seeing means the template IDs in your EmailJS account don't match what the code is looking for. Here's how to fix it:

## Step 1: Login to EmailJS Dashboard

Go to [EmailJS Dashboard](https://dashboard.emailjs.com/) and login with your account.

## Step 2: Create Email Templates

You need to create 3 templates with these **exact** Template IDs:

### Template 1: Contact Form
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set **Template ID**: `template_contact`
4. Set **Template Name**: `Contact Form`
5. Set **Subject**: `New Contact - {{from_name}}`
6. Set **Content**:
```html
<p>Hello,</p>

<p>You have received a new message from your contact form:</p>

<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<p>Best regards,<br>Your Website</p>
```
7. Click "Save"

### Template 2: Hire Me Form
1. Click "Create New Template"
2. Set **Template ID**: `template_hire`
3. Set **Template Name**: `Hire Me Form`
4. Set **Subject**: `New Project Inquiry - {{from_name}}`
5. Set **Content**:
```html
<p>Hello,</p>

<p>You have received a new project inquiry:</p>

<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Company:</strong> {{company}}</p>
<p><strong>Project Type:</strong> {{project}}</p>
<p><strong>Budget:</strong> {{budget}}</p>
<p><strong>Timeline:</strong> {{timeline}}</p>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<p>Best regards,<br>Your Website</p>
```
6. Click "Save"

### Template 3: Feedback Form
1. Click "Create New Template"
2. Set **Template ID**: `template_feedback`
3. Set **Template Name**: `Feedback Form`
4. Set **Subject**: `New Feedback - {{from_name}}`
5. Set **Content**:
```html
<p>Hello,</p>

<p>You have received new feedback:</p>

<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Rating:</strong> {{rating}}/5 stars</p>

<p><strong>Feedback:</strong></p>
<p>{{message}}</p>

<p>Best regards,<br>Your Website</p>
```
6. Click "Save"

## Step 3: Verify Your Service ID

1. Go to "Email Services" in your dashboard
2. Make sure your service ID matches what's in your `.env` file: `service_3jfoyag`
3. If it doesn't match, update your `.env` file

## Step 4: Test the Form

1. Save all templates
2. Refresh your website
3. Try submitting the contact form
4. Check your email inbox

## Alternative: Use Existing Templates

If you already have templates in your EmailJS account, you can update the code to use your existing template IDs:

1. Go to your EmailJS dashboard
2. Note down your existing template IDs
3. Update the template IDs in `src/services/emailService.ts`:

```typescript
templates: {
  contact: "your_existing_contact_template_id",
  hire: "your_existing_hire_template_id", 
  feedback: "your_existing_feedback_template_id"
} as const
```

## Troubleshooting

### Still getting 400 error?
1. Double-check template IDs match exactly (case-sensitive)
2. Ensure all templates are saved and published
3. Verify your service ID is correct
4. Check that your EmailJS account is not over the free tier limit

### Template variables not working?
Make sure you're using the exact variable names in your templates:
- `{{from_name}}` - sender's name
- `{{from_email}}` - sender's email
- `{{subject}}` - email subject
- `{{message}}` - message content
- `{{company}}` - company name (hire form)
- `{{project}}` - project type (hire form)
- `{{budget}}` - budget range (hire form)
- `{{timeline}}` - project timeline (hire form)
- `{{rating}}` - rating value (feedback form)

### Need help?
Check the browser console for detailed error messages and ensure all template IDs match exactly.
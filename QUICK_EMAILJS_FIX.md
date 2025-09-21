# Quick EmailJS Fix

## The Issue
Your contact form is getting a 400 error because the template IDs don't match what's in your EmailJS account.

## Quick Solution (5 minutes)

### Option 1: Use Your Existing Template
Since you have `template_gbqcgu1`, let's make it work:

1. **Go to your EmailJS dashboard** → Email Templates
2. **Edit template `template_gbqcgu1`**
3. **Make sure it has these variables:**
   - `{{from_name}}` - sender's name
   - `{{from_email}}` - sender's email  
   - `{{subject}}` - email subject
   - `{{message}}` - the message content

**Simple Template Content:**
```html
<p>Hello,</p>
<p>New message from: <strong>{{from_name}}</strong> ({{from_email}})</p>
<p>Subject: {{subject}}</p>
<p>Message:</p>
<div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
{{message}}
</div>
```

### Option 2: Create New Template (Recommended)
1. **Create new template** with ID: `template_contact`
2. **Subject:** `New Contact - {{from_name}}`
3. **Content:** Same as above

## Test It
1. Save your template
2. Refresh your website
3. Try the contact form
4. Check browser console - you should see "Email sent successfully!"

## Current Status
✅ Your EmailJS credentials are working  
✅ The form tries multiple template IDs automatically  
❌ Just need the template variables to match  

The form will work as soon as you update your template with the correct variables!
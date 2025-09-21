# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring a cybersecurity theme with animated backgrounds and a fully functional contact form.

## 🚀 Features

- **Modern Design**: Clean, professional design with cybersecurity theme
- **Responsive**: Works perfectly on all devices and screen sizes
- **Interactive Contact Form**: Multiple form types (Contact, Hire Me, Feedback)
- **Email Integration**: Uses EmailJS for reliable email delivery
- **Form Validation**: Client-side validation with real-time feedback
- **Animated Backgrounds**: Binary code animations and floating icons
- **Project Showcase**: Dynamic project cards with detailed views
- **Skills Display**: Animated skills section with progress bars
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Fast loading with code splitting

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📧 Contact Form Setup

To make the contact form functional, you need to configure EmailJS:

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

#### Contact Template
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

#### Hire Template
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

#### Feedback Template
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
Create a `.env` file in your project root and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Insane-khalsa-998/MyFolio.git
cd MyFolio
```

2. Install dependencies:
```bash
npm install
```

3. Create and configure your `.env` file (see Contact Form Setup above)

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

### Deploying to GitHub Pages

```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero.tsx        # Hero section component
│   ├── Navbar.tsx      # Navigation component
│   ├── UnifiedContactForm.tsx  # Contact form component
│   └── ...
├── pages/              # Page components
│   ├── Home.tsx        # Main home page
│   └── ...
├── services/           # External services
│   ├── emailService.ts # EmailJS integration
│   └── emailTemplates.ts # Email templates
├── data/               # Static data
│   └── projects.ts     # Project information
├── types/              # TypeScript type definitions
└── assets/             # Static assets
```

## 🎨 Customization

### Colors
The website uses a cybersecurity-themed color palette. You can customize colors in `tailwind.config.js` or by modifying the CSS classes.

### Content
- Update project information in `src/data/projects.ts`
- Modify personal information in the Hero component
- Add your own images to `src/assets/`

### Styling
- All styles use Tailwind CSS
- Custom animations are defined using Framer Motion
- Component-specific styles are inline with Tailwind classes

## 🔧 Configuration

### EmailJS Templates
If you want to use different template IDs, update them in `src/services/emailService.ts`:

```typescript
templates: {
  contact: "your_contact_template_id",
  hire: "your_hire_template_id", 
  feedback: "your_feedback_template_id"
} as const
```

### GitHub Pages Deployment
Update the `homepage` field in `package.json` to match your GitHub Pages URL:

```json
{
  "homepage": "https://yourusername.github.io/your-repo-name"
}
```

## 🐛 Troubleshooting

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

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Insane-khalsa-998/MyFolio/issues).

## 📞 Contact

Manpreet Singh - singmanpreet@cyberservices.com

Project Link: [https://github.com/Insane-khalsa-998/MyFolio](https://github.com/Insane-khalsa-998/MyFolio)

---

⭐ If you found this project helpful, please give it a star!
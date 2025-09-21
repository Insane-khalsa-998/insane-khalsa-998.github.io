# Portfolio Site - Manpreet Singh

A modern, responsive portfolio website built with React, TypeScript, and Vite, showcasing my journey and expertise in cybersecurity and development.

## 🚀 Features

- Modern, responsive design with smooth animations
- Interactive components and dynamic content loading
- Cybersecurity-focused project showcase
- Professional skill representation
- Secure contact form implementation
- Performance optimized

## 🛠️ Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router

## 📂 Project Structure

```
src/
├── assets/        # Static assets and images
├── components/    # Reusable UI components
├── data/         # Project and content data
├── pages/        # Main page components
├── services/     # API and service integrations
└── types/        # TypeScript type definitions
```

## 🔧 Setup & Development

1. Clone the repository:
```bash
git clone https://github.com/Insane-khalsa-998/insane-khalsa-998.github.io.git
cd insane-khalsa-998.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🌐 Deployment

The site is deployed using GitHub Pages and can be accessed at [insane-khalsa-998.github.io](https://insane-khalsa-998.github.io)

## 🔒 Security Features

- Input validation and sanitization
- Secure contact form implementation
- Protected resource loading
- XSS prevention measures
- Content Security Policy implementation

## 📝 License

MIT License - feel free to use this code for your own portfolio, but please provide attribution.

## 📧 Contact

For any inquiries or feedback, please use the contact form on the website or connect with me on [LinkedIn](https://www.linkedin.com/in/manpreet-singh-263548221/)

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

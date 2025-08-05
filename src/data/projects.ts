import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'SecureHub',
    title: 'SecureHub – One-Stop Security Toolkit',
    description: 'A modern, interactive web-based toolkit built with HTML, CSS, and JavaScript to help you explore and understand cybersecurity tools.',
    longDescription: 'SecureHub is an all-in-one, web-based cybersecurity toolkit designed to educate and empower users through interactive, browser-based tools. From checking password strength to simulating brute-force attacks, the app combines utility and design with a privacy-first, responsive experience. Features include encryption utilities, steganography tools, password leak checks, and more — all within a sleek grassmorphism UI.',
    images: [
      '/src/assets/Securehub/Screenshot1.png',
      '/src/assets/Securehub/Screenshot2.png',
      '/src/assets/Securehub/Screenshot3.png',
      '/src/assets/Securehub/Screenshot4.png',
      '/src/assets/Securehub/Screenshot5.png'
    ],
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'Bootstrap 5',
      'Google Fonts (Roboto)',
      'Canvas API',
      'Web Crypto API'
    ],
    githubUrl: 'https://github.com/Insane-khalsa-998/SecureHubPro.git',
    liveUrl: 'https://secureminitools.netlify.app/',
    date: 'August 2025',
    role: 'Frontend Developer',
    features: [
      'Password Strength & Leak Checker',
      'AES-256 and DES Text Encryption/Decryption',
      'Image-based Steganography Tool',
      'Brute-force Password Simulator',
      'Dark/Light Mode Toggle',
      'Grassmorphism UI Design',
      'Flip Card Animation for Tool Selection',
      'Modular Code Structure',
      'Responsive Layout (Mobile Friendly)'
    ],
    challenges: [
      'Implementing secure encryption algorithms directly in-browser',
      'Achieving smooth animations with modular, vanilla JS',
      'Creating an intuitive UI for complex tools'
    ],
    solutions: [
      'Used Web Crypto API for encryption & decryption without exposing secrets',
      'Optimized DOM structure for performance in flip-card and image processing animations',
      'Adopted clean UI patterns like cards, dark mode, and tooltips for usability'
    ]
  },
  
    {
  "id": "scamsniffer",
  "title": "ScamSniffer – Open-Source Phishing Detector",
  "description": "AI-powered browser extension to detect phishing emails in Gmail and Outlook using LLMs and rule-based analysis.",
  "longDescription": "ScamSniffer is an open-source phishing detection tool that integrates directly into Gmail and Outlook via a Chrome extension. It uses a combination of rule-based heuristics and multiple free large language models (LLMs) to analyze email content, detect suspicious patterns (e.g., urgency language, spoofed domains), and provide users with a risk score and verdict. All processing can be done locally or through secure API calls, ensuring privacy and transparency.",
  images: [
      '/src/assets/ScamSniffer/Screenshot1.png'
  ],
  "technologies": [
    "Flask",
    "Python",
    "Chrome Extension APIs",
    "LLMs (Groq, Ollama, Hugging Face)",
    "JavaScript (ES6+)",
    "HTML/CSS",
    "RESTful API"
  ],
  "githubUrl": "https://github.com/Insane-khalsa-998/ScamSniffer",
  "date": "November 2024",
  "role": "Full-Stack Developer",
  "features": [
    "Real-time phishing detection in Gmail and Outlook",
    "Multi-LLM analysis using Groq, Ollama, and Hugging Face",
    "Risk scoring and clear verdict (Safe/Suspicious/Phishing)",
    "Safe link and attachment preview using sandboxing",
    "Detection of urgency tactics, spoofed sender addresses, and malicious domains",
    "Privacy-first design with optional offline mode"
  ],
  "challenges": [
    "Integrating multiple LLMs with varying response formats and latency",
    "Extracting email content securely from Gmail/Outlook without violating ToS",
    "Balancing accuracy and speed in real-time email analysis",
    "Ensuring user privacy while sending data to external LLM APIs"
  ],
  "solutions": [
    "Built a unified LLM adapter layer to normalize responses from different models",
    "Used Chrome Extension APIs with minimal permissions to safely access email DOM",
    "Combined AI with rule-based checks for faster, more reliable detection",
    "Implemented optional local processing and encrypted API calls to protect user data"
  ]
},

    {
  "id": "advanced-recon-tool",
  "title": "Advanced Reconnaissance Tool",
  "description": "Multi-functional ethical hacking tool with CLI and GUI for network scanning, port detection, and vulnerability analysis.",
  "longDescription": "A powerful Python-based reconnaissance tool designed for educational purposes in network security and ethical hacking. It supports both command-line and graphical interfaces, enabling users to perform port scanning, network discovery, vulnerability detection using Nmap scripts, and WiFi information retrieval. Built with modularity and learning in mind, it includes logging, CSV export, and safe scanning practices.",
  images: [
      '/src/assets/advanced-recon-tool/Screenshot1.png'
  ],
  "technologies": [
    "Python",
    "Nmap",
    "Tkinter",
    "python-nmap",
    "Colorama",
    "PyInstaller",
    "SQLite"
  ],
  "githubUrl": "https://github.com/Insane-khalsa-998/Advanced-Recon-Tool",
  "date": "October 2024",
  "role": "Security Researcher & Developer",
  "features": [
    "Dual interface: CLI and GUI for flexibility",
    "Port scanning with service detection using Nmap",
    "Network discovery to find active devices on local network",
    "Vulnerability detection via NSE (Nmap Scripting Engine)",
    "WiFi SSID information retrieval (Windows)",
    "Scan results exported to CSV for analysis",
    "Action logging for audit and review in logs/recon_tool.log",
    "Threaded scanning for improved performance"
  ],
  "challenges": [
    "Integrating Nmap functionality reliably across different systems",
    "Designing a clean and intuitive GUI for non-technical users",
    "Ensuring ethical use and preventing misuse of scanning features",
    "Handling permissions and OS-specific commands (especially for WiFi info)"
  ],
  "solutions": [
    "Used python-nmap wrapper for robust Nmap integration",
    "Built modular Tkinter GUI with tabbed navigation for clarity",
    "Added clear disclaimers and educational warnings in UI and docs",
    "Used subprocess and OS-specific logic safely for WiFi data retrieval"
  ]
},
  
  {
    id: 'secure-chat-app',
    title: 'End-to-End Encrypted Chat',
    description: 'Real-time messaging application with military-grade encryption',
    longDescription: 'A secure messaging application that provides end-to-end encryption for all communications. Features include message encryption, secure file sharing, and self-destructing messages with perfect forward secrecy.',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'Node.js', 'Signal Protocol', 'WebRTC', 'MongoDB'],
    githubUrl: 'https://github.com/example/secure-chat',
    liveUrl: 'https://secure-chat-app.com',
    date: 'August 2024',
    role: 'Mobile Developer',
    features: [
      'End-to-end encryption using Signal Protocol',
      'Self-destructing messages with configurable timers',
      'Secure file sharing with encryption',
      'Voice and video calling capabilities',
      'Perfect forward secrecy implementation'
    ],
    challenges: [
      'Implementing complex cryptographic protocols in mobile environment',
      'Ensuring real-time message delivery with encryption',
      'Managing key exchange and verification securely'
    ],
    solutions: [
      'Used native cryptographic libraries for optimal performance',
      'Implemented efficient key exchange using X3DH protocol',
      'Created secure key verification system with QR codes'
    ]
  },
  {
    id: 'malware-analyzer',
    title: 'Malware Analysis Platform',
    description: 'Automated malware detection and analysis system with sandboxing',
    longDescription: 'A comprehensive malware analysis platform that combines static and dynamic analysis techniques to identify and analyze malicious software. Features include automated sandboxing, behavior analysis, and threat intelligence integration.',
    image: '/api/placeholder/600/400',
    technologies: ['Python', 'Cuckoo Sandbox', 'YARA', 'VirusTotal API', 'Docker'],
    githubUrl: 'https://github.com/example/malware-analyzer',
    date: 'July 2024',
    role: 'Security Engineer',
    features: [
      'Automated static and dynamic analysis',
      'Sandboxed execution environment',
      'YARA rule-based detection',
      'Threat intelligence integration',
      'Comprehensive analysis reports'
    ],
    challenges: [
      'Creating isolated execution environments for malware analysis',
      'Implementing accurate detection algorithms',
      'Handling large volumes of sample analysis'
    ],
    solutions: [
      'Used Docker containers with limited privileges for isolation',
      'Implemented ensemble detection methods combining multiple algorithms',
      'Created distributed processing system for high-volume analysis'
    ]
  }
] 
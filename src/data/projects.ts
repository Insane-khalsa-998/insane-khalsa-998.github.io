import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'advanced-recon',
    title: 'Advanced Recon Tool',
    description: 'A comprehensive reconnaissance tool for security assessments and penetration testing.',
    longDescription: `A powerful reconnaissance tool designed for security professionals and penetration testers. 
    The tool automates the process of gathering information about target systems and networks, helping identify potential security vulnerabilities.
    Features include subdomain enumeration, port scanning, service detection, and vulnerability assessment capabilities.`,
    images: [
      '/src/assets/advanced-recon-tool/Screenshot1.png'
    ],
    technologies: [
      'Python',
      'Nmap',
      'Sublist3r',
      'DNSRecon',
      'SQLite'
    ],
    githubUrl: 'https://github.com/Insane-khalsa-998/Advanced-Recon-Tool',
    date: 'June 2025',
    role: 'Security Tool Developer',
    features: [
      'Automated Reconnaissance',
      'Subdomain Enumeration',
      'Port Scanning',
      'Service Detection',
      'Vulnerability Assessment',
      'Report Generation'
    ],
    challenges: [
      'Optimizing scan performance',
      'Managing concurrent scans',
      'Handling large datasets'
    ],
    solutions: [
      'Implemented multi-threading',
      'Used efficient data structures',
      'Optimized database queries'
    ]
  },
  {
    id: 'scamsniffer',
    title: 'ScamSniffer',
    description: 'An AI-powered tool for detecting and analyzing potential scam websites and phishing attempts.',
    longDescription: `ScamSniffer is an innovative security tool that leverages machine learning to identify and analyze 
    potential scam websites and phishing attempts. It helps users protect themselves from online fraud by providing real-time 
    analysis of websites and communication patterns typical of scams.`,
    images: [
      '/src/assets/Scamsniffer/Screenshot1.png'
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'scikit-learn',
      'Flask',
      'BeautifulSoup'
    ],
    githubUrl: 'https://github.com/Insane-khalsa-998/ScamSniffer',
    date: 'August 2025',
    role: 'ML Engineer & Security Researcher',
    features: [
      'Real-time Website Analysis',
      'Machine Learning Detection',
      'Pattern Recognition',
      'Automated Reporting',
      'Browser Extension Integration'
    ],
    challenges: [
      'Training ML models with limited datasets',
      'Reducing false positives',
      'Real-time analysis performance'
    ],
    solutions: [
      'Implemented transfer learning',
      'Fine-tuned model parameters',
      'Optimized analysis pipeline'
    ]
  },
  {
    id: 'epnra',
    title: 'EPNRA - Security Personnel Management System',
    description: 'A full-stack workforce security management application with admin/employee dashboards and real-time reporting.',
    longDescription: `A comprehensive security personnel management system that streamlines workforce operations in the security industry. 
    Features include location-based login, role-based access control, shift assignment management, document handling, and automated report generation. 
    Built with modern web technologies and designed for scalability and security.`,
    images: [
      '/src/assets/projectplaceholder.png'  // Update with actual project images
    ],
    technologies: [
      'React',
      'TypeScript',
      'Flask',
      'SQLite',
      'Bootstrap',
      'MUI Icons'
    ],
    githubUrl: 'https://github.com/Insane-khalsa-998/EPNRA',
    date: 'September 2025',
    role: 'Full-Stack Developer',
    features: [
      'Admin and Employee Dashboards',
      'Location-based Login System',
      'Role-based Access Control',
      'Shift Assignment Management',
      'Document Management',
      'Real-time Reporting',
      'Automated Report Generation'
    ],
    challenges: [
      'Implementing secure location-based authentication',
      'Managing complex role-based permissions',
      'Building an efficient document management system'
    ],
    solutions: [
      'Used geolocation API with secure validation',
      'Implemented hierarchical RBAC system',
      'Optimized document storage and retrieval'
    ]
  },
  {
    id: 'vpn-tunnel',
    title: 'VPN Tunnel Implementation',
    description: 'A secure VPN tunnel solution using OpenVPN for encrypted communications in enterprise environments.',
    longDescription: `Developed and implemented a secure VPN tunnel infrastructure using OpenVPN to provide encrypted communication channels. 
    The project includes robust authentication mechanisms, traffic routing configurations, and comprehensive traffic inspection capabilities 
    to ensure secure enterprise connectivity.`,
    images: [
      '/src/assets/projectplaceholder.png'  // Update with actual project images
    ],
    technologies: [
      'OpenVPN',
      'Linux',
      'Networking',
      'Shell Scripting',
      'Traffic Analysis'
    ],
    githubUrl: 'https://github.com/Insane-khalsa-998/vpn-tunnel',
    date: 'July 2025',
    role: 'Network Security Engineer',
    features: [
      'Secure VPN Infrastructure',
      'Strong Authentication',
      'Traffic Routing',
      'Network Inspection',
      'Enterprise Connectivity'
    ],
    challenges: [
      'Configuring secure authentication methods',
      'Optimizing network routing',
      'Implementing traffic inspection'
    ],
    solutions: [
      'Implemented certificate-based authentication',
      'Created efficient routing tables',
      'Deployed traffic analysis tools'
    ]
  },
  {
    id: 'honeypot',
    title: 'Honeypot Deployment',
    description: 'A sophisticated honeypot environment using Cowrie/modern honeypot tools for threat intelligence gathering.',
    longDescription: `Designed and deployed a comprehensive honeypot environment to capture and analyze attacker behavior, 
    brute-force attempts, and malicious payloads. The system provides valuable threat intelligence and helps understand 
    attack patterns and techniques.`,
    images: [
      '/src/assets/projectplaceholder.png'  // Update with actual project images
    ],
    technologies: [
      'Cowrie',
      'Python',
      'Linux',
      'Log Analysis',
      'Threat Intelligence'
    ],
    githubUrl: 'https://github.com/Insane-khalsa-998/honeypot-deployment',
    date: 'June 2025',
    role: 'Security Researcher',
    features: [
      'Attacker Behavior Analysis',
      'Brute-force Detection',
      'Payload Capture',
      'Real-time Monitoring',
      'Threat Intelligence Collection'
    ],
    challenges: [
      'Setting up convincing decoy services',
      'Capturing and analyzing attack data',
      'Maintaining honeypot security'
    ],
    solutions: [
      'Implemented realistic system emulation',
      'Created automated analysis tools',
      'Established secure monitoring systems'
    ]
  },
  {
    id: 'phishing-toolkit',
    title: 'Phishing Simulation Toolkit',
    description: 'An educational toolkit for testing user awareness and simulating spear-phishing attempts securely.',
    longDescription: `Created a comprehensive phishing awareness toolkit for testing user security awareness and simulating 
    targeted phishing attempts. The system includes credential capture simulation and detailed awareness reporting capabilities, 
    helping organizations identify and address security training needs.`,
    images: [
      '/src/assets/projectplaceholder.png'  // Update with actual project images
    ],
    technologies: [
      'Python',
      'Web Development',
      'Email Protocols',
      'Database Management',
      'Analytics'
    ],
    githubUrl: 'https://github.com/Insane-khalsa-998/phishing-toolkit',
    date: 'May 2025',
    role: 'Security Tool Developer',
    features: [
      'Phishing Template Generation',
      'User Awareness Testing',
      'Credential Capture Simulation',
      'Reporting Dashboard',
      'Training Recommendations'
    ],
    challenges: [
      'Creating realistic phishing scenarios',
      'Implementing safe testing methods',
      'Building comprehensive reporting'
    ],
    solutions: [
      'Developed customizable templates',
      'Implemented sandboxed testing',
      'Created detailed analytics system'
    ]
  },
  {
    id: 'spyware-analysis',
    title: 'Android Spyware Analysis Tool',
    description: 'A proof-of-concept tool for analyzing Android spyware behavior in controlled lab environments.',
    longDescription: `Developed a specialized tool for analyzing Android spyware behavior, focusing on permissions abuse, 
    keylogging detection, and data exfiltration techniques. This tool helps understand mobile threat vectors and provides 
    insights into real-world attack scenarios.`,
    images: [
      '/src/assets/projectplaceholder.png'  // Update with actual project images
    ],
    technologies: [
      'Android SDK',
      'Java',
      'Python',
      'Static Analysis',
      'Dynamic Analysis'
    ],
    githubUrl: 'https://github.com/Insane-khalsa-998/android-spyware-analysis',
    date: 'April 2025',
    role: 'Security Researcher',
    features: [
      'Permission Analysis',
      'Keylogger Detection',
      'Data Exfiltration Analysis',
      'Behavioral Monitoring',
      'Lab Testing Environment'
    ],
    challenges: [
      'Implementing safe analysis environment',
      'Detecting sophisticated malware',
      'Analyzing complex behaviors'
    ],
    solutions: [
      'Created isolated test environment',
      'Developed detection algorithms',
      'Implemented behavior tracking'
    ] [
      'Python',
      'Nmap',
      'Tkinter',
      'python-nmap',
      'Colorama',
      'PyInstaller',
      'SQLite'
    ],
    githubUrl: 'https://github.com/Insane-khalsa-998/Advanced-Recon-Tool',
    date: 'October 2024',
    role: 'Security Researcher & Developer',
    features: [
      'Dual interface: CLI and GUI for flexibility',
      'Port scanning with service detection using Nmap',
      'Network discovery to find active devices on local network',
      'Vulnerability detection via NSE (Nmap Scripting Engine)',
      'WiFi SSID information retrieval (Windows)',
      'Scan results exported to CSV for analysis',
      'Action logging for audit and review in logs/recon_tool.log',
      'Threaded scanning for improved performance'
    ],
    challenges: [
      'Integrating Nmap functionality reliably across different systems',
      'Designing a clean and intuitive GUI for non-technical users',
      'Ensuring ethical use and preventing misuse of scanning features',
      'Handling permissions and OS-specific commands (especially for WiFi info)'
    ],
    solutions: [
      'Used python-nmap wrapper for robust Nmap integration',
      'Built modular Tkinter GUI with tabbed navigation for clarity',
      'Added clear disclaimers and educational warnings in UI and docs',
      'Used subprocess and OS-specific logic safely for WiFi data retrieval'
    ]
  }
] 
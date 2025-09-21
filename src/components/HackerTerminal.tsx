import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Command {
  input: string
  output: string[]
}

const HackerTerminal = () => {
  const [commands, setCommands] = useState<Command[]>([])
  const [currentInput, setCurrentInput] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const availableCommands: Record<string, () => string[]> = {
    help: () => [
      'Available commands:',
      'help     - Show this help message',
      'skills   - List technical skills',
      'certs    - Show certifications',
      'contact  - Show contact information',
      'projects - List major projects',
      'clear    - Clear terminal'
    ],
    skills: () => [
      'Technical Skills:',
      '━━━━━━━━━━━━━━━━',
      '[+] Security Operations: SIEM Monitoring, Incident Response, Threat Detection',
      '[+] Tools: Wireshark, Nmap, Vulners API, Git, SQLite, Linux',
      '[+] Programming: Python, JavaScript/TypeScript, React, Flask',
      '[+] Cybersecurity: SOC Processes, Phishing Analysis, Malware Analysis'
    ],
    certs: () => [
      'Certifications & Training:',
      '━━━━━━━━━━━━━━━━━━━━━━━',
      '[*] Certificate of Participation - SOC Bootcamp (Thinkcloudly)',
      '[*] SIA Licensed Security Officer (UK)',
      '[*] TryHackMe SOC Level 1 (in progress)',
      '[*] CompTIA Security+ (planned 2025)',
      '[*] Blue Team Level 1 (planned 2025)'
    ],
    contact: () => [
      'Contact Information:',
      '━━━━━━━━━━━━━━━━━',
      'Email: singhmanpreet@cyberservices.com',
      'Phone: +44 7826 190828',
      'Location: United Kingdom',
      'GitHub: insane-khalsa-998',
      'LinkedIn: manpreet-singh-263548221'
    ],
    projects: () => [
      'Major Projects:',
      '━━━━━━━━━━━━',
      '[1] EPNRA - Security Personnel Management System',
      '[2] VPN Tunnel Implementation',
      '[3] Honeypot Deployment',
      '[4] Phishing Simulation Toolkit',
      '[5] Android Spyware Analysis Tool',
      '',
      'Type "cd [number]" to view project details'
    ],
    clear: () => {
      setCommands([])
      return []
    }
  }

  const handleCommand = (cmd: string) => {
    const [command, ...args] = cmd.trim().toLowerCase().split(' ')
    
    if (command === 'cd') {
      const projectNum = args[0]
      const projects = [
        'EPNRA: Full-stack security management system with role-based access control and real-time reporting.',
        'VPN Tunnel: Secure enterprise VPN implementation with traffic inspection and routing.',
        'Honeypot: Sophisticated threat intelligence gathering system using modern honeypot tools.',
        'Phishing Toolkit: Educational platform for phishing awareness and simulation.',
        'Spyware Analysis: Android malware behavior analysis tool for security research.'
      ]
      return projectNum && projects[parseInt(projectNum) - 1] 
        ? ['Accessing project details...', projects[parseInt(projectNum) - 1]]
        : ['Error: Invalid project number']
    }

    if (command in availableCommands) {
      return availableCommands[command]()
    }

    return [`Command not found: ${command}`, 'Type "help" for available commands']
  }

  const handleInput = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const newCommand: Command = {
        input: currentInput,
        output: handleCommand(currentInput)
      }
      setCommands(prev => [...prev, newCommand])
      setCurrentInput('')
    }
  }, [currentInput])

  useEffect(() => {
    // Start with help command
    setCommands([{ input: 'help', output: handleCommand('help') }])
    
    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    
    return () => {
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 rounded-lg border border-gray-700 p-4 font-mono text-sm overflow-hidden"
    >
      <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-gray-400 text-xs ml-2">cybersecurity@portfolio:~$</span>
      </div>

      <div className="space-y-2">
        <AnimatePresence>
          {commands.map((cmd, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-green-400">$ {cmd.input}</div>
              {cmd.output.map((line, j) => (
                <div key={j} className="text-gray-300 ml-4">{line}</div>
              ))}
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="flex items-center text-green-400">
          <span>$&nbsp;</span>
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleInput}
            className="bg-transparent outline-none text-green-400 w-full"
            spellCheck={false}
          />
          <span className={`w-2 h-4 bg-green-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </div>
    </motion.div>
  )
}

export default HackerTerminal
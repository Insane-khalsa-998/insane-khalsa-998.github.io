import { motion } from 'framer-motion'
import { 
  CodeBracketIcon, 
  EnvelopeIcon, 
  DocumentTextIcon 
} from '@heroicons/react/24/outline'

const Sidebar = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: CodeBracketIcon,
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: EnvelopeIcon,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      href: 'mailto:contact@example.com',
      icon: EnvelopeIcon,
      color: 'hover:text-red-400'
    },
    {
      name: 'Resume',
      href: '/resume.pdf',
      icon: DocumentTextIcon,
      color: 'hover:text-green-400'
    }
  ]

  return (
    <motion.div
      className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 }}
    >
      <div className="flex flex-col items-center space-y-6 px-4">
        {/* Social Links */}
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-500 transition-colors duration-200 ${link.color}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <link.icon className="w-6 h-6" />
          </motion.a>
        ))}

        {/* Vertical Line */}
        <motion.div
          className="w-px h-24 bg-gray-600"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        />
      </div>
    </motion.div>
  )
}

export default Sidebar 
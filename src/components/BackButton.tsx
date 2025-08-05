import { motion } from 'framer-motion'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

interface BackButtonProps {
  label?: string
}

const BackButton = ({ label = "Back to Home" }: BackButtonProps) => {
  const navigate = useNavigate()
  
  return (
    <motion.button
      onClick={() => navigate('/')}
      className="fixed top-6 left-6 flex items-center gap-2 text-gray-300 hover:text-white z-50 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700 transition-colors duration-200"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: 'rgba(30, 41, 59, 0.9)',
        boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)'
      }}
      whileTap={{ scale: 0.95 }}
    >
      <ArrowLeftIcon className="w-5 h-5" />
      <span>{label}</span>
    </motion.button>
  )
}

export default BackButton
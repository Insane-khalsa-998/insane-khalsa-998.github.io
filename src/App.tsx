import { useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ShieldCheckIcon, 
  CodeBracketIcon, 
  LockClosedIcon
} from '@heroicons/react/24/outline'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import { Suspense } from 'react'
import ProjectDetails from './pages/ProjectDetails'
import NotFoundPage from './pages/NotFoundPage'
import Loader from './components/Loader'

// Generate random binary strings
const generateRandomBinary = (length: number) => {
  let binary = ''
  for (let i = 0; i < length; i++) {
    binary += Math.random() > 0.5 ? '1' : '0'
  }
  return binary
}

function App() {
  // Generate multiple binary strings with random positions and animations
  const binaryStrings = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      text: generateRandomBinary(40 + Math.floor(Math.random() * 30)),
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: 0.2 + Math.random() * 0.5,
      direction: Math.random() * 360,
    }))
  }, [])



  const floatingIcons = [
    { icon: ShieldCheckIcon, x: '10%', y: '20%', delay: 0 },
    { icon: CodeBracketIcon, x: '80%', y: '30%', delay: 1 },
    { icon: LockClosedIcon, x: '20%', y: '70%', delay: 2 },
    { icon: ShieldCheckIcon, x: '70%', y: '80%', delay: 0.5 },
  ]

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 z-[-3]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Icons - z-index -2 */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute z-[-2]"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 0.2,
            y: 0,
          }}
          transition={{ 
            delay: item.delay, 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: Math.random() * 2
          }}
        >
          <item.icon className="w-8 h-8 text-blue-400" />
        </motion.div>
      ))}

      {/* Binary Code Background - z-index -1 */}
      <div className="absolute inset-0 pointer-events-none z-[-1] overflow-hidden">
        {binaryStrings.map((binary) => (
          <motion.div
            key={binary.id}
            className="absolute text-gray-500 opacity-[0.03] font-mono text-xs whitespace-nowrap"
            style={{ 
              left: `${binary.x}%`, 
              top: `${binary.y}%`,
            }}
            initial={{ 
              opacity: 0,
              x: 0,
              y: 0
            }}
            animate={{ 
              opacity: [0.03, 0.05, 0.03],
              x: `calc(${binary.x}% + ${Math.cos(binary.direction) * 100}vw)`,
              y: `calc(${binary.y}% + ${Math.sin(binary.direction) * 100}vh)`,
            }}
            transition={{ 
              duration: 20 / binary.speed,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {binary.text}
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <Navbar />
      <Sidebar />

      {/* Main Content */}
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-blue-400 text-xl">Loading...</div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App  
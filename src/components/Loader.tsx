import React, { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Loader = () => {
  const [progress, setProgress] = useState(0)
  const [animationUrl, setAnimationUrl] = useState('')

  // Dynamically import the Lottie file
  useEffect(() => {
    const loadAnimation = async () => {
      try {
        // Use dynamic import for better code splitting
        const loaderModule = await import('../assets/loader.lottie')
        setAnimationUrl(loaderModule.default)
        
        // Simulate loading progress
        const interval = setInterval(() => {
          setProgress(prev => {
            if (prev >= 100) {
              clearInterval(interval)
              return 100
            }
            return prev + 10
          })
        }, 300)
      } catch (error) {
        console.error('Error loading animation:', error)
        setProgress(100) // Skip loader if error
      }
    }

    loadAnimation()
  }, [])

  return (
    <div className="fixed inset-0 bg-gray-900 z-50 flex flex-col items-center justify-center">
      {animationUrl ? (
        <>
          <DotLottieReact
            src={animationUrl}
            autoplay
            loop
            style={{ width: '200px', height: '200px' }}
          />
          <div className="w-64 h-1.5 bg-gray-700 rounded-full mt-6 overflow-hidden">
            <motion.div 
              className="h-full bg-blue-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-gray-300 mt-4">
            {progress < 100 ? 'Loading security protocols...' : 'Ready to hack!'}
          </p>
        </>
      ) : (
        <div className="text-blue-400 text-xl">Initializing...</div>
      )}
    </div>
  )
}

export default Loader
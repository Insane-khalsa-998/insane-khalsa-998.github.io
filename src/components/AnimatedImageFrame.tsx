import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useState, useRef } from 'react'

interface AnimatedImageFrameProps {
  src: string
  alt: string
  className?: string
}

const AnimatedImageFrame = ({ src, alt, className = "" }: AnimatedImageFrameProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Mouse tracking for 3D effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative group perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Main Frame Container */}
      <motion.div
        className="relative"
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Outer Glow Ring */}
        <motion.div
          className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #f59e0b, #ef4444, #3b82f6)",
            filter: "blur(20px)",
          }}
          animate={isHovered ? {
            rotate: [0, 360],
          } : {}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Animated Border Frame */}
        <motion.div
          className="absolute -inset-2 rounded-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Rotating Border Gradient */}
          <motion.div
            className="absolute inset-0 rounded-xl"
            style={{
              background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #f59e0b, #ef4444, #3b82f6)",
              padding: "2px",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-full h-full bg-gray-900 rounded-xl" />
          </motion.div>

          {/* Corner Decorations */}
          {[
            { top: "4px", left: "4px", rotate: 0 },
            { top: "4px", right: "4px", rotate: 90 },
            { bottom: "4px", right: "4px", rotate: 180 },
            { bottom: "4px", left: "4px", rotate: 270 },
          ].map((corner, index) => (
            <motion.div
              key={index}
              className="absolute w-4 h-4"
              style={corner}
              initial={{ scale: 0, rotate: corner.rotate }}
              animate={{ 
                scale: isLoaded ? 1 : 0,
                rotate: isHovered ? corner.rotate + 180 : corner.rotate
              }}
              transition={{ 
                delay: 0.3 + index * 0.1,
                type: "spring",
                stiffness: 300
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-sm transform rotate-45" />
            </motion.div>
          ))}
        </motion.div>

        {/* Main Image Container */}
        <motion.div
          className="relative rounded-lg overflow-hidden bg-gray-800"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: isLoaded ? 1 : 0.8, 
            opacity: isLoaded ? 1 : 0 
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            delay: 0.1
          }}
        >
          {/* Loading Skeleton */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
          )}

          {/* Main Image */}
          <motion.img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            onLoad={() => setIsLoaded(true)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          {/* Overlay Effects */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />

          {/* Scan Line Effect */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <motion.div
              className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              animate={isHovered ? {
                y: ["-100%", "100%"],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ top: 0 }}
            />
          </motion.div>

          {/* Holographic Effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            style={{
              background: "linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.3) 50%, transparent 70%)",
              backgroundSize: "200% 200%",
            }}
            animate={isHovered ? {
              backgroundPosition: ["0% 0%", "100% 100%"],
            } : {}}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />

          {/* Corner Lights */}
          {isHovered && (
            <>
              {[
                { top: "8px", left: "8px" },
                { top: "8px", right: "8px" },
                { bottom: "8px", right: "8px" },
                { bottom: "8px", left: "8px" },
              ].map((position, index) => (
                <motion.div
                  key={index}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                  style={position}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
              ))}
            </>
          )}
        </motion.div>

        {/* Floating Particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        )}

        {/* Status Indicator */}
        <motion.div
          className="absolute top-2 right-2 flex items-center gap-1"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="w-2 h-2 bg-green-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <span className="text-xs text-green-400 font-mono">ONLINE</span>
        </motion.div>
      </motion.div>

      {/* Info Panel */}
      <motion.div
        className="absolute -bottom-12 left-0 right-0 bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
        style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}
      >
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-300 font-mono">SECURE_IMAGE.jpg</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-400 text-xs">ENCRYPTED</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default AnimatedImageFrame
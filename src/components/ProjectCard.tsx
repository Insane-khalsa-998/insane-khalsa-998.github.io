import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  EyeIcon,
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'
import projectplaceholder from '/projectplaceholder.png'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  images?: string[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

const ProjectCard = ({
  id,
  title,
  description,
  images = [],
  technologies,
  githubUrl,
  liveUrl
}: ProjectCardProps) => {
  const navigate = useNavigate()
  const [imgSrc, setImgSrc] = useState<string>(images?.[0] || projectplaceholder)
  const [isLoading, setIsLoading] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Reset image when project data changes
    setImgSrc(images?.[0] || projectplaceholder)
    setImageLoaded(false)
    setIsLoading(true)
  }, [images])



  // Intersection Observer for lazy loading and performance optimization
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Preload image when in view
  useEffect(() => {
    if (isInView && imgSrc && !imageLoaded) {
      console.log('Preloading image:', imgSrc)

      // Try multiple approaches to load the image
      const tryLoadImage = (src: string, attempt: number = 0) => {
        const img = new Image()

        img.onload = () => {
          console.log('Image loaded successfully:', src)
          setImageLoaded(true)
          setIsLoading(false)
        }

        img.onerror = (e) => {
          console.error(`Image failed to load (attempt ${attempt}):`, src, e)

          // Try alternative paths if main path fails
          if (attempt === 0 && src.startsWith('/')) {
            // Try with base path
            tryLoadImage(`/insane-khalsa-998.github.io${src}`, attempt + 1)
          } else if (attempt === 1) {
            // Try without leading slash
            tryLoadImage(src.substring(1), attempt + 1)
          } else {
            // Final fallback to placeholder
            setImgSrc(projectplaceholder)
            setImageLoaded(true)
            setIsLoading(false)
          }
        }

        img.src = src
      }

      tryLoadImage(imgSrc)
    }
  }, [isInView, imgSrc, imageLoaded])

  const handleImageError = () => {
    console.error('Image failed to load:', imgSrc)
    setImgSrc(projectplaceholder)
    setImageLoaded(true)
    setIsLoading(false)
  }

  const handleViewDetails = () => {
    navigate(`/project/${id}`)
  }

  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col mx-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      style={{ height: '460px' }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        {/* Loading skeleton for weak hardware */}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-500 border-t-blue-400 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Optimized image loading */}
        {isInView && (
          <img
            src={imgSrc}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setIsLoading(false)}
            onError={handleImageError}
            loading="lazy"
            decoding="async"
            style={{
              willChange: 'auto',
              transform: 'translateZ(0)', // Force hardware acceleration
            }}
          />
        )}

        {/* Placeholder when not in view */}
        {!isInView && (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <div className="text-gray-500 text-sm">Loading...</div>
          </div>
        )}

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <motion.button
            onClick={handleViewDetails}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <EyeIcon className="w-5 h-5" />
          </motion.button>

          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <CodeBracketIcon className="w-5 h-5" />
            </motion.a>
          )}

          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow overflow-hidden">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3 overflow-auto flex-grow">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Details Button */}
        <motion.button
          onClick={handleViewDetails}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <EyeIcon className="w-4 h-4" />
          View Details
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ProjectCard

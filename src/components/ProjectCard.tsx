import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  EyeIcon,
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'
import projectplaceholder from '../assets/projectplaceholder.png'

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

  useEffect(() => {
    // Reset image when project data changes
    setImgSrc(images?.[0] || projectplaceholder)
  }, [images])

  const handleImageError = () => {
    setImgSrc(projectplaceholder)
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
        <img
          src={imgSrc}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-500 ${isLoading ? 'blur-sm scale-105' : 'blur-none'}`}
          onLoad={() => setIsLoading(false)}
          onError={handleImageError}
          loading="lazy"
        />

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

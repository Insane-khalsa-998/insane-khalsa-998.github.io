import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeftIcon, CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { projects } from '../data/projects'
import projectplaceholder from '../assets/projectplaceholder.png'
import type { Project } from '../types/project'
import BackButton from '../components/BackButton'
import ScreenshotGallery from '../components/ScreenshotGallery'

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = projects.find((p: Project) => p.id === id)

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const images = project?.images || []

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-300 mb-8">The project you're looking for doesn't exist.</p>
        
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20 px-4">
      <div className="max-w-6xl mx-auto py-8">
        {/* Back Button - Fixed to go home */}
<BackButton label="Back to Projects" />

        {/* Project Header */}
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Project Image with enhanced error handling */}
            <ScreenshotGallery images={project.images} />

            {/* Project Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {project.title || 'Untitled Project'}
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                {project.description || 'No description available.'}
              </p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-gray-400">Role:</span>
                  <span className="text-white ml-2">{project.role || 'N/A'}</span>
                </div>
                <div>
                  <span className="text-gray-400">Date:</span>
                  <span className="text-white ml-2">{project.date || 'N/A'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8 flex-wrap">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CodeBracketIcon className="w-5 h-5" />
                    View Code
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                )}
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.length
                    ? project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))
                    : <span className="text-gray-400">No technologies listed.</span>
                  }
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Long Description */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">About This Project</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {project.longDescription || 'No further details available.'}
            </p>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
            {project.features?.length ? (
              <ul className="space-y-3 list-disc list-inside text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No features listed.</p>
            )}
          </section>

          {/* Challenges & Solutions */}
          <section className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Challenges</h2>
              {project.challenges?.length ? (
                <ul className="space-y-3 list-disc list-inside text-red-400">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-red-600">No challenges listed.</p>
              )}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Solutions</h2>
              {project.solutions?.length ? (
                <ul className="space-y-3 list-disc list-inside text-green-400">
                  {project.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-green-600">No solutions listed.</p>
              )}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetails
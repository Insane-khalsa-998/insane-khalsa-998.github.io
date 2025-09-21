import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import UnifiedContactForm from '../components/UnifiedContactForm'
import { projects } from '../data/projects'
import type { Project } from '../types/project'
import InfiniteSkills from '../components/InfiniteSkills'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of my cybersecurity and development projects showcasing my skills and passion for technology.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project, index: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  {...project}
                  technologies={project.technologies || []}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 px-2">
              Passionate about cybersecurity and technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 sm:gap-12"
          >
            <div className="space-y-6 sm:space-y-8 order-2 md:order-1">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Background</h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  I'm an aspiring cybersecurity analyst with a strong foundation in computer science and a passion for understanding how systems work and how to protect them. My journey in technology has been driven by curiosity and a desire to make the digital world safer.
                </p>
              </div>
              
              <motion.div
                className="relative rounded-lg overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src="/src/assets/socbootcamp.jpeg" 
                    alt="SOC Bootcamp Experience" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 sm:p-6">
                  <p className="text-white text-base sm:text-lg font-semibold drop-shadow-lg">
                    SOC Bootcamp Graduate
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Technologies & Skills</h3>
                <div className="overflow-hidden rounded-lg">
                  <InfiniteSkills />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <motion.div 
                  className="bg-gray-900 p-4 sm:p-5 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-60"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Cybersecurity</h4>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5 sm:h-3">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-gray-900 p-4 sm:p-5 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-60"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Development</h4>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5 sm:h-3">
                    <motion.div 
                      className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '80%' }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-gray-900 p-4 sm:p-5 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-60"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Network Security</h4>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5 sm:h-3">
                    <motion.div 
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '80%' }}
                      transition={{ duration: 1, delay: 0.6 }}
                    />
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-gray-900 p-4 sm:p-5 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-60"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Web Development</h4>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5 sm:h-3">
                    <motion.div 
                      className="bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '70%' }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-4">
        <div className="absolute inset-0 bg-[#1a1b26]/80 backdrop-blur-sm"></div>
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you want to hire me, provide feedback, or just say hello, I'd love to hear from you.
            </p>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <UnifiedContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import './SkillsHexagon.css'

interface Skill {
  name: string
  category: string
  level: number // 1-100
  description: string
}

const skills: Skill[] = [
  {
    name: 'SIEM Monitoring',
    category: 'Security Operations',
    level: 85,
    description: 'Experience with Splunk, ELK stack for security monitoring and analysis'
  },
  {
    name: 'Incident Response',
    category: 'Security Operations',
    level: 80,
    description: 'SOC Tier 1/2 processes, incident handling and escalation'
  },
  {
    name: 'Python',
    category: 'Development',
    level: 90,
    description: 'Security automation, tool development, and scripting'
  },
  {
    name: 'React',
    category: 'Development',
    level: 85,
    description: 'Modern web application development with TypeScript'
  },
  {
    name: 'Network Security',
    category: 'Infrastructure',
    level: 75,
    description: 'VPN implementation, traffic analysis, routing'
  },
  {
    name: 'Linux',
    category: 'Infrastructure',
    level: 80,
    description: 'System administration, security hardening, bash scripting'
  },
  {
    name: 'Malware Analysis',
    category: 'Security Research',
    level: 70,
    description: 'Static and dynamic analysis, behavior monitoring'
  },
  {
    name: 'Threat Intelligence',
    category: 'Security Research',
    level: 75,
    description: 'Threat hunting, IOC analysis, honeypot deployment'
  }
]

const categories = Array.from(new Set(skills.map(s => s.category)))

const SkillsHexagon = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null)

  return (
    <div className="relative">
      {/* Category Selection */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {categories.map(category => (
          <motion.button
            key={category}
            className={`px-4 py-2 rounded-full text-sm ${
              activeCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setActiveCategory(category === activeCategory ? null : category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Skills Hexagon Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills
          .filter(skill => !activeCategory || skill.category === activeCategory)
          .map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredSkill(skill)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <div className="hexagon bg-gray-800 p-4 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
      </div>

      {/* Skill Description Tooltip */}
      <AnimatePresence>
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 p-4 bg-gray-800 rounded-lg shadow-xl mb-4 w-64"
          >
            <p className="text-sm text-gray-300">{hoveredSkill.description}</p>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  )
}

export default SkillsHexagon
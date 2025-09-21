import { motion } from 'framer-motion'
import { ArrowDownIcon, ShieldCheckIcon, CodeBracketIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import meImage from '../assets/me.png'
import HackerTerminal from './HackerTerminal'
import SkillsHexagon from './SkillsHexagon'
import AnimatedImageFrame from './AnimatedImageFrame'
import './SecurityPatterns.css'

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const floatingIcons = [
    { Icon: ShieldCheckIcon, delay: 0, x: "10%", y: "20%" },
    { Icon: CodeBracketIcon, delay: 1, x: "85%", y: "15%" },
    { Icon: LockClosedIcon, delay: 2, x: "15%", y: "75%" },
    { Icon: ShieldCheckIcon, delay: 0.5, x: "80%", y: "70%" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden py-16 sm:py-24">
      {/* Cybersecurity-themed Dynamic Background */}
      <div className="absolute inset-0 bg-[#0a0f1f]">
        {/* Matrix-like Digital Rain Effect */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`rain-${i}`}
              className="absolute w-px h-32 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0"
              style={{
                left: `${(i * 10) + Math.random() * 10}%`,
                top: '-10%'
              }}
              animate={{
                y: ['0%', '200%'],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        {/* Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Glowing Circle Patterns */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`circle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                border: '1px solid rgba(59, 130, 246, 0.1)',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Animated Network Nodes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
                boxShadow: [
                  '0 0 10px rgba(59, 130, 246, 0.3)',
                  '0 0 20px rgba(59, 130, 246, 0.5)',
                  '0 0 10px rgba(59, 130, 246, 0.3)'
                ]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </div>

        {/* Moving Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(30,64,175,0.1) 0%, transparent 50%, rgba(147,51,234,0.1) 100%)',
              'linear-gradient(225deg, rgba(30,64,175,0.1) 0%, transparent 50%, rgba(147,51,234,0.1) 100%)',
              'linear-gradient(45deg, rgba(30,64,175,0.1) 0%, transparent 50%, rgba(147,51,234,0.1) 100%)'
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Security Icons with Enhanced Animation */}
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute pointer-events-none"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [0.8, 1, 0.8],
              rotate: [0, 360],
            }}
            transition={{ 
              duration: 8,
              delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-12 h-12 text-blue-400/40" />
            <motion.div
              className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay + 1
              }}
            />
          </motion.div>
        ))}
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
            x: [0, 30, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar Section with Animated Frame - Left on desktop, top on mobile */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-1 flex justify-center lg:justify-start mb-8 lg:mb-0"
          >
            <AnimatedImageFrame
              src={meImage}
              alt="Manpreet Singh - Cybersecurity Analyst"
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] aspect-[4/5]"
            />
          </motion.div>

          {/* Content Section - Right on desktop, bottom on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 text-center lg:text-left px-4 sm:px-6 md:px-8 lg:px-0"
          >
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
            >
              Manpreet Singh
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Cybersecurity Analyst / SOC Analyst — Securing Digital Assets, One Byte at a Time
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a 
                href="https://github.com/Insane-khalsa-998"
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 group w-full sm:w-auto px-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/manpreet-singh-263548221/"
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2 group w-full sm:w-auto px-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </motion.a>
              
              <motion.a 
                href="/src/assets/manpreet_resume_soc.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2 group w-full sm:w-auto px-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </motion.a>
            </motion.div>

            {/* Glass Card with Brief Intro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl"
            >
              <p className="text-gray-200 leading-relaxed mb-6">
                Experienced Security Officer transitioning to Cybersecurity, with hands-on expertise in SIEM monitoring, 
                threat detection, and incident response. Skilled in Python, JavaScript/TypeScript, and modern frameworks. 
                Currently focused on SOC analysis and security tool development.
              </p>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                {[
                  'SIEM Monitoring',
                  'Incident Response',
                  'Python',
                  'React',
                  'TypeScript',
                  'Security+',
                  'SOC Analysis'
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* TryHackMe Badge */}
              <div className="flex justify-center lg:justify-start">
                <iframe 
                  src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=5587085" 
                  style={{ border: 'none', width: '100%', maxWidth: '500px', height: '150px' }}
                  title="TryHackMe Badge"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Interactive Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8"
            >
              <HackerTerminal />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Skills Hexagon Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute -z-10 bottom-0 left-0 right-0 pointer-events-none opacity-20"
      >
        <SkillsHexagon />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDownIcon className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 
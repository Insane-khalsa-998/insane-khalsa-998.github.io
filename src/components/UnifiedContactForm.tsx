import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { emailService } from '../services/emailService'

// Using existing template types from emailService
import type { TemplateType } from '../services/emailService'
type FormType = TemplateType

interface FormData {
  name: string
  email: string
  subject: string
  message: string
  type: FormType
  company?: string
  project?: string
  budget?: string
  timeline?: string
  rating?: number
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const UnifiedContactForm = () => {
  const [formType, setFormType] = useState<FormType>("contact")
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "contact",
    company: "",
    project: "",
    budget: "",
    timeline: "",
    rating: 5
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitMessage, setSubmitMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await emailService.sendEmail(formData, formType)
      setSubmitMessage(response.message)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        type: formType,
        company: "",
        project: "",
        budget: "",
        timeline: "",
        rating: 5
      })
      setErrors({})
    } catch (error) {
      setSubmitMessage("Error sending message. Please try again later.")
      console.error("Error sending message:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.form 
        onSubmit={handleSubmit} 
        className="relative w-full max-w-4xl mx-auto bg-gradient-to-br from-[#1a1b26]/90 to-[#0f1419]/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 space-y-6 border border-gray-700/50 shadow-2xl overflow-hidden"
        variants={itemVariants}
      >
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {/* Cyber Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1b2620_1px,transparent_1px),linear-gradient(to_bottom,#1a1b2620_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Floating Tech Particles */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: `${(i * 20) + Math.random() * 10}%`,
                  top: `${Math.random() * 100}%`,
                  background: i % 2 === 0 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(139, 92, 246, 0.3)',
                  filter: 'blur(1px)'
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}
          </div>

          {/* Animated Gradient Lines */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(45deg, transparent 45%, rgba(59, 130, 246, 0.1) 50%, transparent 55%)',
              backgroundSize: '400% 400%'
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%']
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Glowing Orbs */}
          <motion.div
            className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10">
          <AnimatePresence>
            {submitMessage && (
              <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className={`p-4 rounded-xl backdrop-blur-sm ${
                  submitMessage.includes("Error") 
                    ? "bg-red-500/20 text-red-300 border border-red-500/30 shadow-lg shadow-red-500/10" 
                    : "bg-green-500/20 text-green-300 border border-green-500/30 shadow-lg shadow-green-500/10"
                }`}
              >
                <div className="flex items-center gap-2">
                  {submitMessage.includes("Error") ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                  {submitMessage}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced Form Type Selector */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            {[
              { type: "contact", label: "Contact Me", icon: "💬" },
              { type: "hire", label: "Hire Me", icon: "💼" },
              { type: "feedback", label: "Leave Feedback", icon: "⭐" }
            ].map(({ type, label, icon }) => (
              <motion.button
                key={type}
                type="button"
                onClick={() => {
                  setFormType(type as FormType)
                  setFormData(prev => ({ ...prev, type: type as FormType }))
                }}
                className={`relative px-6 py-3 rounded-xl text-center transition-all duration-300 overflow-hidden group ${
                  formType === type
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-200 border border-gray-700/50 hover:border-gray-600/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg">{icon}</span>
                  {label}
                </div>
                {formType === type && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10"
          variants={itemVariants}
        >
          {/* Name Field */}
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              <span className="flex items-center gap-2">
                👤 Name
              </span>
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={`block w-full px-4 py-3 rounded-xl bg-gray-900/60 backdrop-blur-sm border text-gray-200 shadow-sm focus:ring-2 transition-all duration-300 placeholder-gray-500 ${
                errors.name 
                  ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/50" 
                  : "border-gray-700/50 focus:border-blue-500 focus:ring-blue-500/50 hover:border-gray-600/50"
              }`}
              placeholder="Your full name"
              whileFocus={{ scale: 1.02 }}
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-2 text-sm text-red-400 flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Email Field */}
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              <span className="flex items-center gap-2">
                📧 Email
              </span>
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`block w-full px-4 py-3 rounded-xl bg-gray-900/60 backdrop-blur-sm border text-gray-200 shadow-sm focus:ring-2 transition-all duration-300 placeholder-gray-500 ${
                errors.email 
                  ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/50" 
                  : "border-gray-700/50 focus:border-blue-500 focus:ring-blue-500/50 hover:border-gray-600/50"
              }`}
              placeholder="your.email@example.com"
              whileFocus={{ scale: 1.02 }}
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-2 text-sm text-red-400 flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Subject Field */}
          <motion.div className="sm:col-span-2" variants={itemVariants}>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
              <span className="flex items-center gap-2">
                📝 Subject
              </span>
            </label>
            <motion.input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className={`block w-full px-4 py-3 rounded-xl bg-gray-900/60 backdrop-blur-sm border text-gray-200 shadow-sm focus:ring-2 transition-all duration-300 placeholder-gray-500 ${
                errors.subject 
                  ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/50" 
                  : "border-gray-700/50 focus:border-blue-500 focus:ring-blue-500/50 hover:border-gray-600/50"
              }`}
              placeholder="What's this about?"
              whileFocus={{ scale: 1.02 }}
            />
            <AnimatePresence>
              {errors.subject && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-2 text-sm text-red-400 flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.subject}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Hire-specific fields */}
          <AnimatePresence>
            {formType === "hire" && (
              <>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  variants={itemVariants}
                >
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    <span className="flex items-center gap-2">
                      🏢 Company
                    </span>
                  </label>
                  <motion.input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company || ""}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-xl bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 text-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500/50 focus:ring-2 transition-all duration-300 placeholder-gray-500 hover:border-gray-600/50"
                    placeholder="Your company name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  variants={itemVariants}
                >
                  <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                    <span className="flex items-center gap-2">
                      🚀 Project Type
                    </span>
                  </label>
                  <motion.input
                    type="text"
                    id="project"
                    name="project"
                    value={formData.project || ""}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-xl bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 text-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500/50 focus:ring-2 transition-all duration-300 placeholder-gray-500 hover:border-gray-600/50"
                    placeholder="Web app, security audit, etc."
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  variants={itemVariants}
                >
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    <span className="flex items-center gap-2">
                      💰 Budget Range
                    </span>
                  </label>
                  <motion.input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget || ""}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-xl bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 text-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500/50 focus:ring-2 transition-all duration-300 placeholder-gray-500 hover:border-gray-600/50"
                    placeholder="$1k-5k, $5k-10k, etc."
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  variants={itemVariants}
                >
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                    <span className="flex items-center gap-2">
                      ⏰ Timeline
                    </span>
                  </label>
                  <motion.input
                    type="text"
                    id="timeline"
                    name="timeline"
                    value={formData.timeline || ""}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-xl bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 text-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500/50 focus:ring-2 transition-all duration-300 placeholder-gray-500 hover:border-gray-600/50"
                    placeholder="2-4 weeks, 1-2 months, etc."
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Feedback-specific fields */}
          <AnimatePresence>
            {formType === "feedback" && (
              <motion.div 
                className="sm:col-span-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                variants={itemVariants}
              >
                <label htmlFor="rating" className="block text-sm font-medium text-gray-300 mb-2">
                  <span className="flex items-center gap-2">
                    ⭐ Rating ({formData.rating}/5)
                  </span>
                </label>
                <motion.input
                  type="range"
                  id="rating"
                  name="rating"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={handleChange}
                  className="block w-full accent-blue-500 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  whileFocus={{ scale: 1.02 }}
                />
                <div className="flex justify-between text-gray-400 text-sm mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={`${(formData.rating || 5) >= star ? 'text-yellow-400' : 'text-gray-600'}`}>
                      ⭐
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Message Field */}
          <motion.div className="sm:col-span-2" variants={itemVariants}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              <span className="flex items-center gap-2">
                💬 Message
              </span>
            </label>
            <motion.textarea
              id="message"
              name="message"
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              className={`block w-full px-4 py-3 rounded-xl bg-gray-900/60 backdrop-blur-sm border text-gray-200 shadow-sm focus:ring-2 transition-all duration-300 placeholder-gray-500 resize-none ${
                errors.message 
                  ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/50" 
                  : "border-gray-700/50 focus:border-blue-500 focus:ring-blue-500/50 hover:border-gray-600/50"
              }`}
              placeholder="Tell me about your project, feedback, or just say hello..."
              whileFocus={{ scale: 1.02 }}
            />
            <AnimatePresence>
              {errors.message && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-2 text-sm text-red-400 flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Enhanced Submit Button */}
        <motion.div className="relative z-10" variants={itemVariants}>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`relative w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden group ${
              isSubmitting 
                ? "opacity-50 cursor-not-allowed bg-gray-600" 
                : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            }`}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            <div className="flex items-center justify-center gap-3">
              {isSubmitting ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </>
              )}
            </div>
            
            {!isSubmitting && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            )}
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  )
}

export default UnifiedContactForm

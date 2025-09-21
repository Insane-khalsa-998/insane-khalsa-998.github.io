import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { api } from '../services/api'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
  type: 'general' | 'hire' | 'feedback'
  company?: string
  project?: string
  budget?: string
  timeline?: string
  rating?: number
}

const UnifiedContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general',
    rating: 5
  })

  const [submitMessage, setSubmitMessage] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      let response
      switch (formData.type) {
        case 'hire':
          response = await api.hire(formData)
          break
        case 'feedback':
          response = await api.feedback(formData)
          break
        default:
          response = await api.contact(formData)
      }

      setSubmitMessage('Message sent successfully! I will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        type: 'general',
        rating: 5
      })
    } catch (error) {
      setSubmitMessage('Error sending message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 rounded-xl p-6 md:p-8 shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Get in Touch</h2>
          <p className="text-gray-300 mb-8">Have a project in mind? Want to provide feedback? Let's connect!</p>
          
          {submitMessage && (
            <div className={`p-4 rounded-lg mb-6 ${submitMessage.includes('Error') ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="type" className="block text-gray-300 mb-2">Purpose</label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="general">General Contact</option>
                <option value="hire">Project Inquiry</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            {formData.type === 'hire' && (
              <>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-gray-300 mb-2">Company/Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company || ''}
                      onChange={handleChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-gray-300 mb-2">Budget Range</label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget || ''}
                      onChange={handleChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Optional"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-gray-300 mb-2">Timeline</label>
                  <input
                    type="text"
                    id="timeline"
                    name="timeline"
                    value={formData.timeline || ''}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 2-3 months, ASAP, etc."
                  />
                </div>
              </>
            )}

            {formData.type === 'feedback' && (
              <div>
                <label htmlFor="rating" className="block text-gray-300 mb-2">Rating</label>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                      className="text-2xl mr-1 focus:outline-none"
                    >
                      {star <= (formData.rating || 5) ? (
                        <span className="text-yellow-400">★</span>
                      ) : (
                        <span className="text-gray-400">☆</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message here..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default UnifiedContactForm
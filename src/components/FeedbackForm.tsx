import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackButton from './BackButton'
import { emailService } from '../services/emailService'

const FeedbackForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    feedbackType: 'general' | 'bug' | 'feature' | 'other';
    message: string;
    rating: number;
  }>({
    name: '',
    email: '',
    feedbackType: 'general',
    message: '',
    rating: 5
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    
    try {
      await emailService.sendEmail({
        ...formData,
        type: formData.feedbackType
      }, 'feedback')
      setSubmitMessage('Thank you for your valuable feedback!')
      // Reset form
      setFormData({
        name: '',
        email: '',
        feedbackType: 'general',
        message: '',
        rating: 5
      })
      setTimeout(() => navigate('/'), 2000)
    } catch (error) {
      setSubmitMessage(error instanceof Error ? error.message : 'Error sending feedback. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20 px-4">
      <div className="max-w-4xl mx-auto py-8">
      <BackButton label="Back to Projects" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 rounded-xl p-6 md:p-8 shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Leave Feedback</h2>
          <p className="text-gray-300 mb-8">Appreciate my work? Have suggestions? Your feedback helps me improve.</p>
          
          {submitMessage ? (
            <div className={`p-4 rounded-lg mb-6 ${submitMessage.includes('Error') ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>
              {submitMessage}
            </div>
          ) : (
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
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
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
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="feedbackType" className="block text-gray-300 mb-2">Feedback Type</label>
                  <select
                    id="feedbackType"
                    name="feedbackType"
                    value={formData.feedbackType}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="general">General Feedback</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="bug">Bug Report</option>
                    <option value="compliment">Compliment</option>
                  </select>
                </div>
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
                        {star <= formData.rating ? (
                          <span className="text-yellow-400">★</span>
                        ) : (
                          <span className="text-gray-500">☆</span>
                        )}
                      </button>
                    ))}
                    <span className="ml-2 text-gray-300">{formData.rating}/5</span>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Feedback</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-medium transition-colors duration-200 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Submit Feedback'}
              </motion.button>
            </form>
          )}
          
          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-300">
              All feedback is appreciated and helps me improve my services. Thank you for taking the time!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FeedbackForm
'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    // Replace with your actual form handling logic
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container-wrapper max-w-4xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Get In Touch
          </h2>
          <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
            Have a question or want to work together?
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 gap-6">
            {/* Name Input */}
            <div>
              <label 
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700
                         bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100
                         focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            {/* Email Input */}
            <div>
              <label 
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700
                         bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100
                         focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            {/* Message Input */}
            <div>
              <label 
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700
                         bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100
                         focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center px-6 py-3 rounded-lg
                       bg-primary-600 text-white font-medium
                       hover:bg-primary-700 focus:outline-none focus:ring-2
                       focus:ring-offset-2 focus:ring-primary-500
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <p className="text-center text-green-600 dark:text-green-400">
              Message sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-red-600 dark:text-red-400">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
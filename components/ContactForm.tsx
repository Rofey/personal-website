'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // In a real implementation, you would send this to an API endpoint
    // For now, we'll simulate a submission
    try {
      // TODO: Replace with actual API endpoint
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-foreground focus:outline-none focus:border-blue-600"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-foreground focus:outline-none focus:border-blue-600"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company (optional)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-foreground focus:outline-none focus:border-blue-600"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-foreground focus:outline-none focus:border-blue-600 resize-none"
          placeholder="Tell me about your project, what you want to build or automate..."
        />
      </div>

      {status === 'success' && (
        <div className="p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-300">
          Thank you! I'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-300">
          Something went wrong. Please try again or reach out via email.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-sm text-gray-500 text-center">
        Note: This form is a placeholder. In production, connect it to your email service or API endpoint.
        <br />
        Consider using services like Formspree, SendGrid, or building a custom API endpoint.
      </p>
    </form>
  )
}



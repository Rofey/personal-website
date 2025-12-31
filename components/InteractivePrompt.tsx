'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function InteractivePrompt() {
  const [input, setInput] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const lowerInput = input.toLowerCase()
    
    // Basic keyword matching to route to services
    if (lowerInput.includes('automation') || lowerInput.includes('automate') || lowerInput.includes('bot')) {
      router.push('/services?highlight=automation')
    } else if (lowerInput.includes('api') || lowerInput.includes('system') || lowerInput.includes('software')) {
      router.push('/services?highlight=systems')
    } else if (lowerInput.includes('ecommerce') || lowerInput.includes('shopify') || lowerInput.includes('payment')) {
      router.push('/services?highlight=ecommerce')
    } else if (lowerInput.includes('web') || lowerInput.includes('app') || lowerInput.includes('dashboard')) {
      router.push('/services?highlight=web')
    } else {
      router.push('/services')
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center border border-gray-700 rounded-lg bg-gray-900/50 focus-within:border-gray-600 transition-colors">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What do you want to build or automate?"
            className="flex-1 px-4 py-3 bg-transparent text-foreground placeholder-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-r-lg transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
      <p className="text-sm text-gray-500 mt-2 text-center">
        Describe your project and I'll show you relevant services
      </p>
    </div>
  )
}


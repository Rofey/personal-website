'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function InteractivePrompt() {
  const [input, setInput] = useState('')
  const [isFocused, setIsFocused] = useState(false)
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
      {/* Terminal-style prompt */}
      <div className={`
        border transition-all duration-300
        ${isFocused ? 'border-accent glow-box' : 'border-border'}
        bg-card
      `}>
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-3 py-2 border-b border-border text-xs text-muted">
          <span className="w-2 h-2 rounded-full bg-terminal-red" />
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="w-2 h-2 rounded-full bg-terminal-green" />
          <span className="ml-2 font-mono">query-engine</span>
        </div>
        
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="pl-4 text-terminal-green font-mono">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="describe your project..."
            className="flex-1 px-3 py-3 bg-transparent text-foreground placeholder-muted/50 focus:outline-none font-mono text-sm"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-accent hover:bg-accent-dim text-background font-bold text-sm transition-colors"
          >
            run
          </button>
        </form>
      </div>
      
      <p className="text-xs text-muted mt-3 text-center font-mono">
        <span className="text-accent">hint:</span> try "automation", "api", "dashboard", or "ecommerce"
      </p>
    </div>
  )
}

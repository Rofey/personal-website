'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function InteractivePrompt() {
  const [input, setInput] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isSubmitting) return
    
    setIsSubmitting(true)
    // Small delay for better UX feedback
    await new Promise(resolve => setTimeout(resolve, 300))
    router.push('/services')
  }

  return (
    <div className="w-full">
      <div className={`
        border-2 rounded-xl transition-all duration-300 shadow-sm
        ${isFocused 
          ? 'border-accent-secondary shadow-lg shadow-accent-secondary/10 bg-card' 
          : 'border-border bg-card hover:border-accent/50'
        }
      `}>
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="What are you looking to build?"
            className="flex-1 px-6 py-5 bg-transparent text-foreground placeholder-muted/50 focus:outline-none text-base"
          />
          <button
            type="submit"
            disabled={isSubmitting || !input.trim()}
            className="px-8 py-5 bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary hover:from-accent-dim hover:via-accent-secondary-dim hover:to-accent-tertiary-dim disabled:opacity-50 disabled:cursor-not-allowed text-background font-bold text-sm transition-all shadow-md hover:shadow-lg disabled:shadow-none"
            aria-label="Search services"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                Searching...
              </span>
            ) : (
              'Search'
            )}
          </button>
        </form>
      </div>
      
      <p className="text-sm text-muted mt-4 text-center">
        Try: <span className="font-mono text-accent-secondary">"automation"</span>, <span className="font-mono text-accent-secondary">"api"</span>, <span className="font-mono text-accent-secondary">"dashboard"</span>, or <span className="font-mono text-accent-secondary">"ecommerce"</span>
      </p>
    </div>
  )
}

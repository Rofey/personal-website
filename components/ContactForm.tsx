'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/meeozyzy', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-mono text-muted mb-2">
          <span className="text-accent">$</span> name <span className="text-terminal-red">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 bg-card border border-border text-foreground font-mono focus:outline-none focus:border-accent transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-mono text-muted mb-2">
          <span className="text-accent">$</span> email <span className="text-terminal-red">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-card border border-border text-foreground font-mono focus:outline-none focus:border-accent transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-mono text-muted mb-2">
          <span className="text-accent">$</span> company <span className="text-muted">(optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-3 bg-card border border-border text-foreground font-mono focus:outline-none focus:border-accent transition-colors"
          placeholder="Your company"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-mono text-muted mb-2">
          <span className="text-accent">$</span> message <span className="text-terminal-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 bg-card border border-border text-foreground font-mono focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      {status === 'success' && (
        <div className="p-4 bg-terminal-green/10 border border-terminal-green/30 text-terminal-green font-mono text-sm">
          <span className="text-terminal-green">✓</span> Message sent successfully. I&apos;ll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-terminal-red/10 border border-terminal-red/30 text-terminal-red font-mono text-sm">
          <span className="text-terminal-red">✗</span> Something went wrong. Please try again or email directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-8 py-4 bg-accent hover:bg-accent-dim disabled:opacity-50 disabled:cursor-not-allowed text-background font-bold transition-all hover:scale-[1.01] glow-box"
      >
        {status === 'sending' ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          './send-message →'
        )}
      </button>
    </form>
  )
}

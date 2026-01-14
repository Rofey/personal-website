'use client'

import { useState } from 'react'

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        return undefined
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Please enter a valid email address'
        return undefined
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        return undefined
      default:
        return undefined
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value
    setTouched(prev => ({ ...prev, [fieldName]: true }))
    const error = validateField(fieldName, fieldValue)
    setErrors(prev => ({ ...prev, [fieldName]: error }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value
    
    // Clear error when user starts typing
    if (errors[fieldName as keyof FormErrors] && touched[fieldName]) {
      const error = validateField(fieldName, fieldValue)
      setErrors(prev => ({ ...prev, [fieldName]: error }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Validate all fields
    const newErrors: FormErrors = {}
    let hasErrors = false
    
    for (const [name, value] of formData.entries()) {
      const error = validateField(name, String(value))
      if (error) {
        newErrors[name as keyof FormErrors] = error
        hasErrors = true
      }
    }
    
    if (hasErrors) {
      setErrors(newErrors)
      setTouched({ name: true, email: true, message: true })
      return
    }
    
    setStatus('sending')
    setErrors({})

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
        setTouched({})
        setErrors({})
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
          onBlur={handleBlur}
          onChange={handleChange}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`w-full px-4 py-3 bg-card border text-foreground font-mono focus:outline-none transition-colors ${
            errors.name && touched.name
              ? 'border-terminal-red focus:border-terminal-red'
              : 'border-border focus:border-accent'
          }`}
          placeholder="Your name"
        />
        {errors.name && touched.name && (
          <p id="name-error" className="mt-1 text-xs text-terminal-red font-mono" role="alert">
            {errors.name}
          </p>
        )}
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
          onBlur={handleBlur}
          onChange={handleChange}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full px-4 py-3 bg-card border text-foreground font-mono focus:outline-none transition-colors ${
            errors.email && touched.email
              ? 'border-terminal-red focus:border-terminal-red'
              : 'border-border focus:border-accent'
          }`}
          placeholder="you@example.com"
        />
        {errors.email && touched.email && (
          <p id="email-error" className="mt-1 text-xs text-terminal-red font-mono" role="alert">
            {errors.email}
          </p>
        )}
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
          onBlur={handleBlur}
          onChange={handleChange}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full px-4 py-3 bg-card border text-foreground font-mono focus:outline-none transition-colors resize-none ${
            errors.message && touched.message
              ? 'border-terminal-red focus:border-terminal-red'
              : 'border-border focus:border-accent'
          }`}
          placeholder="Tell me about your project..."
        />
        {errors.message && touched.message && (
          <p id="message-error" className="mt-1 text-xs text-terminal-red font-mono" role="alert">
            {errors.message}
          </p>
        )}
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

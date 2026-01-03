import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: "Contact - Let's Build Something",
  description: 'Get in touch to discuss your web application, automation, or software development project.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-muted mb-4">
            <span className="text-terminal-green">$</span>
            <span className="font-mono text-sm">./contact --init</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Let&apos;s build something.
          </h1>
          <p className="text-lg text-muted">
            Have a project in mind? Tell me about it and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* Form container */}
        <div className="border border-border bg-card">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <span className="w-3 h-3 rounded-full bg-terminal-red" />
            <span className="w-3 h-3 rounded-full bg-accent" />
            <span className="w-3 h-3 rounded-full bg-terminal-green" />
            <span className="ml-3 text-xs text-muted font-mono">new-message.sh</span>
          </div>
          
          <div className="p-8">
            <ContactForm />
          </div>
        </div>

        {/* Alternative contact */}
        <div className="mt-8 text-center">
          <p className="text-muted text-sm mb-4 font-mono">
            // or connect directly
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/rofey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors font-mono text-sm"
            >
              [github]
            </a>
            <a 
              href="https://linkedin.com/in/rofey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors font-mono text-sm"
            >
              [linkedin]
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

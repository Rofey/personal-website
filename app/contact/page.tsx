import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { SOCIAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: "Contact - Let's Build Something",
  description: 'Get in touch to discuss your web application, automation, or software development project.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            Let&apos;s build something.
          </h1>
          <p className="text-lg text-muted">
            Have a project in mind? Tell me about it and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* Form container */}
        <div className="border border-border bg-card rounded-lg">
          <div className="p-6">
            <ContactForm />
          </div>
        </div>

        {/* Alternative contact */}
        <div className="mt-6 text-center">
          <p className="text-muted text-sm mb-3">
            Or connect directly
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors text-sm"
            >
              GitHub
            </a>
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

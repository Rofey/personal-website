import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: "Contact - Let's Build Something Reliable",
  description: 'Get in touch to discuss your software engineering, automation, or system development project. Book a free consultation.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's build something reliable.
          </h1>
          <p className="text-xl text-gray-400">
            Ready to automate your workflows or build scalable software? Let's discuss your project.
          </p>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <ContactForm />
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p className="mb-2">Or connect with me on:</p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/rofey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/rofey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


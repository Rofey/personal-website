'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const words = ['Systems', 'Automation', 'Software']

export default function AnimatedHero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText.length < currentWord.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1))
      }, 100)
    } else if (!isDeleting && displayText.length === currentWord.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1))
      }, 50)
    } else if (isDeleting && displayText.length === 0) {
      // Move to next word
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentWordIndex])

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient with subtle motion */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-background to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
            Software engineer building{' '}
            <span className="relative inline-block">
              <span className="text-blue-400">{displayText}</span>
              <span className="inline-block w-0.5 h-8 sm:h-10 lg:h-12 bg-blue-400 ml-1 animate-pulse" />
            </span>
            <br />
            that actually work in the real world.
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Web applications • Automation • Scalable software
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/20 text-center"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/systems-work"
              className="group px-8 py-4 border border-gray-700 hover:border-gray-600 text-foreground font-semibold rounded-lg transition-all duration-200 hover:scale-105 text-center"
            >
              View Systems & Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


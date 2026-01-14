'use client'

import { useEffect, useRef, useState } from 'react'
import CodeSnippet from './CodeSnippet'
import IconCode from './icons/IconCode'

const steps = [
  {
    number: '01',
    title: 'Understand the real problem',
    description: 'Before writing code, I dig into what actually needs to be solved. Not the symptom, but the root cause.',
  },
  {
    number: '02',
    title: 'Design simple, reliable systems',
    description: 'Complex problems don\'t always need complex solutions. I build systems that are straightforward to understand and maintain.',
  },
  {
    number: '03',
    title: 'Automate repetitive work',
    description: 'If a task is done more than once, it should be automated. This frees up time for work that actually requires human judgment.',
  },
  {
    number: '04',
    title: 'Build for scale, not demos',
    description: 'I design systems that work when traffic grows, when data increases, and when requirements evolve. Real-world ready.',
  },
]

export default function HowIThink() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setTimeout(() => {
              setVisibleSteps((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index]
                }
                return prev
              })
            }, index * 150)
          }
        })
      },
      { threshold: 0.2 }
    )

    const elements = sectionRef.current?.querySelectorAll('[data-index]')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              How I Think About Software
            </h2>
            <p className="text-muted text-xl max-w-3xl leading-relaxed">
              Engineering maturity, not marketing. A practical approach to building systems that last.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[1.1rem] top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 via-accent-secondary/20 to-accent-tertiary/20 hidden sm:block" />
            
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`relative transition-all duration-500 ${
                    visibleSteps.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="flex gap-6 items-start group py-6">
                    {/* Number indicator */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-10 h-10 flex items-center justify-center border-2 border-border bg-background group-hover:border-accent group-hover:bg-accent/5 group-hover:text-accent transition-all font-bold text-sm z-10 relative rounded-lg shadow-sm group-hover:shadow-md">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-6 border-b border-border/50 group-hover:border-accent/30 transition-colors">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted leading-relaxed text-base">
                        {step.description}
                      </p>
                      
                      {/* Code snippet for step 2 */}
                      {index === 1 && (
                        <div className="mt-4">
                          <CodeSnippet
                            code={`// Simple, maintainable architecture
class UserService {
  async getUser(id: string) {
    return db.users.findOne({ id })
  }
}`}
                            language="typescript"
                          />
                        </div>
                      )}
                      
                      {/* Visual diagram for step 4 */}
                      {index === 3 && (
                        <div className="mt-4 flex items-center gap-2 text-sm text-muted">
                          <IconCode size={16} className="text-accent-secondary" />
                          <span className="font-mono">Scalable → Reliable → Maintainable</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

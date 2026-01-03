'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    number: '01',
    command: 'analyze --root-cause',
    title: 'Understand the real problem',
    description: 'Before writing code, I dig into what actually needs to be solved. Not the symptom, but the root cause.',
  },
  {
    number: '02',
    command: 'design --simple --reliable',
    title: 'Design simple, reliable systems',
    description: 'Complex problems don\'t always need complex solutions. I build systems that are straightforward to understand and maintain.',
  },
  {
    number: '03',
    command: 'automate --if="count > 1"',
    title: 'Automate repetitive work',
    description: 'If a task is done more than once, it should be automated. This frees up time for work that actually requires human judgment.',
  },
  {
    number: '04',
    command: 'build --scale=production',
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
    <section ref={sectionRef} className="py-24 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 text-muted mb-4">
              <span className="text-terminal-green">$</span>
              <span className="font-mono text-sm">cat philosophy.md</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How I Think About Software
            </h2>
            <p className="text-muted text-lg max-w-2xl">
              Engineering maturity, not marketing. A practical approach to building systems that last.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[1.1rem] top-0 bottom-0 w-px bg-border hidden sm:block" />
            
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
                      <div className="w-9 h-9 flex items-center justify-center border-2 border-border bg-background group-hover:border-accent group-hover:text-accent transition-colors font-bold text-sm z-10 relative">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-6 border-b border-border group-hover:border-accent/30 transition-colors">
                      {/* Command */}
                      <div className="text-xs font-mono text-accent/70 mb-2">
                        <span className="text-terminal-green">→</span> {step.command}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {step.description}
                      </p>
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

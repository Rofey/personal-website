'use client'

import { useEffect, useRef, useState } from 'react'

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
    <section ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How I Think About Software
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Engineering maturity, not marketing. A practical approach to building systems that last.
          </p>
        </div>

        <div className="space-y-8">
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
              <div className="flex flex-col sm:flex-row gap-6 items-start group">
                <div className="flex-shrink-0">
                  <div className="text-4xl sm:text-5xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden sm:block absolute left-[2.5rem] top-16 bottom-0 w-0.5 bg-gray-800 -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



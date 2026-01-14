'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import IconCheck from './icons/IconCheck'
import IconSparkles from './icons/IconSparkles'

export default function AnimatedHero() {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setScrollY(-rect.top * 0.3)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[85vh] flex items-center overflow-hidden py-16"
    >
      {/* Animated background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ transform: `translateY(${scrollY}px)` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 opacity-10 pointer-events-none">
        <IconSparkles size={120} className="text-accent-secondary animate-pulse-slow" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 pointer-events-none">
        <IconSparkles size={80} className="text-accent-tertiary animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-terminal-green/30 bg-terminal-green/10 backdrop-blur-sm text-terminal-green text-sm rounded-full shadow-sm">
              <span className="w-2 h-2 bg-terminal-green rounded-full animate-pulse" />
              Available for projects
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
              <span className="block">I build</span>
              <span className="block gradient-text bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
                software
              </span>
              <span className="block text-foreground">that works</span>
              <span className="block text-muted text-3xl sm:text-4xl lg:text-5xl font-semibold mt-2">
                when it matters.
              </span>
            </h1>
            
            <p className="text-xl text-muted max-w-lg leading-relaxed font-light">
              Full-stack engineer building web applications, automation, 
              and scalable systems from frontend to infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary hover:from-accent-dim hover:via-accent-secondary-dim hover:to-accent-tertiary-dim text-background font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 rounded-lg"
              >
                <span>Get Started</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/systems-work"
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-border hover:border-accent-secondary hover:bg-gradient-to-r hover:from-accent/5 hover:via-accent-secondary/5 hover:to-accent-tertiary/5 text-foreground font-bold transition-all rounded-lg hover:shadow-md"
              >
                View My Work
                <span className="group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100">→</span>
              </Link>
            </div>
          </div>
          
          {/* Right side - Stats/Highlights */}
          <div className="space-y-6">
            <div className="border border-border bg-card p-8 rounded-xl card-elevated bg-gradient-to-br from-card via-card to-accent/5 shadow-lg">
              <h2 className="text-2xl font-extrabold mb-6 bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                What I Deliver
              </h2>
              <div className="space-y-4">
                <div className="group/item">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-terminal-green/10 flex items-center justify-center group-hover/item:bg-terminal-green/20 transition-colors">
                      <IconCheck size={14} className="text-terminal-green" />
                    </div>
                    <span className="font-bold text-lg">Production-Ready Systems</span>
                  </div>
                  <p className="text-sm text-muted pl-9">Scalable applications built to handle real-world traffic and growth.</p>
                </div>
                <div className="group/item">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-secondary/10 flex items-center justify-center group-hover/item:bg-accent-secondary/20 transition-colors">
                      <IconCheck size={14} className="text-accent-secondary" />
                    </div>
                    <span className="font-bold text-lg">Time-Saving Automation</span>
                  </div>
                  <p className="text-sm text-muted pl-9">Workflows that eliminate repetitive tasks and reduce manual work by 80%+.</p>
                </div>
                <div className="group/item">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-tertiary/10 flex items-center justify-center group-hover/item:bg-accent-tertiary/20 transition-colors">
                      <IconCheck size={14} className="text-accent-tertiary" />
                    </div>
                    <span className="font-bold text-lg">Full-Stack Solutions</span>
                  </div>
                  <p className="text-sm text-muted pl-9">End-to-end development from UI design to deployment and infrastructure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom stats bar */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10+', label: 'Projects shipped', color: 'text-accent' },
              { value: '99.9%', label: 'Uptime', color: 'text-terminal-green' },
              { value: 'Full', label: 'Stack coverage', color: 'text-accent-secondary' },
              { value: '80%', label: 'Time saved', color: 'text-accent-tertiary' },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className={`animate-in delay-${(index + 1) * 100} text-center md:text-left group/stat`}
              >
                <div className={`text-4xl md:text-5xl font-extrabold ${stat.color} mb-1 group-hover/stat:scale-110 transition-transform`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

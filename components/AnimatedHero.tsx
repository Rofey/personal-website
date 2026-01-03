'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

const commands = [
  { cmd: 'npm run build', output: 'Production build complete ✓' },
  { cmd: 'deploy --scale=auto', output: 'Deployed to 3 regions ✓' },
  { cmd: 'automate workflow.yml', output: 'Reduced manual work by 80% ✓' },
]

export default function AnimatedHero() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [showOutput, setShowOutput] = useState(false)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (currentLine >= commands.length) {
      // Reset after showing all
      const resetTimeout = setTimeout(() => {
        setCurrentLine(0)
        setDisplayText('')
        setShowOutput(false)
        setIsTyping(true)
      }, 3000)
      return () => clearTimeout(resetTimeout)
    }

    const currentCommand = commands[currentLine]
    
    if (isTyping) {
      if (displayText.length < currentCommand.cmd.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentCommand.cmd.slice(0, displayText.length + 1))
        }, 50 + Math.random() * 50) // Variable typing speed for realism
        return () => clearTimeout(timeout)
      } else {
        // Command fully typed, show output
        const outputTimeout = setTimeout(() => {
          setShowOutput(true)
          setIsTyping(false)
        }, 500)
        return () => clearTimeout(outputTimeout)
      }
    } else {
      // Move to next line after showing output
      const nextTimeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1)
        setDisplayText('')
        setShowOutput(false)
        setIsTyping(true)
      }, 2000)
      return () => clearTimeout(nextTimeout)
    }
  }, [displayText, isTyping, currentLine])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-accent/20 text-6xl font-bold select-none hidden lg:block">
        {'//'}
      </div>
      <div className="absolute bottom-20 right-10 text-accent/20 text-6xl font-bold select-none hidden lg:block">
        {'</>'}
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-terminal-green/30 bg-terminal-green/10 text-terminal-green text-sm rounded-full">
              <span className="w-2 h-2 bg-terminal-green rounded-full animate-pulse" />
              Available for projects
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-muted">{'//'} </span>
              I build{' '}
              <span className="text-accent glow">software</span>
              <br />
              that works
              <br />
              <span className="text-muted text-2xl sm:text-3xl lg:text-4xl">
                when it matters.
              </span>
            </h1>
            
            <p className="text-lg text-muted max-w-md">
              Full-stack engineer building web applications, automation, 
              and scalable systems from frontend to infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dim text-background font-bold transition-all duration-200 hover:scale-[1.02] glow-box"
              >
                <span>./start-project</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/systems-work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-border hover:border-accent text-foreground font-bold transition-all duration-200 hover:scale-[1.02]"
              >
                cat systems.log
              </Link>
            </div>
          </div>
          
          {/* Right side - Terminal */}
          <div className="terminal-window rounded-lg overflow-hidden animate-in delay-200">
            <div className="terminal-header border-b border-border bg-card">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
              <span className="ml-4 text-xs text-muted">rofeyy@systems:~</span>
            </div>
            
            <div className="p-6 space-y-3 bg-card min-h-[300px]">
              {/* Previous completed commands */}
              {commands.slice(0, currentLine).map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-terminal-green">$</span>
                    <span className="text-foreground">{item.cmd}</span>
                  </div>
                  <div className="text-muted pl-4 text-sm">{item.output}</div>
                </div>
              ))}
              
              {/* Current command being typed */}
              {currentLine < commands.length && (
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-terminal-green">$</span>
                    <span className="text-foreground">{displayText}</span>
                    {isTyping && (
                      <span className="w-2.5 h-5 bg-accent animate-cursor-blink" />
                    )}
                  </div>
                  {showOutput && (
                    <div className="text-muted pl-4 text-sm animate-fade-in-up">
                      {commands[currentLine].output}
                    </div>
                  )}
                </div>
              )}
              
              {/* Waiting cursor after all commands */}
              {currentLine >= commands.length && (
                <div className="flex items-center gap-2">
                  <span className="text-terminal-green">$</span>
                  <span className="w-2.5 h-5 bg-accent animate-cursor-blink" />
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Bottom stats bar */}
        <div className="mt-20 pt-8 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10+', label: 'Projects shipped' },
              { value: '99.9%', label: 'Uptime' },
              { value: 'Full', label: 'Stack coverage' },
              { value: '80%', label: 'Time saved' },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className={`animate-in delay-${(index + 1) * 100} text-center md:text-left`}
              >
                <div className="text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

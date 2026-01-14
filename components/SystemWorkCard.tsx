'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import IconCode from './icons/IconCode'
import IconArrow from './icons/IconArrow'

interface SystemWorkCardProps {
  title: string
  whatExisted: string
  whatWasBuilt: string
  whatChanged: string
  tech: string[]
  link?: string
}

export default function SystemWorkCard({
  title,
  whatExisted,
  whatWasBuilt,
  whatChanged,
  tech,
  link,
}: SystemWorkCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={cardRef}
      className={`group relative bg-card border border-border hover:border-accent-secondary/50 card-elevated transition-all duration-300 overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Header bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-gradient-to-r from-card-hover to-card">
        <span className="w-2.5 h-2.5 rounded-full bg-terminal-red shadow-sm" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent-secondary shadow-sm" />
        <span className="w-2.5 h-2.5 rounded-full bg-terminal-green shadow-sm" />
        <span className="ml-3 text-xs text-muted font-mono truncate flex items-center gap-2">
          <IconCode size={12} className="text-accent-secondary/50" />
          {title.toLowerCase().replace(/\s+/g, '-')}.log
        </span>
      </div>
      
      <div className="p-6 space-y-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-extrabold group-hover:text-accent transition-colors mb-1">
            {title}
          </h3>
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-1.5 text-xs font-mono text-accent-secondary hover:text-accent-tertiary transition-colors group/link"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Visit</span>
              <IconArrow size={12} direction="right" className="group-hover/link:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>

        {/* Before state */}
        <div className="space-y-2 group/item">
          <div className="flex items-center gap-2 text-xs font-mono">
            <div className="w-2 h-2 rounded-full bg-terminal-red shadow-sm" />
            <span className="text-muted uppercase tracking-wider font-bold">BEFORE</span>
          </div>
          <p className="text-muted text-sm pl-5 border-l-2 border-terminal-red/40 group-hover/item:border-terminal-red/60 transition-colors leading-relaxed">{whatExisted}</p>
        </div>

        {/* Built state */}
        <div className="space-y-2 group/item">
          <div className="flex items-center gap-2 text-xs font-mono">
            <div className="w-2 h-2 rounded-full bg-accent-secondary shadow-sm" />
            <span className="text-muted uppercase tracking-wider font-bold">BUILT</span>
          </div>
          <p className="text-foreground/90 text-sm pl-5 border-l-2 border-accent-secondary/40 group-hover/item:border-accent-secondary/60 transition-colors leading-relaxed">{whatWasBuilt}</p>
        </div>

        {/* Result state */}
        <div className="space-y-2 group/item">
          <div className="flex items-center gap-2 text-xs font-mono">
            <div className="w-2 h-2 rounded-full bg-terminal-green shadow-sm" />
            <span className="text-muted uppercase tracking-wider font-bold">RESULT</span>
          </div>
          <p className="text-terminal-green/90 text-sm pl-5 border-l-2 border-terminal-green/40 group-hover/item:border-terminal-green/60 transition-colors font-semibold leading-relaxed">{whatChanged}</p>
        </div>

        {/* Tech Stack */}
        <div className="pt-5 border-t border-border/50">
          <div className="flex flex-wrap gap-2">
            {tech.map((t, index) => (
              <span
                key={index}
                className="text-xs font-mono px-3 py-1.5 bg-gradient-to-br from-accent/10 via-accent-secondary/10 to-accent-tertiary/10 text-accent-secondary border border-accent-secondary/20 group-hover:border-accent-secondary/50 group-hover:bg-gradient-to-br group-hover:from-accent/15 group-hover:via-accent-secondary/15 group-hover:to-accent-tertiary/15 transition-all rounded-md font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Hover accent */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent via-accent-secondary to-terminal-green group-hover:w-full transition-all duration-500" />
    </div>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { SOCIAL_LINKS, TECH_STACK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About - Full-Stack Software Engineer',
  description: 'Learn about Rofeyy, a full-stack software engineer building web applications, automation, and scalable systems.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold">
            About
          </h1>
        </div>

        <div className="space-y-6 text-lg text-muted leading-relaxed">
          <p>
            I&apos;m a full-stack software engineer who builds applications designed to last. From 
            frontend interfaces to backend systems, I create reliable solutions that solve real problems.
          </p>

          <p>
            I build responsive web apps, design scalable architectures, and automate repetitive tasks. 
            I&apos;ve shipped production applications used by thousands, integrated complex services, 
            and streamlined workflows that previously required hours of manual work.
          </p>

          {/* What I Do */}
          <div className="border border-border bg-card p-6 mt-6">
            <h2 className="text-xl font-bold text-foreground mb-3">
              What I Do
            </h2>
            <ul className="space-y-3 text-muted">
              {[
                'Build full-stack web applications with React, Next.js, and Node.js',
                'Design and implement scalable APIs and databases',
                'Create automation that eliminates repetitive work',
                'Integrate services and platforms seamlessly',
                'Write maintainable, well-documented code',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-terminal-green mt-1">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Approach */}
          <div className="border border-border bg-card p-6">
            <h2 className="text-xl font-bold text-foreground mb-3">
              My Approach
            </h2>
            <p className="text-muted">
              I build software designed to last, not just to impress. My approach is practical: 
              understand the problem, design simple solutions, and build for the long term. 
              No over-engineering, no unnecessary complexity.
            </p>
          </div>

          {/* Tech */}
          <div className="border border-border bg-card p-6">
            <h2 className="text-xl font-bold text-foreground mb-3">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <span 
                  key={tech}
                  className="text-sm font-mono px-3 py-1 bg-accent/10 text-accent border border-accent/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dim text-background font-bold transition-colors"
          >
            Work Together →
          </Link>
        </div>

        {/* Social links */}
        <div className="mt-8 pt-6 border-t border-border">
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

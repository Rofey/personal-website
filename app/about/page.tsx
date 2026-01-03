import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About - Full-Stack Software Engineer',
  description: 'Learn about Rofeyy, a full-stack software engineer building web applications, automation, and scalable systems.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-muted mb-4">
            <span className="text-terminal-green">$</span>
            <span className="font-mono text-sm">whoami --verbose</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold">
            About
          </h1>
        </div>

        <div className="space-y-8 text-lg text-muted leading-relaxed">
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
          <div className="border border-border bg-card p-6 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-accent">//</span> What I Do
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
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-accent">//</span> My Approach
            </h2>
            <p className="text-muted">
              I build software designed to last, not just to impress. My approach is practical: 
              understand the problem, design simple solutions, and build for the long term. 
              No over-engineering, no unnecessary complexity.
            </p>
          </div>

          {/* Tech */}
          <div className="border border-border bg-card p-6">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-accent">//</span> Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Java', 'Spring Boot', 'PostgreSQL', 'AWS', 'Python', 'Tailwind CSS'].map((tech) => (
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
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dim text-background font-bold transition-all hover:scale-[1.02] glow-box"
          >
            ./work-together →
          </Link>
        </div>

        {/* Social links */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/rofey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors font-mono text-sm"
            >
              [github]
            </a>
            <a 
              href="https://linkedin.com/in/rofey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors font-mono text-sm"
            >
              [linkedin]
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

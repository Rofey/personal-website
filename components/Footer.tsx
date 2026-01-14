import Link from 'next/link'
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="mb-4">
              <span className="text-lg font-bold">Rofeyy</span>
            </div>
            <p className="text-muted text-sm mb-4 max-w-xs">
              Software engineer building systems that actually work in the real world.
            </p>
            <div className="flex gap-4">
              <a 
                href={SOCIAL_LINKS.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors text-sm"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors text-sm"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs text-accent mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {[...NAV_LINKS, { href: '/contact', label: 'Contact' }].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-muted hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-4">
            <h4 className="text-xs text-accent mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex items-center gap-2">
                <span className="text-terminal-green">✓</span>
                Web Applications
              </li>
              <li className="flex items-center gap-2">
                <span className="text-terminal-green">✓</span>
                Full-Stack Development
              </li>
              <li className="flex items-center gap-2">
                <span className="text-terminal-green">✓</span>
                Automation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-terminal-green">✓</span>
                APIs & Integrations
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Rofeyy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

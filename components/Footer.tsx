import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ASCII art divider */}
        <div className="text-center text-muted text-xs font-mono mb-8 overflow-hidden">
          {'═'.repeat(60)}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-accent text-lg">{'>'}</span>
              <span className="text-lg font-bold">rofeyy</span>
              <span className="w-2 h-4 bg-accent/80 animate-cursor-blink" />
            </div>
            <p className="text-muted text-sm mb-4 max-w-xs">
              Software engineer building systems that actually work in the real world.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/rofey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors text-sm font-mono"
                aria-label="GitHub"
              >
                [github]
              </a>
              <a 
                href="https://linkedin.com/in/rofey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors text-sm font-mono"
                aria-label="LinkedIn"
              >
                [linkedin]
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono text-accent mb-4">// NAVIGATION</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'index' },
                { href: '/services', label: 'services' },
                { href: '/systems-work', label: 'work' },
                { href: '/about', label: 'about' },
                { href: '/contact', label: 'contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-muted hover:text-foreground transition-colors text-sm font-mono flex items-center gap-2"
                  >
                    <span className="text-accent">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono text-accent mb-4">// SERVICES</h4>
            <ul className="space-y-2 text-sm text-muted font-mono">
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
          <p className="text-xs text-muted font-mono">
            © {new Date().getFullYear()} rofeyy <span className="text-accent">|</span> all rights reserved
          </p>
          <p className="text-xs text-muted font-mono">
            <span className="text-terminal-green">status:</span> online <span className="inline-block w-1.5 h-1.5 bg-terminal-green rounded-full ml-1 animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'index' },
  { href: '/services', label: 'services' },
  { href: '/systems-work', label: 'work' },
  { href: '/about', label: 'about' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="group relative flex items-center gap-2"
          >
            <span className="text-accent text-lg">{'>'}</span>
            <span className="text-lg font-bold text-foreground glitch-hover">
              rofeyy
            </span>
            <span className="w-2 h-4 bg-accent/80 animate-cursor-blink" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`
                  relative px-4 py-2 text-sm font-medium transition-colors
                  ${pathname === link.href 
                    ? 'text-accent' 
                    : 'text-muted hover:text-foreground'
                  }
                `}
              >
                <span className="text-muted mr-1">{String(index).padStart(2, '0')}.</span>
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-accent" />
                )}
              </Link>
            ))}
            <div className="w-px h-6 bg-border mx-2" />
            <Link 
              href="/contact" 
              className="ml-2 px-4 py-2 bg-accent hover:bg-accent-dim text-background text-sm font-bold transition-all hover:scale-[1.02]"
            >
              contact()
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-foreground transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    px-4 py-3 text-sm font-medium transition-colors
                    ${pathname === link.href 
                      ? 'text-accent bg-accent/10' 
                      : 'text-muted hover:text-foreground hover:bg-card'
                    }
                  `}
                >
                  <span className="text-muted mr-2">{String(index).padStart(2, '0')}.</span>
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-2 px-4 py-3 bg-accent hover:bg-accent-dim text-background text-sm font-bold text-center transition-all"
              >
                contact()
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

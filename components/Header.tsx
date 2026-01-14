'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { NAV_LINKS } from '@/lib/constants'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="group relative flex items-center gap-2"
          >
            <span className="relative">
              <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary bg-clip-text text-transparent group-hover:from-accent-secondary group-hover:via-accent-tertiary group-hover:to-accent transition-all duration-500">
                Rofeyy
              </span>
              {/* Subtle glow effect on hover */}
              <span className="absolute inset-0 text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary bg-clip-text text-transparent opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500">
                Rofeyy
              </span>
            </span>
            {/* Decorative dot */}
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-secondary to-accent-tertiary opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
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
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-accent" />
                )}
              </Link>
            ))}
            <div className="w-px h-6 bg-border mx-2" />
            <Link 
              href="/contact" 
              className="ml-2 px-5 py-2 bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary hover:from-accent-dim hover:via-accent-secondary-dim hover:to-accent-tertiary-dim text-background text-sm font-bold transition-all shadow-sm hover:shadow-md rounded-md"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            ref={buttonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`w-6 h-0.5 bg-foreground transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            id="mobile-menu"
            ref={menuRef}
            className="md:hidden py-4 border-t border-border"
            role="menu"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
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
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-2 px-4 py-3 bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary hover:from-accent-dim hover:via-accent-secondary-dim hover:to-accent-tertiary-dim text-background text-sm font-bold text-center transition-all shadow-sm rounded-md"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

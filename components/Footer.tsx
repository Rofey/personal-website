import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Rofeyy</h3>
            <p className="text-gray-400 text-sm mb-4">
              Software engineer building systems that actually work in the real world.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/rofey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/rofey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/systems-work" className="text-gray-400 hover:text-foreground transition-colors">
                  Systems & Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Backend Engineering</li>
              <li>REST APIs</li>
              <li>Automation</li>
              <li>System Design</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rofeyy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


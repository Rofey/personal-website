import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="relative text-xl font-bold text-foreground transition-all duration-200 group"
          >
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Rofeyy
            </span>
            <span className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200">
              Rofeyy
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300" />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-400 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-gray-400 hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="/systems-work" className="text-sm font-medium text-gray-400 hover:text-foreground transition-colors">
              Systems & Work
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-400 hover:text-foreground transition-colors">
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <Link 
              href="/contact" 
              className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}


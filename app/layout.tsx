import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { StructuredData } from '@/lib/seo'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rofeyy.com'),
  title: {
    default: 'Rofeyy - Software Engineer | Systems, Automation & Scalable Applications',
    template: '%s | Rofeyy'
  },
  description: 'Software engineer building systems that actually work in the real world. Web applications, automation, and scalable software solutions.',
  keywords: ['software engineer', 'web applications', 'automation', 'scalable systems', 'system engineering', 'software development', 'automation engineer', 'scalable applications'],
  authors: [{ name: 'Rofeyy' }],
  creator: 'Rofeyy',
  publisher: 'Rofeyy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rofeyy.com',
    siteName: 'Rofeyy',
    title: 'Rofeyy - Software Engineer | Systems, Automation & Scalable Applications',
    description: 'Software engineer building systems that actually work in the real world. Web applications, automation, and scalable software solutions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rofeyy - Software Engineer | Systems, Automation & Scalable Applications',
    description: 'Software engineer building systems that actually work in the real world. Web applications, automation, and scalable software solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${jetbrainsMono.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className={`${jetbrainsMono.className} antialiased`}>
        {/* Scanline overlay for CRT effect */}
        <div className="scanlines" aria-hidden="true" />
        {/* Grid background */}
        <div className="grid-bg" aria-hidden="true" />
        <Header />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

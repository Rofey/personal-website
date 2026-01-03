import { Metadata } from 'next'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: 'Services - Full-Stack Development & Automation',
  description: 'Software engineering services: web applications, APIs, automation workflows, and integrations. Solutions designed to last.',
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 text-muted mb-4">
            <span className="text-terminal-green">$</span>
            <span className="font-mono text-sm">cat services.json</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Services
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            Software systems designed to last, not just to impress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-16">
          <div className="md:col-span-2">
            <ServiceCard
              title="Web Applications"
              index={0}
              isPrimary={true}
              items={[
                'React & Next.js applications',
                'Responsive, accessible interfaces',
                'Admin dashboards with real-time data',
                'Internal tools and business applications',
                'Client portals and customer systems',
                'Authentication and user management',
                'Full-stack applications end-to-end'
              ]}
            />
          </div>

          <ServiceCard
            title="Backend & APIs"
            index={1}
            items={[
              'REST and GraphQL API development',
              'Database design and optimization',
              'Authentication and authorization',
              'Third-party service integrations',
              'Performance optimization and caching',
              'Cloud infrastructure (AWS, Vercel)',
              'System monitoring and logging'
            ]}
          />

          <ServiceCard
            title="Automation"
            index={2}
            items={[
              'Booking and scheduling automation',
              'Lead processing pipelines',
              'Data extraction and processing',
              'Email and notification workflows',
              'AI-powered chatbots',
              'Business process automation',
              'Report generation'
            ]}
          />

          <ServiceCard
            title="E-commerce"
            index={3}
            items={[
              'Shopify and WooCommerce customization',
              'Payment gateway integrations',
              'Custom storefronts',
              'Order processing automation',
              'Inventory management',
              'Multi-channel synchronization'
            ]}
          />

          <ServiceCard
            title="Integrations"
            index={4}
            items={[
              'API integrations',
              'Webhook implementations',
              'Data synchronization',
              'CRM integrations',
              'Marketing automation tools',
              'Third-party service connections'
            ]}
          />
        </div>

        {/* CTA */}
        <div className="border border-border bg-card p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Build Something?</h2>
          <p className="text-muted mb-6">
            Let&apos;s discuss how I can help with your next project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dim text-background font-bold transition-all hover:scale-[1.02] glow-box"
          >
            ./start-conversation →
          </Link>
        </div>
      </div>
    </div>
  )
}

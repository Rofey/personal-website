import { Metadata } from 'next'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: 'Services - Software Engineering, Automation & System Development',
  description: 'Software engineering services: system architecture, automation workflows, web applications, and integrations. Solutions designed to last.',
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Services
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Software systems designed to last, not just to impress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="md:col-span-2">
            <ServiceCard
              title="System Engineering"
              isPrimary={true}
              items={[
                'Scalable architecture design and implementation',
                'Secure API development with proper authentication',
                'Database design, optimization, and migration',
                'Third-party service integrations',
                'Performance optimization and caching',
                'Microservices architecture',
                'Cloud infrastructure setup and management',
                'System monitoring, logging, and error handling',
                'API documentation',
                'Security best practices'
              ]}
            />
          </div>

          <ServiceCard
            title="Automation"
            items={[
              'Booking and scheduling automation',
              'Lead processing pipelines',
              'AI-powered chatbots and assistants',
              'Data extraction from documents',
              'Email and notification automation',
              'Workflow orchestration',
              'Integration with AI services',
              'Business process automation',
              'Report generation and data processing'
            ]}
          />

          <ServiceCard
            title="Web Applications"
            items={[
              'Admin dashboards with real-time data',
              'Internal tools and business applications',
              'Client portals and customer systems',
              'Full-stack applications',
              'Authentication and user management',
              'Role-based access control',
              'File upload and management',
              'Search and filtering',
              'Real-time updates'
            ]}
          />

          <ServiceCard
            title="E-commerce & Integrations"
            items={[
              'Shopify and WooCommerce customizations',
              'Payment gateway integrations',
              'Order processing automation',
              'Inventory management',
              'Reporting and analytics',
              'Customer data synchronization',
              'Marketing automation',
              'Shipping integrations',
              'Multi-channel management'
            ]}
          />
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Build Something?</h2>
          <p className="text-gray-400 mb-6">
            Let's discuss how I can help you build scalable software or automate your workflows.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/20"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import SystemWorkCard from '@/components/SystemWorkCard'

export const metadata: Metadata = {
  title: 'Systems & Work - Software Engineering Solutions',
  description: 'Real-world software engineering projects: appointment automation, lead processing systems, data extraction automation, and scalable API architectures.',
}

const systems = [
  {
    title: 'Scalable API System',
    whatExisted: 'Client needed a robust backend to support their growing web application with high traffic and complex business logic, but their existing system couldn\'t scale.',
    whatWasBuilt: 'A scalable REST API with proper authentication, rate limiting, caching, and database optimization. Implemented microservices architecture for critical components.',
    whatChanged: 'Handles 10,000+ requests per day with 99.9% uptime and sub-200ms response times. Successfully scaled to handle 5x traffic growth.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'AWS', 'Docker']
  },
  {
    title: 'Appointment Booking Automation',
    whatExisted: 'Manual appointment scheduling that was time-consuming and error-prone for a service business, leading to double bookings and missed opportunities.',
    whatWasBuilt: 'A voice bot integrated with calendar systems and CRM, automating the entire booking workflow with natural language processing. The system handles availability checks, conflict resolution, and sends automated confirmations.',
    whatChanged: 'Reduced booking time by 80% and eliminated scheduling conflicts. Handles 200+ bookings per week automatically.',
    tech: ['Python', 'Twilio', 'REST APIs', 'CRM Integration', 'NLP']
  },
  {
    title: 'Lead Processing Pipeline',
    whatExisted: 'Incoming leads from multiple sources (website forms, social media, referrals) required manual data entry and follow-up coordination, causing delays and lost opportunities.',
    whatWasBuilt: 'An automated pipeline that captures, validates, enriches, and routes leads to appropriate team members with real-time notifications. Includes duplicate detection and lead scoring.',
    whatChanged: 'Processed 500+ leads per month automatically with 95% accuracy. Reduced response time from hours to minutes.',
    tech: ['Node.js', 'PostgreSQL', 'Webhooks', 'Email Automation', 'API Integrations']
  },
  {
    title: 'Receipt to Excel Automation',
    whatExisted: 'Business needed to extract receipt data and organize it into structured Excel reports for accounting, requiring hours of manual data entry each month.',
    whatWasBuilt: 'An automated system that processes receipts via OCR, extracts key data (date, amount, vendor, category), and generates formatted Excel files with proper categorization and totals.',
    whatChanged: 'Reduced manual data entry time from hours to minutes per month. 99% accuracy in data extraction.',
    tech: ['Python', 'OCR APIs', 'Excel Automation', 'Data Processing', 'Image Processing']
  },
  {
    title: 'E-commerce Integration System',
    whatExisted: 'Business needed to sync inventory, orders, and customer data between Shopify, their internal systems, and third-party fulfillment services. Manual sync was error-prone and time-consuming.',
    whatWasBuilt: 'A comprehensive integration system that synchronizes data in real-time across all platforms, handles webhooks, manages inventory levels, and processes orders automatically with error handling and retry logic.',
    whatChanged: 'Eliminated manual data entry. Real-time sync ensures accurate inventory and order processing across all channels. Reduced errors by 95%.',
    tech: ['Node.js', 'Shopify API', 'Webhooks', 'PostgreSQL', 'REST APIs']
  },
  {
    title: 'AI-Powered Customer Support Bot',
    whatExisted: 'Customer support team was overwhelmed with repetitive questions, leading to slow response times and decreased customer satisfaction.',
    whatWasBuilt: 'An AI-powered chatbot that handles common inquiries, provides instant responses, and escalates complex issues to human agents with full context and conversation history.',
    whatChanged: 'Handles 70% of customer inquiries automatically. Reduced average response time from 2 hours to 30 seconds.',
    tech: ['Python', 'OpenAI API', 'REST APIs', 'NLP', 'Webhook Integration']
  }
]

export default function SystemsWorkPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Systems & Work
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real problems, real solutions, real results. Each system is built to solve actual business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {systems.map((system, index) => (
            <SystemWorkCard
              key={index}
              title={system.title}
              whatExisted={system.whatExisted}
              whatWasBuilt={system.whatWasBuilt}
              whatChanged={system.whatChanged}
              tech={system.tech}
            />
          ))}
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Have a System to Build?</h2>
          <p className="text-gray-400 mb-6">
            Let's discuss how I can help you build scalable software or automate your workflows.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/20"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}


import { Metadata } from 'next'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects & Case Studies',
  description: 'Real-world software projects: web applications, automation systems, APIs, and full-stack solutions.',
}

const projects = [
  {
    title: 'Appointment Booking Automation',
    problem: 'Manual appointment scheduling was time-consuming and error-prone for a service business, leading to double bookings and missed opportunities.',
    solution: 'Built a voice bot integrated with calendar systems and CRM, automating the entire booking workflow with natural language processing. The system handles availability checks, conflict resolution, and sends automated confirmations.',
    tech: ['Python', 'Twilio', 'REST APIs', 'CRM Integration', 'NLP'],
    result: 'Reduced booking time by 80% and eliminated scheduling conflicts. Handles 200+ bookings per week automatically.'
  },
  {
    title: 'Lead Processing Pipeline',
    problem: 'Incoming leads from multiple sources (website forms, social media, referrals) required manual data entry and follow-up coordination, causing delays and lost opportunities.',
    solution: 'Developed an automated pipeline that captures, validates, enriches, and routes leads to appropriate team members with real-time notifications. Includes duplicate detection and lead scoring.',
    tech: ['Node.js', 'PostgreSQL', 'Webhooks', 'Email Automation', 'API Integrations'],
    result: 'Processed 500+ leads per month automatically with 95% accuracy. Reduced response time from hours to minutes.'
  },
  {
    title: 'Receipt to Excel Automation',
    problem: 'Business needed to extract receipt data and organize it into structured Excel reports for accounting, requiring hours of manual data entry each month.',
    solution: 'Created an automated system that processes receipts via OCR, extracts key data (date, amount, vendor, category), and generates formatted Excel files with proper categorization and totals.',
    tech: ['Python', 'OCR APIs', 'Excel Automation', 'Data Processing', 'Image Processing'],
    result: 'Reduced manual data entry time from hours to minutes per month. 99% accuracy in data extraction.'
  },
  {
    title: 'Scalable API System',
    problem: 'Client needed a robust backend to support their growing web application with high traffic and complex business logic, but their existing system couldn\'t scale.',
    solution: 'Architected and built a scalable REST API with proper authentication, rate limiting, caching, and database optimization. Implemented microservices architecture for critical components.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
    result: 'Handles 10,000+ requests per day with 99.9% uptime and sub-200ms response times. Successfully scaled to handle 5x traffic growth.'
  },
  {
    title: 'E-commerce Integration System',
    problem: 'Business needed to sync inventory, orders, and customer data between Shopify, their internal systems, and third-party fulfillment services.',
    solution: 'Built a comprehensive integration system that synchronizes data in real-time across all platforms, handles webhooks, manages inventory levels, and processes orders automatically.',
    tech: ['Node.js', 'Shopify API', 'Webhooks', 'PostgreSQL', 'REST APIs'],
    result: 'Eliminated manual data entry. Real-time sync ensures accurate inventory and order processing across all channels.'
  },
  {
    title: 'AI-Powered Customer Support Bot',
    problem: 'Customer support team was overwhelmed with repetitive questions, leading to slow response times and decreased customer satisfaction.',
    solution: 'Developed an AI-powered chatbot that handles common inquiries, provides instant responses, and escalates complex issues to human agents with full context.',
    tech: ['Python', 'OpenAI API', 'REST APIs', 'NLP', 'Webhook Integration'],
    result: 'Handles 70% of customer inquiries automatically. Reduced average response time from 2 hours to 30 seconds.'
  }
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 text-muted mb-4">
            <span className="text-terminal-green">$</span>
            <span className="font-mono text-sm">ls ./projects --all</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Projects & Case Studies
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            Real solutions for real business problems. From web apps to automation systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              problem={project.problem}
              solution={project.solution}
              tech={project.tech}
              result={project.result}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="border border-border bg-card p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-muted mb-6">
            Let&apos;s discuss how I can help you build your next application.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accent-dim text-background font-bold transition-all hover:scale-[1.02]"
          >
            ./start-project →
          </Link>
        </div>
      </div>
    </div>
  )
}

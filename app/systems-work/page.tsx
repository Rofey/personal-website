import { Metadata } from 'next'
import Link from 'next/link'
import SystemWorkCard from '@/components/SystemWorkCard'

export const metadata: Metadata = {
  title: 'Systems & Work - Software Projects',
  description: 'Real-world software projects: web applications, automation systems, APIs, and full-stack solutions.',
}

interface System {
  title: string
  whatExisted: string
  whatWasBuilt: string
  whatChanged: string
  tech: string[]
  link?: string
}

const systems: System[] = [
  {
    title: 'Sauda – Community Deals Platform',
    whatExisted: 'Deal discovery in Pakistan was fragmented across social media, chats, and retailer sites, making it hard to judge deal quality and trustworthiness.',
    whatWasBuilt: 'A community-driven deals platform where users post offers, vote, and discuss deals, with built-in validation through structured inputs, voting, and reporting.',
    whatChanged: 'Created a transparent system for surfacing genuine deals and filtering low-quality posts, laying the foundation for a scalable savings community.',
    tech: ['Next.js', 'Supabase', 'PostgreSQL', 'Vercel'],
    link: 'https://sauda-hvdo.vercel.app'
  },
  {
    title: 'Receipt to Excel Automation',
    whatExisted: 'Business needed to extract receipt data and organize it into structured Excel reports for accounting, requiring hours of manual data entry each month.',
    whatWasBuilt: 'An automated system that processes receipts via OCR, extracts key data (date, amount, vendor, category), and generates formatted Excel files with proper categorization and totals.',
    whatChanged: 'Reduced manual data entry time from hours to minutes per month. 99% accuracy in data extraction.',
    tech: ['React', 'TypeScript', 'ExcelJS', 'Google Cloud Vision', 'Vercel'],
    link: 'https://receipt-to-excel.vercel.app'
  },
  {
    title: 'Remembered - Legacy call Automation',
    whatExisted: 'Manual appointment scheduling via phone was slow, error-prone, and prone to double bookings, leading to missed appointments and frustrated staff.',
    whatWasBuilt: 'A voice bot integrated with calendars and CRM systems to handle inbound calls, understand natural language, and automatically schedule appointments, including conflict resolution.',
    whatChanged: 'Reduced booking time by 80% and eliminated scheduling conflicts, managing 200+ bookings per week without manual intervention.',
    tech: ['Python', 'vapi', 'REST APIs', 'CRM Integration'],
    link: 'https://remembered-brown.vercel.app'
  },
  {
    title: 'Lead Processing Pipeline',
    whatExisted: 'Incoming leads from multiple sources (website forms, social media, referrals) required manual data entry and follow-up coordination, causing delays and lost opportunities.',
    whatWasBuilt: 'An automated pipeline that captures, validates, enriches, and routes leads to appropriate team members with real-time notifications. Includes duplicate detection and lead scoring.',
    whatChanged: 'Processed 500+ leads per month automatically with 95% accuracy. Reduced response time from hours to minutes.',
    tech: ['Node.js', 'PostgreSQL', 'Webhooks', 'Email Automation', 'API Integrations']
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-muted mb-3">
            <span className="text-terminal-green">$</span>
            <span className="font-mono text-sm">ls ./work --detailed</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            Systems & Work
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            Real problems, real solutions, real results. Each system is built to solve actual business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-10">
          {systems.map((system, index) => (
            <SystemWorkCard
              key={index}
              title={system.title}
              whatExisted={system.whatExisted}
              whatWasBuilt={system.whatWasBuilt}
              whatChanged={system.whatChanged}
              tech={system.tech}
              link={system.link}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="border border-border bg-card p-6 text-center">
          <h2 className="text-2xl font-bold mb-3">Have a System to Build?</h2>
          <p className="text-muted mb-4">
            Let&apos;s discuss how I can help with your next project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dim text-background font-bold transition-all hover:scale-[1.02] glow-box"
          >
            ./start-project →
          </Link>
        </div>
      </div>
    </div>
  )
}

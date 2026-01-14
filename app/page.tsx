import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import HowIThink from '@/components/HowIThink'
import Differentiator from '@/components/Differentiator'
import SystemWorkCard from '@/components/SystemWorkCard'
import ServiceCard from '@/components/ServiceCard'
import { TECH_STACK } from '@/lib/constants'

export const metadata = {
  title: 'Software Engineer - Systems, Automation & Scalable Applications',
  description: 'Software engineer building systems that actually work in the real world. Web applications, automation, and scalable software solutions.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <AnimatedHero />

      {/* How I Think Section */}
      <HowIThink />

      {/* What Makes My Work Different */}
      <Differentiator />

      {/* Core Services Section */}
      <section className="py-24 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                What I Build
              </h2>
              <p className="text-lg text-muted max-w-2xl">
                Software systems designed to last, not just to impress
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
              <ServiceCard
                title="Web Applications"
                index={0}
                items={[
                  'React & Next.js apps',
                  'Responsive interfaces',
                  'Admin dashboards',
                  'Client portals',
                  'Full-stack applications'
                ]}
              />
              <ServiceCard
                title="Backend & APIs"
                index={1}
                items={[
                  'REST & GraphQL APIs',
                  'Database design',
                  'Authentication systems',
                  'Third-party integrations'
                ]}
              />
              <ServiceCard
                title="Automation"
                index={2}
                items={[
                  'Workflow automation',
                  'Data pipelines',
                  'Business process automation',
                  'Scheduled tasks'
                ]}
              />
              <ServiceCard
                title="E-commerce"
                index={3}
                items={[
                  'Shopify & WooCommerce',
                  'Payment integrations',
                  'Custom storefronts',
                  'Inventory systems'
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Systems & Work Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-16 flex-wrap gap-4">
              <div>
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-3">
                  Systems & Work
                </h2>
                <p className="text-muted text-base">
                  Recent projects and case studies
                </p>
              </div>
              <Link
                href="/systems-work"
                className="text-sm text-accent hover:text-accent-dim transition-colors flex items-center gap-2"
              >
                View All <span>→</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <SystemWorkCard
                title="Sauda – Community Deals Platform"
                whatExisted="Deal discovery in Pakistan was fragmented across social media, chats, and retailer sites, making it hard to judge deal quality and trustworthiness."
                whatWasBuilt="A community-driven deals platform where users post offers, vote, and discuss deals, with built-in validation through structured inputs, voting, and reporting."
                whatChanged="Created a transparent system for surfacing genuine deals and filtering low-quality posts, laying the foundation for a scalable savings community."
                tech={['Next.js', 'Supabase', 'PostgreSQL', 'Vercel']}
                link="https://sauda-hvdo.vercel.app"
              />
              <SystemWorkCard
                title="Receipt to Excel Automation"
                whatExisted="Business needed to extract receipt data and organize it into structured Excel reports, requiring hours of manual data entry each month."
                whatWasBuilt="An automated system that processes receipts via OCR, extracts key data, and generates formatted Excel files with proper categorization and totals."
                whatChanged="Reduced manual data entry time from hours to minutes per month. 99% accuracy in data extraction."
                tech={['React', 'TypeScript', 'ExcelJS', 'Google Cloud Vision', 'Vercel']}
                link="https://receipt-to-excel.vercel.app"
              />
              <SystemWorkCard
                title="Remembered - Legacy call Automation"
                whatExisted="Manual appointment scheduling via phone was slow, error-prone, and prone to double bookings, leading to missed appointments and frustrated staff."
                whatWasBuilt="A voice bot integrated with calendars and CRM systems to handle inbound calls, understand natural language, and automatically schedule appointments, including conflict resolution."
                whatChanged="Reduced booking time by 80% and eliminated scheduling conflicts, managing 200+ bookings per week without manual intervention."
                tech={['Python', 'vapi', 'REST APIs', 'CRM Integration']}
                link="https://remembered-brown.vercel.app"
              />
              <SystemWorkCard
                title="Lead Processing Pipeline"
                whatExisted="Incoming leads from multiple sources required manual data entry and follow-up coordination, causing delays and lost opportunities."
                whatWasBuilt="An automated pipeline that captures, validates, enriches, and routes leads to appropriate team members with real-time notifications and duplicate detection."
                whatChanged="Processed 500+ leads per month automatically with 95% accuracy. Reduced response time from hours to minutes."
                tech={['Node.js', 'PostgreSQL', 'Webhooks', 'Email Automation']}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-28 bg-gradient-subtle border-y border-border relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-tertiary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-8">
              About
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted text-xl">
                I&apos;m a full-stack software engineer who builds applications designed to last. From 
                frontend interfaces to backend systems, I create reliable solutions that solve real problems.
              </p>
              <p className="text-muted">
                I build responsive web apps, design scalable architectures, and automate repetitive tasks. 
                I&apos;ve shipped production applications used by thousands, integrated complex services, 
                and streamlined workflows that previously required hours of manual work.
              </p>
              <div className="bg-card/50 border-l-4 border-accent-secondary p-6 rounded-r-lg shadow-sm">
                <p className="text-foreground font-semibold text-lg">
                  My approach is practical: understand the problem, design simple solutions, and build for 
                  the long term.
                </p>
              </div>
            </div>
            
            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-border hover:border-accent-secondary hover:bg-gradient-to-r hover:from-accent/5 hover:via-accent-secondary/5 hover:to-accent-tertiary/5 text-foreground font-bold transition-all rounded-lg hover:shadow-md"
              >
                <span>Learn More</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section - Marquee style */}
      <section className="py-16 border-b border-border overflow-hidden bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="text-muted">
            <span className="text-sm uppercase tracking-wider font-bold">Technologies</span>
          </div>
        </div>
        
        {/* Scrolling tech ticker */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="text-2xl sm:text-3xl font-extrabold text-border hover:text-accent-secondary transition-colors cursor-default hover:scale-110 inline-block"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-accent/30 bg-accent/5 backdrop-blur-sm text-accent text-sm mb-6 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-terminal-green rounded-full animate-pulse" />
              Open for new projects
            </div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Let&apos;s build something
              <br />
              <span className="bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
                reliable.
              </span>
            </h2>
            
            <p className="text-muted mb-10 text-xl max-w-2xl mx-auto leading-relaxed">
              Ready to build your next web app or automate your workflows? Let&apos;s discuss your project.
            </p>
            
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary hover:from-accent-dim hover:via-accent-secondary-dim hover:to-accent-tertiary-dim text-background font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 rounded-lg"
            >
              <span>Get In Touch</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

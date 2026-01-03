import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import HowIThink from '@/components/HowIThink'
import Differentiator from '@/components/Differentiator'
import SystemWorkCard from '@/components/SystemWorkCard'
import ServiceCard from '@/components/ServiceCard'
import InteractivePrompt from '@/components/InteractivePrompt'

export const metadata = {
  title: 'Software Engineer - Systems, Automation & Scalable Applications',
  description: 'Software engineer building systems that actually work in the real world. Web applications, automation, and scalable software solutions.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <AnimatedHero />

      {/* Interactive Prompt Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-border">
        <div className="max-w-2xl mx-auto">
          <InteractivePrompt />
        </div>
      </section>

      {/* How I Think Section */}
      <HowIThink />

      {/* What Makes My Work Different */}
      <Differentiator />

      {/* Core Services Section */}
      <section className="py-24 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-start gap-4 mb-16">
              <span className="text-accent text-5xl font-bold">{'<>'}</span>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                  What I Build
                </h2>
                <p className="text-muted">
                  Software systems designed to last, not just to impress
                </p>
              </div>
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
              <div className="flex items-start gap-4">
                <span className="text-accent text-5xl font-bold">◆</span>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                    Systems & Work
                  </h2>
                  <p className="text-muted font-mono text-sm">
                    <span className="text-terminal-green">$</span> ls ./projects --recent
                  </p>
                </div>
              </div>
              <Link
                href="/systems-work"
                className="text-sm font-mono text-accent hover:text-accent-dim transition-colors flex items-center gap-2"
              >
                view all <span>→</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <SystemWorkCard
                title="Scalable API System"
                whatExisted="Client needed a robust backend to support their growing web application, but their existing system couldn't scale with traffic growth."
                whatWasBuilt="A scalable REST API with proper authentication, rate limiting, caching, and database optimization. Microservices architecture for critical components."
                whatChanged="Handles 10,000+ requests per day with 99.9% uptime and sub-200ms response times. Successfully scaled to handle 5x traffic growth."
                tech={['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'AWS']}
              />
              <SystemWorkCard
                title="Appointment Booking Automation"
                whatExisted="Manual appointment scheduling that was time-consuming and error-prone, leading to double bookings and missed opportunities."
                whatWasBuilt="A voice bot integrated with calendar systems and CRM, automating the entire booking workflow with natural language processing and conflict resolution."
                whatChanged="Reduced booking time by 80% and eliminated scheduling conflicts. Handles 200+ bookings per week automatically."
                tech={['Python', 'Twilio', 'REST APIs', 'CRM Integration']}
              />
              <SystemWorkCard
                title="Lead Processing Pipeline"
                whatExisted="Incoming leads from multiple sources required manual data entry and follow-up coordination, causing delays and lost opportunities."
                whatWasBuilt="An automated pipeline that captures, validates, enriches, and routes leads to appropriate team members with real-time notifications and duplicate detection."
                whatChanged="Processed 500+ leads per month automatically with 95% accuracy. Reduced response time from hours to minutes."
                tech={['Node.js', 'PostgreSQL', 'Webhooks', 'Email Automation']}
              />
              <SystemWorkCard
                title="Receipt to Excel Automation"
                whatExisted="Business needed to extract receipt data and organize it into structured Excel reports, requiring hours of manual data entry each month."
                whatWasBuilt="An automated system that processes receipts via OCR, extracts key data, and generates formatted Excel files with proper categorization and totals."
                whatChanged="Reduced manual data entry time from hours to minutes per month. 99% accuracy in data extraction."
                tech={['Python', 'OCR APIs', 'Excel Automation', 'Data Processing']}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Brutalist asymmetric layout */}
      <section className="py-24 bg-card border-y border-border relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[25rem] font-bold text-border/20 select-none hidden xl:block leading-none">
          ?
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-muted mb-6">
              <span className="text-terminal-green">$</span>
              <span className="font-mono text-sm">whoami</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              About
            </h2>
            
            <div className="space-y-6 text-lg text-muted leading-relaxed">
              <p>
                I&apos;m a full-stack software engineer who builds applications designed to last. From 
                frontend interfaces to backend systems, I create reliable solutions that solve real problems.
              </p>
              <p>
                I build responsive web apps, design scalable architectures, and automate repetitive tasks. 
                I&apos;ve shipped production applications used by thousands, integrated complex services, 
                and streamlined workflows that previously required hours of manual work.
              </p>
              <p className="text-foreground">
                My approach is practical: understand the problem, design simple solutions, and build for 
                the long term.
              </p>
            </div>
            
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border hover:border-accent text-foreground font-bold transition-all hover:scale-[1.02]"
              >
                <span>./read-more</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section - Marquee style */}
      <section className="py-16 border-b border-border overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-center gap-3 text-muted">
            <span className="text-accent">//</span>
            <span className="font-mono text-sm uppercase tracking-wider">Technologies</span>
          </div>
        </div>
        
        {/* Scrolling tech ticker */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex gap-8 animate-marquee whitespace-nowrap">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Java', 'Spring Boot', 'AWS', 'PostgreSQL', 'Python', 'Tailwind', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Java', 'Spring Boot', 'AWS', 'PostgreSQL', 'Python', 'Tailwind'].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="text-2xl sm:text-3xl font-bold text-border hover:text-accent transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 border border-accent/30 text-accent text-sm font-mono mb-8">
              <span className="animate-pulse">●</span> Open for new projects
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Let&apos;s build something
              <br />
              <span className="text-accent">reliable.</span>
            </h2>
            
            <p className="text-muted mb-10 text-lg max-w-xl mx-auto">
              Ready to build your next web app or automate your workflows? Let&apos;s discuss your project.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dim text-background font-bold text-lg transition-all hover:scale-[1.02] glow-box"
            >
              <span>./start-conversation</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

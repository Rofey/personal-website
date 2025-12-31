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
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-gray-800">
        <div className="max-w-2xl mx-auto">
          <InteractivePrompt />
        </div>
      </section>

      {/* How I Think Section */}
      <HowIThink />

      {/* What Makes My Work Different */}
      <Differentiator />

      {/* Core Services Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What I Build
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Software systems designed to last, not just to impress
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="System Engineering"
              items={[
                'Scalable architecture',
                'Secure APIs',
                'Database design',
                'Third-party integrations',
                'Performance optimization'
              ]}
            />
            <ServiceCard
              title="Automation"
              items={[
                'Workflow automation',
                'Data processing pipelines',
                'Business process automation',
                'Integration automation'
              ]}
            />
            <ServiceCard
              title="Web Applications"
              items={[
                'Admin dashboards',
                'Internal tools',
                'Client portals',
                'Full-stack applications'
              ]}
            />
            <ServiceCard
              title="E-commerce & Integrations"
              items={[
                'Shopify & WooCommerce',
                'Payment gateways',
                'Reporting systems',
                'Platform integrations'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Systems & Work Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Systems & Work
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real problems, real solutions, real results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
          <div className="text-center">
            <Link
              href="/systems-work"
              className="inline-block px-8 py-4 border border-gray-700 hover:border-gray-600 text-foreground font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              View All Systems & Work
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            About
          </h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a software engineer who builds systems designed to last. My work focuses on creating 
              reliable, scalable solutions that solve real business problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I design architectures that scale, build automation that saves time, and write code that's 
              maintainable. I've built production systems handling thousands of requests daily, integrated 
              complex services, and automated processes that previously required hours of manual work.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My approach is practical: understand the problem, design simple solutions, automate what can be 
              automated, and build for the long term.
            </p>
          </div>
          <div className="mt-10">
            <Link
              href="/about"
              className="inline-block px-8 py-4 border border-gray-700 hover:border-gray-600 text-foreground font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12">
            Technologies I Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-3 text-lg">
            {['Java', 'Spring Boot', 'AWS', 'SQL', 'Node.js', 'REST APIs', 'Linux', 'Power BI', 'Shopify'].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's build something reliable.
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Ready to automate your workflows or build scalable software? Let's discuss your project.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/20"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}

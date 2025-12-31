import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About - Software Engineer | Systems, Automation & Scalable Applications',
  description: 'Learn about Rofeyy, a software engineer specializing in building systems that actually work in the real world.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About
          </h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            I'm a software engineer who builds systems designed to last. My work focuses on creating 
            reliable, scalable solutions that solve real business problems.
          </p>

          <p>
            I design architectures that scale, build automation that saves time, and write code that's 
            maintainable. I've built production systems handling thousands of requests daily, integrated 
            complex services, and automated processes that previously required hours of manual work.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What I Do</h2>
          
          <p>
            I build software systems—web applications, automation workflows, and scalable architectures. 
            This includes:
          </p>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Building scalable systems that handle growth</li>
            <li>Designing databases and APIs optimized for performance</li>
            <li>Creating automation that eliminates repetitive work</li>
            <li>Integrating services and platforms seamlessly</li>
            <li>Architecting systems that evolve with your business</li>
            <li>Writing code that's maintainable and well-documented</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">My Approach</h2>

          <p>
            I build software systems designed to last, not just to impress. My approach is practical: 
            understand the problem, design simple solutions, automate what can be automated, and build for 
            the long term.
          </p>

          <p>
            I work with businesses that need <strong className="text-foreground">real solutions</strong>—systems 
            that solve actual problems. Whether it's automating a manual process, building an application that 
            scales, or integrating services that need to work together seamlessly, I focus on delivering value 
            that makes a measurable difference.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Experience & Expertise</h2>

          <p>
            I have real-world production experience building systems that businesses depend on. My expertise 
            spans system engineering, automation, cloud infrastructure, and API development. I've worked 
            with technologies like Java, Spring Boot, Node.js, AWS, PostgreSQL, and various third-party APIs.
          </p>

          <p>
            I'm particularly skilled in <strong className="text-foreground">automation</strong>—identifying 
            repetitive processes and building systems that handle them automatically. This includes everything 
            from booking systems and lead processing to data extraction and report generation.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/20"
          >
            Let's Work Together
          </Link>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/rofey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/rofey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

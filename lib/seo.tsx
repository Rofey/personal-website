export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rofeyy",
    "url": "https://rofeyy.com",
    "sameAs": [
      "https://github.com/rofey",
      "https://linkedin.com/in/rofey"
    ],
    "jobTitle": "Software Engineer",
    "description": "Software engineer building systems that actually work in the real world. Web applications, automation, and scalable software solutions.",
    "knowsAbout": [
      "Software Engineering",
      "System Engineering",
      "Web Applications",
      "Automation",
      "Scalable Systems",
      "API Development"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}


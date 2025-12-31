const points = [
  {
    title: 'Focus on reliability over hype',
    description: 'I build systems that work consistently, not just when they\'re being demoed.',
  },
  {
    title: 'Systems designed to scale',
    description: 'Architecture that grows with your business, not against it.',
  },
  {
    title: 'Automation with purpose',
    description: 'Every automation solves a real problem and saves measurable time.',
  },
  {
    title: 'Clean code, clear thinking',
    description: 'Code that\'s maintainable, documented, and built for the long term.',
  },
]

export default function Differentiator() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gray-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What Makes My Work Different
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="group p-8 border border-gray-800 rounded-lg bg-gray-900/50 hover:border-gray-700 transition-all duration-300 hover:bg-gray-900/70"
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {point.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



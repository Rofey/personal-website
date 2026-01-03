const points = [
  {
    icon: '◈',
    title: 'End-to-end ownership',
    description: 'From UI design to deployment. No handoffs, no gaps.',
    stat: 'Full-stack',
  },
  {
    icon: '⬡',
    title: 'Built to scale',
    description: 'Architecture that grows with your users, not against them.',
    stat: 'Production-ready',
  },
  {
    icon: '◇',
    title: 'Purposeful automation',
    description: 'Every script saves measurable time. No automation theater.',
    stat: '80% time saved',
  },
  {
    icon: '▣',
    title: 'Clean code, clear docs',
    description: 'Maintainable code that future-you will thank you for.',
    stat: 'Long-term',
  },
]

export default function Differentiator() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-bold text-border/30 select-none hidden xl:block leading-none">
        {'{}'}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-start gap-4 mb-16">
            <span className="text-accent text-5xl font-bold">//</span>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                Why clients choose me
              </h2>
              <p className="text-muted">
                <span className="text-terminal-green">$</span> cat ./differentiators.md
              </p>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {points.map((point, index) => (
              <div
                key={index}
                className="group relative p-8 bg-card border border-border hover:border-accent/50 transition-all duration-300"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-accent/0 group-hover:border-r-accent/20 transition-all duration-300" />
                
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-accent/60 group-hover:text-accent transition-colors">
                    {point.icon}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                        {point.title}
                      </h3>
                      <span className="text-xs font-mono text-terminal-green bg-terminal-green/10 px-2 py-1 rounded">
                        {point.stat}
                      </span>
                    </div>
                    <p className="text-muted leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
                
                {/* Bottom line indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-dim group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

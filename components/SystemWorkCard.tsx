interface SystemWorkCardProps {
  title: string
  whatExisted: string
  whatWasBuilt: string
  whatChanged: string
  tech: string[]
}

export default function SystemWorkCard({
  title,
  whatExisted,
  whatWasBuilt,
  whatChanged,
  tech,
}: SystemWorkCardProps) {
  return (
    <div className="group relative bg-card border border-border hover:border-accent/50 transition-all duration-300 overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-card-hover">
        <span className="w-2 h-2 rounded-full bg-terminal-red" />
        <span className="w-2 h-2 rounded-full bg-accent" />
        <span className="w-2 h-2 rounded-full bg-terminal-green" />
        <span className="ml-2 text-xs text-muted font-mono truncate">{title.toLowerCase().replace(/\s+/g, '-')}.log</span>
      </div>
      
      <div className="p-6 space-y-5">
        <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
          {title}
        </h3>

        {/* Before state */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-terminal-red">●</span>
            <span className="text-muted uppercase tracking-wider">BEFORE</span>
          </div>
          <p className="text-muted text-sm pl-4 border-l border-terminal-red/30">{whatExisted}</p>
        </div>

        {/* Built state */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-accent">●</span>
            <span className="text-muted uppercase tracking-wider">BUILT</span>
          </div>
          <p className="text-foreground/80 text-sm pl-4 border-l border-accent/30">{whatWasBuilt}</p>
        </div>

        {/* Result state */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-terminal-green">●</span>
            <span className="text-muted uppercase tracking-wider">RESULT</span>
          </div>
          <p className="text-terminal-green/90 text-sm pl-4 border-l border-terminal-green/30 font-medium">{whatChanged}</p>
        </div>

        {/* Tech Stack */}
        <div className="pt-4 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {tech.map((t, index) => (
              <span
                key={index}
                className="text-xs font-mono px-2 py-1 bg-accent/10 text-accent border border-accent/20 group-hover:border-accent/40 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Hover accent */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent to-terminal-green group-hover:w-full transition-all duration-500" />
    </div>
  )
}

interface ProjectCardProps {
  title: string
  problem: string
  solution: string
  tech: string[]
  result: string
}

export default function ProjectCard({ title, problem, solution, tech, result }: ProjectCardProps) {
  return (
    <div className="group p-6 border border-border bg-card hover:border-accent/50 transition-all">
      <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">{title}</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-xs font-mono text-muted uppercase tracking-wider mb-1">
            <span className="text-terminal-red">●</span> Problem
          </h4>
          <p className="text-sm text-muted">{problem}</p>
        </div>
        
        <div>
          <h4 className="text-xs font-mono text-muted uppercase tracking-wider mb-1">
            <span className="text-accent">●</span> Solution
          </h4>
          <p className="text-sm text-foreground/80">{solution}</p>
        </div>
        
        <div>
          <h4 className="text-xs font-mono text-muted uppercase tracking-wider mb-1">Tech</h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((t, index) => (
              <span key={index} className="text-xs font-mono px-2 py-1 bg-accent/10 text-accent border border-accent/20">
                {t}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-mono text-muted uppercase tracking-wider mb-1">
            <span className="text-terminal-green">●</span> Result
          </h4>
          <p className="text-sm text-terminal-green font-medium">{result}</p>
        </div>
      </div>
    </div>
  )
}

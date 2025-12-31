interface ProjectCardProps {
  title: string
  problem: string
  solution: string
  tech: string[]
  result: string
}

export default function ProjectCard({ title, problem, solution, tech, result }: ProjectCardProps) {
  return (
    <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-colors">
      <h3 className="text-xl font-bold mb-4 text-foreground">{title}</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-1">Problem</h4>
          <p className="text-sm text-gray-400">{problem}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution</h4>
          <p className="text-sm text-gray-400">{solution}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-1">Tech Used</h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((t, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-300">
                {t}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-1">Result</h4>
          <p className="text-sm text-blue-400 font-medium">{result}</p>
        </div>
      </div>
    </div>
  )
}



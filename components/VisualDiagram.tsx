interface VisualDiagramProps {
  title: string
  steps: Array<{
    label: string
    icon?: React.ReactNode
  }>
  className?: string
}

export default function VisualDiagram({ title, steps, className = '' }: VisualDiagramProps) {
  return (
    <div className={`bg-gradient-to-br from-accent/5 via-accent-secondary/5 to-accent-tertiary/5 border border-border/50 rounded-xl p-6 ${className}`}>
      <h4 className="text-sm font-bold text-muted uppercase tracking-wider mb-6">{title}</h4>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center text-accent font-bold">
              {step.icon || (index + 1)}
            </div>
            <p className="text-sm text-center text-muted font-medium">{step.label}</p>
            {index < steps.length - 1 && (
              <div className="hidden sm:block absolute left-[calc(50%+24px)] w-full h-0.5 bg-gradient-to-r from-accent/30 to-transparent" 
                style={{ transform: `translateX(${index * 100}%)` }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


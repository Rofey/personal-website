interface ServiceCardProps {
  title: string
  items: string[]
  isPrimary?: boolean
  index?: number
}

export default function ServiceCard({ title, items, isPrimary = false, index = 0 }: ServiceCardProps) {
  return (
    <div 
      className={`
        group relative p-6 border-l-2 transition-all duration-300
        ${isPrimary 
          ? 'border-l-accent bg-accent/5' 
          : 'border-l-border hover:border-l-accent bg-card hover:bg-card-hover'
        }
      `}
    >
      {/* Index number */}
      <span className="absolute top-4 right-4 text-4xl font-bold text-border group-hover:text-accent/20 transition-colors">
        {String(index).padStart(2, '0')}
      </span>
      
      <h3 className={`
        text-xl font-bold mb-4 
        ${isPrimary ? 'text-accent' : 'text-foreground group-hover:text-accent'} 
        transition-colors
      `}>
        {title}
      </h3>
      
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li 
            key={i} 
            className="text-muted text-sm flex items-start gap-2 group-hover:text-foreground/70 transition-colors"
          >
            <span className="text-accent mt-1 text-xs">▸</span>
            {item}
          </li>
        ))}
      </ul>
      
      {/* Bottom accent line on hover */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
    </div>
  )
}

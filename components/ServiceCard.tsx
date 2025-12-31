interface ServiceCardProps {
  title: string
  items: string[]
  isPrimary?: boolean
}

export default function ServiceCard({ title, items, isPrimary = false }: ServiceCardProps) {
  return (
    <div className={`group p-6 rounded-lg border ${isPrimary ? 'border-blue-600 bg-blue-600/10' : 'border-gray-800 bg-gray-900/50'} hover:border-gray-700 transition-all duration-300 hover:scale-[1.02]`}>
      <h3 className={`text-xl font-bold mb-4 ${isPrimary ? 'text-blue-400' : 'text-foreground'} group-hover:text-blue-400 transition-colors`}>
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-400 text-sm flex items-start group-hover:text-gray-300 transition-colors">
            <span className="text-blue-600 mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}


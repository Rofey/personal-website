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
    <div className="group p-8 rounded-lg border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-6 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>

      <div className="space-y-6">
        {/* What Existed */}
        <div className="relative pl-6 border-l-2 border-gray-800">
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors" />
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
              What Existed
            </h4>
            <p className="text-gray-300">{whatExisted}</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center py-2">
          <div className="w-12 h-0.5 bg-gray-700 group-hover:bg-blue-600 transition-colors" />
          <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-700 group-hover:border-t-blue-600 transition-colors ml-1" />
        </div>

        {/* What Was Built */}
        <div className="relative pl-6 border-l-2 border-blue-600">
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600" />
          <div>
            <h4 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wide">
              What Was Built
            </h4>
            <p className="text-gray-300">{whatWasBuilt}</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center py-2">
          <div className="w-12 h-0.5 bg-gray-700 group-hover:bg-blue-600 transition-colors" />
          <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-700 group-hover:border-t-blue-600 transition-colors ml-1" />
        </div>

        {/* What Changed */}
        <div className="relative pl-6 border-l-2 border-green-600">
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-600" />
          <div>
            <h4 className="text-sm font-semibold text-green-400 mb-2 uppercase tracking-wide">
              What Changed
            </h4>
            <p className="text-gray-300 font-medium">{whatChanged}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="pt-4 border-t border-gray-800">
          <div className="flex flex-wrap gap-2">
            {tech.map((t, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 bg-gray-800 rounded-full text-gray-300 group-hover:bg-gray-700 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}



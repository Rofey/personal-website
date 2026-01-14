interface CodeSnippetProps {
  code: string
  language?: string
  className?: string
}

export default function CodeSnippet({ code, language = 'typescript', className = '' }: CodeSnippetProps) {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 via-accent-secondary/20 to-accent-tertiary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-[#1a1a1a] border border-border/50 rounded-lg overflow-hidden">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-[#0f0f0f]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-terminal-red/50" />
            <div className="w-3 h-3 rounded-full bg-accent/50" />
            <div className="w-3 h-3 rounded-full bg-terminal-green/50" />
          </div>
          <span className="ml-3 text-xs text-muted font-mono">{language}</span>
        </div>
        {/* Code content */}
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm font-mono text-terminal-green leading-relaxed">
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}


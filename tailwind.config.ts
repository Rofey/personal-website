import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fafafa',
        foreground: '#1a1a1a',
        accent: {
          DEFAULT: '#6366f1',
          dim: '#4f46e5',
          glow: 'rgba(99, 102, 241, 0.1)',
          secondary: '#8b5cf6',
          'secondary-dim': '#7c3aed',
          'secondary-glow': 'rgba(139, 92, 246, 0.1)',
          tertiary: '#06b6d4',
          'tertiary-dim': '#0891b2',
        },
        terminal: {
          green: '#10b981',
          red: '#ef4444',
          amber: '#6366f1',
        },
        muted: '#71717a',
        border: '#e4e4e7',
        card: {
          DEFAULT: '#ffffff',
          hover: '#fafafa',
        },
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
        'glitch': 'glitch 0.3s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
        'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scale-in': 'scale-in 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(99, 102, 241, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.015) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
export default config

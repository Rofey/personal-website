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
        background: '#050505',
        foreground: '#e8e4d9',
        accent: {
          DEFAULT: '#f59e0b',
          dim: '#b45309',
          glow: 'rgba(245, 158, 11, 0.15)',
        },
        terminal: {
          green: '#22c55e',
          red: '#ef4444',
          amber: '#f59e0b',
        },
        muted: '#525252',
        border: '#262626',
        card: {
          DEFAULT: '#0a0a0a',
          hover: '#111111',
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
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
        'grid-pattern': 'linear-gradient(rgba(245, 158, 11, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.03) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#020105',
        surface: '#05040b',
        outline: '#1c1a24',
        brand: {
          amber: '#ff7a1f',
          pink: '#f72585',
          violet: '#8b5cf6',
          purple: '#6d28d9',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 10px 50px rgba(247, 37, 133, 0.2), 0 4px 30px rgba(139, 92, 246, 0.25)',
        card: '0 30px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.03)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #ff7a1f, #f72585, #8b5cf6)',
        'glass-gradient': 'linear-gradient(145deg, rgba(255,122,31,0.1), rgba(247,37,133,0.08), rgba(139,92,246,0.12))',
        'mesh-gradient':
          'radial-gradient(circle at 20% 20%, rgba(255,122,31,0.18), transparent 35%), radial-gradient(circle at 80% 10%, rgba(247,37,133,0.22), transparent 30%), radial-gradient(circle at 50% 80%, rgba(139,92,246,0.25), transparent 30%)',
      },
      borderRadius: {
        glass: '28px',
      },
    },
  },
  plugins: [],
} satisfies Config


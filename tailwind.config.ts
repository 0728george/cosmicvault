// tailwind.config.ts
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{ts,tsx}',
    './index.html',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        cosmic: {
          black: '#0A0A0F',
          void: '#11111F',
          purple: '#6366F1',
          indigo: '#8B5CF6',
          nebula: '#EC4899',
          emerald: '#10B981',
          solar: '#F59E0B',
          star: '#FCD34D',
        },
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      backgroundImage: {
        'cosmic-gradient': 'radial-gradient(ellipse at top, #1e1b4b 0%, #0f0a1e 70%)',
        'nebula': 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
        'starfield': "url('/starfield.png')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'orbit': 'orbit 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' },
          to: { boxShadow: '0 0 40px rgba(139, 92, 246, 0.8)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-700px 0' },
          '100%': { backgroundPosition: '700px 0' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
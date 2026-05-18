import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}', './types/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 60px -30px rgba(0, 43, 91, 0.45)',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(to right, rgba(26, 95, 122, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(26, 95, 122, 0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

export default config
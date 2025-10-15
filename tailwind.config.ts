import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brandViolet: '#6A4C93',
        brandGold: '#D4AF37'
      }
    },
    fontFamily: {
      serif: ['ui-serif', 'Georgia'],
      sans: ['ui-sans-serif', 'system-ui']
    }
  },
  plugins: []
} satisfies Config

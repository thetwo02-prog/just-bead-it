import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream:  '#EDE8DC',
        lime:   '#C4D929',
        limeD:  '#A8BB1A',
        purple: '#8B5CF6',
        pink:   '#E8547A',
        dark:   '#1A1A1A',
        muted:  '#888888',
        card:   '#FFFFFF',
        border: '#DDD8CC',
        beadBg: '#E5DFD3',
      },
      fontFamily: {
        sans: ['"Nunito"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: '999px',
      },
      boxShadow: {
        card:    '0 2px 12px rgba(0,0,0,0.07)',
        cardHov: '0 6px 24px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}

export default config

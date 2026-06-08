import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAF8',
        surface: '#FFFFFF',
        'surface-subtle': '#F4F2EE',
        border: '#E8E4DC',
        'border-strong': '#C8C0B0',
        ink: '#1A1714',
        'ink-secondary': '#4A4540',
        'ink-muted': '#8A847C',
        gold: '#D4A017',
        'gold-dark': '#A07810',
        'gold-light': '#F0C040',
        btc: '#F7931A',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;

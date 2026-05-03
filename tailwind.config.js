/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#000000',
        'brand-sidebar': '#0a0a0a',
        'brand-card': 'rgba(15, 15, 15, 0.4)',
        'brand-accent': '#f59e0b', // Amber/Launch UI style
        'brand-secondary': '#8b5cf6', // Cosmic purple
        'brand-text-muted': '#737373',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        }
      }
    },
  },
  plugins: [],
};

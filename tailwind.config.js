/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#FFB400', // Custom yellow from design
          500: '#E5A200',
        }
      }
    },
  },
  plugins: [],
};

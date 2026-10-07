/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef1f6',
          100: '#d4dbe8',
          200: '#a8b6d1',
          300: '#7d92ba',
          400: '#516da3',
          500: '#3b557f',
          600: '#2c4064',
          700: '#1e2e4a',
          800: '#131f33',
          900: '#0a1322',
          950: '#050a14',
        },
        gold: {
          50: '#faf7f0',
          100: '#f2ead6',
          200: '#e4d3a8',
          300: '#d6bc7a',
          400: '#c8a54c',
          500: '#b8913a',
          600: '#9a7830',
          700: '#7c6026',
          800: '#5e481c',
          900: '#403012',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 1s ease both',
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 60s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bb-green': '#4A7C59', // Keeping existing green
        'bb-yellow': '#F7B919', // Keeping existing yellow
        'bb-gray': '#0F0F0F', // Keeping existing gray
        // New colors from snippet (mapped to existing or added)
        'bb-light-green': '#50c878',
        'bb-dark': '#0f0f0f',
        'bb-gold': '#d4af37',
      },
      fontFamily: {
        display: ['"Courier New"', 'monospace'],
        sans: ['Inter', 'sans-serif', 'Oswald'], // Added Oswald
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-slower': 'spin 30s linear infinite',
        'spin-reverse-slow': 'spin-reverse 20s linear infinite',
        'spin-reverse-slower': 'spin-reverse 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        }
      }
    },
  },
  plugins: [],
}

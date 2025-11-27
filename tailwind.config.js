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
        'bb-green': '#4A7C59',
        'bb-yellow': '#F7B919',
        'bb-gray': '#0F0F0F',
      },
      fontFamily: {
        display: ['"Courier New"', 'monospace'], // Fallback for now, can be updated if font is added
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

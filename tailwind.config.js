/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#FF902B',
        second: '#2F2105',
        third: '#F6EBDA',
        accents: '#F9D9AA'
      }
    },
  },
  plugins: [],
}
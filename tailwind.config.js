
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'labs-pink': '#f4c2e6',
      },
      fontFamily: {
        sans: ['Saira', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#f7D22D' ,
        'c-title': '#797979',
        'c-desc': '#686466'
      }
    },
  },
  plugins: [],
}
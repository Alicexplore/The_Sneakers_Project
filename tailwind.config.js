/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        league: ['League Gothic', 'sans-serif'],
        worksans: ['Work Sans', 'sans-serif'],
      },
      fontSize: {
        '10xl': '9rem',
        '11xl': '11rem',
        '12xl': '13rem',
        '13xl': '15rem',
      },
    },
  },
  plugins: [],
}

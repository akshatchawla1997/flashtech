/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 2px 2px 0px rgba(184, 184, 184, 0.2), 0px 6px 20px 0px rgba(149, 149, 149, 0.2)'
      }
    },
  },
  plugins: [],
}

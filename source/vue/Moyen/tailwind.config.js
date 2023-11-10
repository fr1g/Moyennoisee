/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html, css, js, vue}", 
    "./src/*.{html, css, js, vue}", 
    "./src/*/*.{html, css, js, vue}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


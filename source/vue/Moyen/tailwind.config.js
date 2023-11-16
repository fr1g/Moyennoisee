/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html, js, vue}", 
    "./src/**/*.vue", 
    "./src/*.{html, js, vue}", 
    "./src/components/*.{html, js, vue}", 
    "./src/components/Forms/*.{html, js, vue}", 
    "./src/Pages/*.{html, js, vue}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


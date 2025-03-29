/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
    "./assets/js/**/*.js",

  ],
  darkMode: 'class',
  theme: {
      container:{
          center:true,
          screens:{
              '2xl':'1200px'
          }
      },
      extend: {
      },
  },
  plugins: [],
}
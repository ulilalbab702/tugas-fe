/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      fontSize: {
        '2xs': '0.67rem',
        '3xs': '0.65rem'
      },
      spacing: {
        '98': '400px',
      },
      colors: {
        'turqois': '#05688E',
        'turq': '#05B1A1',
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }

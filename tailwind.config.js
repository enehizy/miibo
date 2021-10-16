const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode:'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        brandyellow:'#FFDE03',
        brandblue:"#0325FF"
      },
      fontFamily: {
        urbanist: ["'Urbanist'", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

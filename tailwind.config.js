const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      
      'shade' : '#0f3248',
      'shade-light' : '#7273b4',
      'black' : 'black',
      'white' : 'white',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgcolor': '#3F0071',
        'bgtext': '#DCD6F7',
        'hoverbg' : '#7E6BC4',
        'bgblack': '#BC6FF1',
      },
      fontFamily:{
        'mono':['Azeret Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
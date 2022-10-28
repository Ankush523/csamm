/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgcolor': '#27296D',
        'bgtext': '#DCD6F7',
        'hoverbg' : '#D6C8FF',
      },
      fontFamily:{
        'mono':['Azeret Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
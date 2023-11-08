/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Outfit': ['Outfit', 'sans-serif']
      },
      colors:{
      'White':         'hsl(0, 0%, 100%)',
      'LightGray':   'hsl(212, 45%, 89%)',
      'GrayishBlue': 'hsl(220, 15%, 55%)',
      'DarkBlue':    'hsl(218, 44%, 22%)'
      }
    },
  },
  plugins: [],
}

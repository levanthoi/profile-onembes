/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundColor: {
      'gray-dark' : "hsl(240, 2%, 13%)",
      'gray-light' : "hsl(240, 1%, 17%)",
      'black':"black",
      'yellow' : 'yellow',
      'transparent':'transparent'
    },
    boxShadow: {
      'base': '-1px -1px 1px hsl(240, 2%, 13%)',
      'show': '0 16px 30px hsla(0, 0%, 0%, 0.25)',
    },
    animation: {
      'showInfo': 'showInfo 3s ease-in-out',
      'fade': 'fade 0.5s ease backwards'
    },
    keyframes: {
      showInfo: {
        '0%': { height: '0' },
        '100%': { height: '100%' },
      }
    },
    keyframes: {
      fade: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      }
    }
  },
  plugins: [],
}

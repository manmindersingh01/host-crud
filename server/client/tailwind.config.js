/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: theme => ({
        'gradient-to-45':
          'linear-gradient(315deg, #6b21a8, #db2777, #6b21a8 )',
        'gradient-to-135':
          'linear-gradient(135deg, #ffed4a, #ff3860)',
      })
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'kitz-primary': '#0057ff',
        'kitz-secondary': '#080808',
      },
      // screens: {
      //   'desktop': {'max': '1024px'}, // Targeting desktops first
      //   'tablet': {'max': '768px'}, // Targeting tablets
      //   'mobile': {'max': '640px'}, // Targeting phones
      // }
    },
  },
  plugins: [],
}

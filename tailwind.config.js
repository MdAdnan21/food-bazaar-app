/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'smobile': '470px',
      'mobile': '640px',  
      'tablet': '1155px', 
      'desktop': '1280px',
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      "Poppins":["Poppins","sans-serif"],
    },
    colors:{
      "white1":"#F5EFDF",
      "zinc":"#111013",
      "zinc1":"#222831",
      "zinc2":"#111000",
      "neutral":"rgb(10 10 10)"
    }
  },
  plugins: [],
}


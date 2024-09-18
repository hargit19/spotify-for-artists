/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
    },
      height: {
        "1/10": "10%",
        "9/10": "90%",
    },
      backgroundColor : {
        "app-green" : "rgb(0,255,67)",
        "app-black": "#121212",
      },
    },
  },
  plugins: [],
}
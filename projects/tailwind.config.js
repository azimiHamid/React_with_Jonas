/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ibm-mono": ['"IBM Plex Mono"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"], // Added Poppins font
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      "available-w": {
        "fill-available": "-webkit-fill-available",
      },
    },
  },
  plugins: [],
};

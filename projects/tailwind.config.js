/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ibm-mono": ['"IBM Plex Mono"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 0 15px 2px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        "custom-purple": "#6741D9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

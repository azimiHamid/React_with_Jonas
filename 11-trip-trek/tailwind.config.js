/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        brand: {
          1: "#ffb545",
          2: "#00c46a",
        },
        dark: {
          0: "#242a2e",
          1: "#2d3439",
          2: "#42484d",
        },
        light: {
          1: "#aaa",
          2: "#ececec",
          3: "#d6dee0",
        },
      },
    },
  },
  plugins: [],
};

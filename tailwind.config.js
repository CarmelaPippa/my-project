/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const colors = require("tailwindcss/colors");
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
        gray: colors.slate,
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D2000E",
        secondary: "#457B9D",
        tertiary: {
          bg: "#CBE9E9",
          text: "#0393AD",
        },
        danger: {
          bg: "#F9DBDB",
          text: "#D2000E",
        },
      },
    },
  },
  plugins: [],
};

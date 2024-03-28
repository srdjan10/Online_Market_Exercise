/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        scada: ["scada", "sans-serif"],
        scadaItalic: ["scadabolditalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};

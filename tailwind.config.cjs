/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {fontFamily: {
        lato: ["Lato", "sans-serif"],
        // puedes mantener montserrat si quieres para títulos
        montserrat: ["Montserrat", "sans-serif"],
      },},
  },
  plugins: [],
};


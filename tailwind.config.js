/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#cfcfcf",
          200: "#a0a0a0",
          300: "#707070",
          400: "#414141",
          500: "#111111",
          600: "#0e0e0e",
          700: "#0a0a0a",
          800: "#070707",
          900: "#030303"
        },
        green: {
          100: "#d2f1dd",
          200: "#a5e3bb",
          300: "#77d598",
          400: "#4ac776",
          500: "#1db954",
          600: "#179443",
          700: "#116f32",
          800: "#0c4a22",
          900: "#062511"
        },
      }
    },
  },
  plugins: [],
}

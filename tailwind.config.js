/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'xs': '450px',
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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

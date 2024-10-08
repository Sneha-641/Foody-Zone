/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prim': "#FF8243",
        'dark': "#0d0d25",
      },
      fontFamily:{
        'text': 'Playfair Display, serif',
      }
    },
  },
  plugins: [],
}


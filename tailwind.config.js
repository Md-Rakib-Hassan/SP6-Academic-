/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#42200b',
        secondary: '#ffc135',
        tertiary: '#df1c1c',
        textDark: '#212529',
      },
      fontFamily: {
        slab: ['Alfa Slab One', 'serif'],
        bebas: ['Bebas Neue', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


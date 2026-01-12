
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryOrange: '#f48024',
        primaryPurple: '#5e35b1',
      },
    },
  },
  plugins: [],
}

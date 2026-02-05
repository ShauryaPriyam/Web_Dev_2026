/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue1: '#00ADB5',
        dark1: '#222831',
        gray1: '#393E46',
        white1: '#EEEEEE',
      },
    },
  },
  plugins: [],
}
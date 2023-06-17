/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: '#00A7AC',
        color2: '#000000',
        title1: '#061421',
        text1: '#595959',
      },
    },
  },
  plugins: [require("daisyui")],
}


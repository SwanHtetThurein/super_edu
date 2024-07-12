/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'noto':['Noto Sans Myanmar', 'sans-serif']
      },
      scrollBehavior: {
        smooth: 'smooth',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  theme: {
    extend: {
        colors: {
        saffron: "#FF6F00",
        peacock: "#006994",
        turmeric: "#FFD54F",
        ivory: "#FAFAF5",
      },
    },
  },
  plugins: [],
}


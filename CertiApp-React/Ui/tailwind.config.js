
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        "slide-right": "slideRight 1s ease-in-out",
      },
      slideIn: {
        "0%": { transform: "translateX(-100%)", opacity: 0 },
        "100%": { transform: "translateX(0)", opacity: 1 },
      },
      slideUp: {
        "0%": { transform: "translateY(100%)", opacity: 0 },
        "100%": { transform: "translateY(0)", opacity: 1 },
      },
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      zoomIn: {
        "0%": { transform: "scale(0.8)", opacity: 0 },
        "100%": { transform: "scale(1)", opacity: 1 },
      },
    },
    animation: {
      "slide-in": "slideIn 1s ease-in-out",
      "slide-up": "slideUp 1s ease-in-out",
      "fade-in": "fadeIn 1s ease-in-out",
      "zoom-in": "zoomIn 0.5s ease-in-out",

},
  },
  plugins: [],
}





// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


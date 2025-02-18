/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2ec4a7",
        "primary-dark": "#25a08a",
        "primary-light": "#4fd3b9",
      },
      animation: {
        "zoom-in": "zoomIn 0.5s ease-in-out",
      },
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [import("@tailwindcss/forms")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: "#0CBABA",
        secondary: "#314CB6",
        white: "#F5F5F5",
        black: "#1D1D1D",
        lightblack: "#232323",
        gray: "#8A8A8A",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 1, 0, 0.3)",
        "inner-custom": "inset 0px 4px 6px rgba(0, 0, 0, 0.3)",
        none: "none",
      },
    },
    plugins: [],
  },
};

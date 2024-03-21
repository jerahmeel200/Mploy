/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,jsx,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,jsx,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,jsx,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1750px",
    },
    extend: {
      colors: {
        primary: "#2f6bf6",
        secondary: "#013575",
      },
    },

    fontFamily: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#fff",
        black: "#2B2B2B",
        lightGrey: "#c4c4c4",
        grey: "#818c96",
        DarkGrey: "#4d4d4d",
        secondary: "#fd661f",
        lightMain: "#d2e6e4",
        main: "#0b7077",
        bg: "#fafafa",
      },
    },
  },
  plugins: [],
};

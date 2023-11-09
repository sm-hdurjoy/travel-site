/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kalam: ["Kalam", "cursive"],
        allura: ["Allura", "cursive"],
      },
      colors: {
        "custom-red": "rgb(255, 0, 0)",
      },
    },
  },
  plugins: [],
};

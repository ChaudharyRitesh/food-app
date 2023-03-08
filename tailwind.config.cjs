/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1240px",
        xl: "1440px",

        _sm: { max: "640px" }, // custom sm
        _md: { max: "768px" }, // custom md
        _lg: { max: "1240px" }, // custom lg
        _xl: { max: "1440px" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

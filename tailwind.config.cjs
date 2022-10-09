/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: "Manrope",
      },
      fontSize: {
        quote: "28px",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        // primary
        lightCyan: "hsl(193, 38%, 86%)",
        neonGreen: "hsl(150, 100%, 66%)",
        // neutral
        grayishBlue: "hsl(217, 19%, 38%)",
        darkGrayishBlue: "hsl(217, 19%, 24%)",
        darkBlue: "hsl(218, 23%, 16%)",
      },
      boxShadow: {
        all: "0 0 30px hsl(150, 100%, 66%)",
      },
    },
  },
  plugins: [],
};

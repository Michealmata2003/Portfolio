/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
        logoFont: ["Playwrite AU VIC Guides", 'serif'],
      },
      colors: {
        bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        shadowTwo:"2px 2px 5px #D1D9E6, -3px -2px 5px #ffffff"
      },
      backgroundImage:{
        whiteGradient: 'linear-gradient(145deg, #e2e8ec, #ffffff)',
        redGradient: 'linear-gradient(145deg, #ff014f, #d11414)',
        blackGradient:'linear-gradient(145deg, #1e2024, #23272b);'
      }
    },
  },
  darkMode: 'class', 
  plugins: [],
};

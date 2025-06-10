/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      "fade-in": "fadeIn 1s ease-in-out",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
    screens: {
      ss: { min: "1px", max: "767px" },

      sm: { min: "640px", max: "767px" },

      "up-to-md": { min: "1px", max: "1290px" },

      md: { min: "768px", max: "1290px" },

      mdall: { min: "768px" },

      "lg-all": { min: "1290px" },

      xl: { min: "1280px", max: "1535px" },

      "2xl": { min: "1536px" },
    },
    extend: {
      fontFamily: {
        Anton: "Anton",
      },
      colors: {
        "c-transparent-green": "#00ffb292",
        "c-gray100": "#E3E3E3",
        "c-gray200": "#6F6F6F",
        "c-gray400": "#8F8F8F",
        "c-gray700": "#2D2D2D",
        "c-gray900": "#141414",
        "c-orange500": "#ff8969",
        "c-orange700": "#ff5736",
        // "c-green500": "#00FFB2",
        "c-green500": "#00ffb2 ",
        "c-cyan500": "#00fff2",
        "c-blue800": "#171B26",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        "50vw": "50vw",
        112: "28rem",
        140: "35rem",
        "8xl": "1440px",
      },
      height: {
        "screen-1": "910px",
        "screen-2": "2735px",
        "screen-3": "1240px",
        120: "480px",
      },
      skew: {
        25: "25deg",
      },
      writingMode: {
        "vertical-rl": "vertical-rl",
      },
      fontSize: {
        "3xl": "26px",
      },
    },
  },
  plugins: [],
};

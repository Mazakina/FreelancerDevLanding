/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        "Anton": "Anton"
      },
      colors:{
        "c-gray100": "#E3E3E3",
        "c-gray200": "#6F6F6F",
        "c-gray400": "#8F8F8F",
        "c-gray700": "#2D2D2D",
        "c-gray900": "#141414",
        "c-orange500": "#FF3D00",
        "c-green500": "#00E25B",
        "c-blue800": "#171B26", 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        '50vw': '50vw',
        '112': '28rem',
        '140':'35rem',
        '8xl':'1440px'
      },
      height:{
        "screen-1": '770px',
        "screen-2": '1900px',
        "screen-3": '1240px',
        "120":'480px'
      },
      skew:{
        "25":"25deg"
      },
      writingMode:{
        'vertical-rl':'vertical-rl'
      },
      fontSize:{
        '3xl':'26px'
      }
    },
  },
  plugins: [],
  
}

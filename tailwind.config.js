/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'ss': {'min': '1px', 'max': '767px'},
      
      'sm': {'min': '640px', 'max': '767px'},

      'md': {'min': '768px', 'max': '1023px'},

      'mdall':{'min': '768px'},

      'lg': {'min': '1024px', 'max': '1279px'},

      'xl': {'min': '1280px', 'max': '1535px'},

      '2xl': {'min': '1536px'},
    },
    extend: {
      fontFamily:{
        "Anton": "Anton"
      },
      colors:{
        "c-transparent-green":"#00FFB292",
        "c-gray100": "#E3E3E3",
        "c-gray200": "#6F6F6F",
        "c-gray400": "#8F8F8F",
        "c-gray700": "#2D2D2D",
        "c-gray900": "#141414",
        "c-orange500": "#ff8969",
        // #ff5736
        // "c-green500": "#00E25B",
        "c-green500": "#00FFB2",
        "c-cyan500": "#00FFB2",
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
        "screen-1": '910px',
        "screen-2": '2735px',
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

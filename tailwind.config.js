/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-black':'#2D2D32',
        'secondary-black':'#414146',
        'black-100':'#383535',
        'black-light':'#555555',
        'primary-orange':'#F15A2B',
      },
      backgroundImage: {
        'gradientbackground':'linear-gradient(180deg, #FBC02D 0%, #FFF176 100%)',
        'footer-gradient':'linear-gradient(90deg, #374CB3 0%, #50C878 50.48%, #7B012D 100%)',
        'green-gradient':'linear-gradient(92.74deg, #50C878 48.51%, #B9E9C9 81.39%)',
        'purple-gradient':'linear-gradient(180deg, #374CB3 0%, #A6AFDD 100%)',
        'pink-gradient':'linear-gradient(180deg, #FF1E5E 0%, #FFBCCF 100%)',
        'greenyellow-gradient': 'linear-gradient(90deg, #50C878 0%, #FBC02D 50.48%, #FFFFFF 80%)',
        'yellow-gradient':'linear-gradient(180deg, #FBC02D 0%, #FFF176 100%)',  
        'blue-gradient': 'radial-gradient(85.9% 85.9% at 82.11% 8.01%, #6EF195 25.79%, #00E3FD 100%)'
      },
      boxShadow:{
        'boxshadow-box': '0px 3px 6px 0px #2D2D3314',
        'shadow-btn' : '0px 1px 5px 0px #00000029',  
        'dropshadow':'0px 0px 10px 0px #7205101F',
        'dropshadow-tab':'0px 2px 4px 0px #2D2D3314',
        'box-shadow': '0px 0px 4px 2px #CCCCCC',
        'login-shadow':'0px 20px 24px -4px #1018281A',
        'box-shadow2':'0px 12px 16px 0px #00000009'
      },
      
      fontFamily: {
        Devanagari: ['var(--font-devanagari)'],   
        Roboto: ['var(--font-roboto)'],      
        Poppins: ['var(--font-poppins)'],      
      },
    },  
    screens: {    
      xsm: "575px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lgm: "1200px",
      xl: "1280px",
      '2xl': "1536px",
      '3xl': "1700px",
    },
    
   
  },
  plugins: [],
}

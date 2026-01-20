/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        keyframes:{
        aniCard:{
          '0%':{opacity:'0',transform:'translateX(0)'},
          '100%':{opacity:'1',transform:'translateX(20px)'}
        },
        aniCard2:{
          '0%':{opacity:'0',transform:'translateX(20px)'},
          '100%':{opacity:'1',transform:'translateX(0)'}
        },
        },
        animation:{
          aniCard:'aniCard 0.5s ease-out forwards',
          aniCard2:'aniCard2 0.5s ease-out forwards',
        },
    },
  },
  plugins: [],
}
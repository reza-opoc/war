/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.html"],
  darkMode: "class",

  theme: {

    screens : {
      'xxs' : '390px',
      'xs' : '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },


    extend: {
      container : {
        center : true,
        padding : {
          DEFAULT : "1rem",
          lg : "0.625rem"
        }

      },
      colors: {        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
        nearGray : "#F7F9FC" ,
        nearWhite : "#E2E6EE",
        darkness : "rgba(15, 10, 8, 0.45)",
      },
      boxShadow: {
        normal: "0px 1px 10px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      spacing: {
        7.5: "30px",
        18 : '72px',
        5.5 : '22px',
        22 : '88px',
        50 : '200px',
        15 : "60px",
      },
      fontSize : {
        9 : '9px',
        "6.5xl" : '66px',
      },
      fontFamily : {
        "Dana" : "Dana",
        "DanaMedium" : "Dana Medium",
        "DanaDemiBold" : "Dana DemiBold",
        "MorabbaLight" : "Morabba Light",
        "MorabbaMedium" : "Morabba Medium",
        "MorabbaBold" : "Morabba Bold",
      }
    },
  },
  plugins: [
    function({addVariant}) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover')
    }
  ],
};

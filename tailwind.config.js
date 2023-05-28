/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkgrayblack" : "hsl(248, 10%, 15%)",
        "gray": "hsl(251, 9%, 53%)",
        "lightgray" : "hsl(252, 11%, 91%)",
        "black" : "hsl(248, 15%, 11%)",
        "green": "hsl(127, 100%, 82%)",
        "red" : "hsl(0, 91%, 63%)",
        "orange" : "hsl(13, 95%, 66%)",
        "yellow" : "hsl(42, 91%, 68%)", 
      },

      fontFamily: {
        "jet" : ['JetBrains Mono', 'monospace']
      },
      fontSize : {
        "heading-l-dk" : "2rem",
        "heading-m-dk": "1.5rem",
        "body-dk" : "1.125rem",
        "heading-m-tb": "1.5rem",
        "heading-l-tb" : "2rem",
        "body-tb" : "1.125rem",
        "heading-m-mb" : "1rem",
        "heading-l-mb" : "1.5rem",
        "body-mb" : "1rem",
        "strength-mb": "1.125rem",
      },
      lineHeight: {
        "heading-l-dk" : "2.6875em",
        "heading-m-dk": "2em",
        "body-dk" : "1.5em",
        "heading-m-tb": "2em",
        "heading-l-tb" : "2.6875em",
        "body-tb" : "1.5em",
        "heading-m-mb" : "1.4em",
        "heading-l-mb" : "2em",
        "body-mb" : "1.4em",
        
      },
      fontWeight: {
        bold : '700'
      },
      
      screens: {
        mobile: "375px",
        tablet: "768px",
        desktop: "1000px" 
      }

    },
  },
  plugins: [],
}


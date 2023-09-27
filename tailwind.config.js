/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend:
    {

      keyframes: {
        extend: {
          "50%": { width: "60px " },

        },
        moveUp: {
          "100%": { top: "2.6rem", opacity: "1" },
        },
        moveUp1: {
          "100%": { top: "3.6rem", opacity: "1" },
        },
        moveDown: {
          "100%": { bottom: "3.6rem", opacity: "1" },
        },
        moveDown1: {
          "100%": { bottom: "3.6rem", opacity: "1" },
        },
        topdown: {
          "0%": { top: "-10rem", opacity: "0" },
          "100%": { top: "0rem", opacity: "1" }
        },
        hide:{
          "100%":{display:"none"}
        },
        show:{
          "100%":{display:"block"}
        }
      },
      animation: {
        extend: "extend 1.5s ",
        moveUp: "moveUp 1s forwards",
        moveUp1: "moveUp1 1s forwards",
        moveDown: "moveDown 1s forwards",
        moveDown1: "moveDown1 1s forwards",
        topdown: " topdown 1s forwards",
        delayhide: "hide 0.5s",
        delayshow:"show 0.5s"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionProperty: {
        "width": "width",
        "spacing": 'margin, padding',
      },
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "320px",
        "xsmall": "512px",
        "small": "1024px",
        "medium": "1280px",
        "large": "1440px",
        "xlarge": "1680px",
        "2xlarge": "1920px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Ubuntu",
          "sans-serif",
        ],
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    display: ['responsive', 'group-hover', 'group-focus'],
  },
  plugins: [
    // require('tailwind-scrollbar'),
    require('tailwindcss-nested-groups')
  ],
}
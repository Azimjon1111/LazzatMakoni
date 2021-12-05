module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    scale: {
      0: "0",
      25: ".25",
      50: ".5",
      75: ".75",
      80: ".80",
      85: ".85",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      full: "100%",
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      full: "100%",
    },
    extend: {
      colors: {
        first: "#c08c64",
        second: "#714336",
        lightGreen: "#bcf5bc",
      },
      margin: {
        '-600': '-600px',
        '250': '250px',
        '200': '200px'
       }
    },
    fontFamily: {
      lora: ["Lora", "serif"],
      niramit: ["Niramit", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      jost: ["Jost", "sans-serif"],
      calibri: ["Calibri"],
    },
    backgroundImage: (theme) => ({
      "landing-header": "url('/uzb.jpg')"
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

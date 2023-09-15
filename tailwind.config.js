/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        tomato: "#ef513a",
        white: "#fff",
        darkslategray: {
          "100": "#333",
          "200": "#2d2d2d",
        },
        mediumseagreen: "#32ba7c",
        gray: {
          "100": "#25282e",
          "200": "#1f1f1f",
          "300": "#191717",
          "400": "#121212",
          "500": "#111",
        },
        lightgray: "#d1d1d1",
        black: "#000",
        lightseagreen: "#31af99",
        whitesmoke: "#eaeaea",
        gainsboro: "#d9d9d9",
        dimgray: {
          "100": "#666",
          "200": "#626262",
          "300": "#585858",
        },
      },
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        montserrat: "Montserrat",
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        "6xl": "25px",
        mini: "15px",
        "341xl": "360px",
        "91xl": "110px",
        "662xl-5": "681.5px",
        "81xl": "100px",
        "31xl": "50px",
      },
    },
    fontSize: {
      xl: "20px",
      "13xl": "32px",
      base: "16px",
      "5xl": "24px",
      mini: "15px",
      "3xl": "22px",
      xs: "12px",
      sm: "14px",
      lg: "18px",
      "17xl": "36px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

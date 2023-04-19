module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        tablet: "768px",
        desktop: "1440px",
      },
      colors: {
        cyanblue: "#13B4C9",
        lightcyanblue: "#13B4C940",
        hotpink: "#E7245B",
        lighthotpink: "#E7245B40",
        gray: "#656565",
        darkgray: "#414142",
        light: "#F2F2F2",
        orange: "#EA4F2C",
      },
      boxShadow: {
        theme:
          "-2px -2px 4px rgba(255, 255, 255, 0.9), 2px 2px 4px rgba(0, 0, 0, 0.25)",
        dark: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        smallInner:
          "inset -2px -2px 4px #FFFFFF, inset 2px 2px 4px rgba(0, 0, 0, 0.25)",
        large:
          "-5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 10px rgba(0, 0, 0, 0.25)",
        cyanBlue: "0 0 5px 4px rgba(19, 180, 201, 0.4)",
      },
      fontSize: {
        xxs: ".625rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

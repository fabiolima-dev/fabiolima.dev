module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "350px",
      },
      fontFamily: {
        sans: ["Inter"],
        mono: ["Fira code"],
      },
      colors: {
        gray: {
          1: "#95959a",
          2: "#35353a",
          3: "#25252a",
        },
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        quaternary: "var(--color-quaternary)",
      },
    },
  },
  plugins: [],
};

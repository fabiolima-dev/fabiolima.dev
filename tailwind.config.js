module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    /*Because the xs breakpoint was included, is necessary overwrite the breakpoints,
    for prettier-tailwind sort in the right order.*/
    screens: {
      xs: "350px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter"],
        mono: ["Fira code"],
      },
      colors: {
        black: "#18181b",
        // white: {},
        gray: {
          1: "#95959a",
          2: "#35353a",
          3: "#25252a",
        },
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        quaternary: "var(--color-quaternary)",
        translucid: "var(--color-translucid)",
      },
    },
  },
  plugins: [],
};

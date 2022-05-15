module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        reveal: "1s reveal 1s ease-in-out",
        gradient: "1s gradient 1s ease-in-out forwards",
      },
      keyframes: {
        reveal: {
          "0%": { width: "0" },
          "33%": { width: "100%" },
          "66%": { width: "100%" },
          "100%": { width: "0", "margin-left": "auto" },
        },
        gradient: {
          "0%": {
            "text-fill-color": "transparent",
            "-webkit-text-stroke": "1px white",
            "background-color": "transparent",
          },
          "33%": {
            "text-fill-color": "transparent",
            "-webkit-text-stroke": "1px white",
            "background-color": "transparent",
          },
          "66%": {
            "text-fill-color": "transparent",
            "-webkit-text-stroke": "0 currentcolor",
            background:
              "linear-gradient(to right, var(--gradient-oceanic-one), var(--gradient-oceanic-two), var(--gradient-oceanic-three))",
            "background-clip": "text",
          },
          "100%": {
            "text-fill-color": "transparent",
            "-webkit-text-stroke": "0 currentcolor",
            background:
              "linear-gradient(to right, var(--gradient-oceanic-one), var(--gradient-oceanic-two), var(--gradient-oceanic-three))",
            "background-clip": "text",
          },
        },
      },
      fontFamily: {
        sans: ["Ubuntu"],
        mono: ["Fira code"],
      },
      colors: {
        gray: {
          1: "#C5C5Ca",
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

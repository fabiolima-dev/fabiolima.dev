module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teste: "#000000",
        primary: {
          light: "#FFFFFF",
          dark: "#000000",
        },
        gradients: {
          primary: {
            light: {
              start: "#A63093",
              end: "#482FDF",
            },
            dark: {
              start: "#A63093",
              end: "#482FDF",
            },
          },
        },
      },
    },
  },
  plugins: [],
};

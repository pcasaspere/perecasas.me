import defaultTheme from "tailwindcss/defaultTheme";

export default {
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        primary: "#2C74B3",
        secondary: "#0A2647",
        ...defaultTheme.colors,
      },
    },
  },
};

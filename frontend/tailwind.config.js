import colors from "tailwindcss/colors";

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: colors.neutral[200],
          hover: colors.neutral[300],
          border: colors.neutral[400],
          text: colors.neutral[500],
          dark: colors.neutral[800],
          ["dark-hover"]: colors.neutral[900],
        },
        primary: "#4A3AFF",
        black: "#2B2C2D",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

// muiTheme.js

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5D00FF", // ESGN purple
    },
    secondary: {
      main: "#000", // Black
    },
    background: {
      default: "#f4f4f4", // Light gray background
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif", // ESPN uses sans-serif fonts
    h1: {
      fontSize: "2.5rem", // Large headline font size
      fontWeight: "bold", // Bold font weight
    },
    h2: {
      fontSize: "1.8rem", // Subheadline font size
      fontWeight: "bold", // Bold font weight
    },
    h3: {
      fontSize: "1.5rem", // Section title font size
      fontWeight: "bold", // Bold font weight
    },
    body1: {
      fontSize: "1rem", // Regular text font size
    },
    body2: {
      fontSize: "0.9rem", // Small text font size
    },
  },
});

export default theme;

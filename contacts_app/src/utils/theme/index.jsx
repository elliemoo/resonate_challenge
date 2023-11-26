import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2f8af5",
    },
    background: {
      default: "black",
    },
    text: {
      secondary: "rgba(255, 255, 255, 0.6)",
    },
  },
});
const responsiveTheme = responsiveFontSizes(theme);
export default responsiveTheme;

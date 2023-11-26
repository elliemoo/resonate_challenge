import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "black",
      secondary: "rgb(29,31,33)",
    },
  },
});
const responsiveTheme = responsiveFontSizes(theme);
export default responsiveTheme;
29, 30, 32;

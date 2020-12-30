import { createMuiTheme } from "@material-ui/core/styles";

const themeColor = "rgb(50, 168, 82)";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: themeColor,
      main: themeColor,
      dark: themeColor,
    },
  },
  overrides: {
    MuiToggleButton: {
      root: {
        "&$selected": {
          color: "#fff",
          backgroundColor: themeColor,
        },
      },
    },
  },
});

export default theme;

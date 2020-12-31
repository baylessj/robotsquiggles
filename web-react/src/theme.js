import { createMuiTheme } from "@material-ui/core/styles";

const themeColor = "rgb(50, 168, 82)";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "rgb(102, 204, 129)",
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

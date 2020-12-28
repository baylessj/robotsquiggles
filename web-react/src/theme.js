import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiToggleButton: {
      root: {
        "&$selected": {
          color: "#fff",
          backgroundColor: "#3f51b5", // the primary color
        },
      },
    },
  },
});

export default theme;

import React, { useState } from "react";
import clsx from "clsx";
import {
  makeStyles,
  Theme,
  createStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import { TextField } from "@material-ui/core";
import { DrawNewPath } from "./components";
import SimpleTabs from "./components/generated";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
      overflow: "hidden",
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
);

export const App = (props: any) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false); // setting this to true breaks the alignment of two.js
  const [mode, setMode] = useState("PLACE_POINTS");
  const [field, setField] = useState("NONE");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Squiggles Drawing Board
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem>
              <Typography variant="subtitle1">Mode</Typography>
            </ListItem>
            <ListItem key={"mode"}>
              <ToggleButtonGroup
                value={mode}
                exclusive
                onChange={(e, newMode) => {
                  if (newMode !== null) {
                    setMode(newMode);
                  }
                }}
                aria-label="path add/edit mode"
              >
                <ToggleButton value="PLACE_POINTS" aria-label="left aligned">
                  PLACE POINTS
                </ToggleButton>
                <ToggleButton value="EDIT" aria-label="centered">
                  EDIT
                </ToggleButton>
              </ToggleButtonGroup>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem>
              <Typography variant="subtitle1">Robot Specs</Typography>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                required
                label="Track Width (m)"
                defaultValue="0.5"
              />
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                required
                label="Max Velocity (m/s)"
                defaultValue="1.0"
              />
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                label="Max Acceleration (m/s/s)"
                defaultValue="2.0"
              />
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                label="Max Jerk (m/s/s/s)"
                defaultValue="10.0"
              />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem>
              <Typography variant="subtitle1">Field Setup</Typography>
            </ListItem>
            <ListItem>TBD: change the comp year?</ListItem>
            <ListItem>
              <ToggleButtonGroup
                value={field}
                exclusive
                onChange={(e, newField) => {
                  if (newField !== null) {
                    setField(newField);
                  }
                }}
                aria-label="path add/edit mode"
              >
                <ToggleButton value="COMP" aria-label="left aligned">
                  COMP
                </ToggleButton>
                <ToggleButton value="SKILLS" aria-label="centered">
                  AUTON
                </ToggleButton>
                <ToggleButton value="NONE" aria-label="centered">
                  NONE
                </ToggleButton>
              </ToggleButtonGroup>
            </ListItem>
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DrawNewPath drawerWidth={240} open={open} />
          {/** Below will be generated code */}
          <SimpleTabs />
        </main>
      </div>
    </ThemeProvider>
  );
};

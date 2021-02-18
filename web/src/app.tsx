import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ThemeProvider, Button } from "@material-ui/core";

import { DrawNewPath } from "./components";
import SimpleTabs from "./components/generated";
import theme from "./theme";
import { SidebarContent } from "./components/sidebar";
import squiggles from "./services/squiggles";
import { useDebouncedEffect } from "./services/useDebouncedEffect";
import { squigglesCoords } from "./services/coords";

const drawerWidth = 300;

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
    title: {
      flexGrow: 1,
    },
    docs: {
      fontWeight: 600,
      letterSpacing: 1.5,
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
  const [mode, setMode] = useState("ADD_PATH");
  const [latch, setLatch] = useState(true);
  const [field, setField] = useState("NONE");
  const [trackWidth, setTrackWidth] = useState("0.45");
  const [maxVel, setMaxVel] = useState("1.0");
  const [maxAccel, setMaxAccel] = useState("2.0");
  const [maxJerk, setMaxJerk] = useState("10.0");
  const [canvasDims, setCanvasDims] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });
  const [badPaths, setBadPaths] = useState(new Map<string, number>());

  /**
   * Map of the data associated with each Squiggles path.
   *
   * Of the form:
   *
   * "A": {
   *   "waypoints": <Two.Circle>[],
   *   "vectors": <Two.Vector>[],
   *   "path": Two.Path
   * }
   */
  const [paths, setPaths] = useState(new Map());

  useDebouncedEffect(
    () => {
      paths.forEach((v: any, k: string) => {
        if (!v.waypoints[1] || !v.vectors[1] || v.vectors.length > 2) return;
        // TODO: allow for three+ point paths
        const poses = [];
        for (let i = v.vectors.length - 1; i >= 0; --i) {
          const vec = v.vectors[i];
          let yaw = vec.r.rotation;
          let vel = Math.sqrt(
            Math.pow(vec.r.translation.x - vec.p.translation.x, 2) +
              Math.pow(vec.r.translation.y - vec.p.translation.y, 2)
          );
          const coords = squigglesCoords(
            canvasDims.x,
            canvasDims.y,
            vec.p.translation.x,
            vec.p.translation.y,
            yaw,
            vel
          );
          poses.push({
            x: coords.x,
            y: coords.y,
            yaw: coords.yaw,
            vel: coords.vel,
          });
        }
        const payload = {
          sx: poses[0].x,
          sy: poses[0].y,
          syaw: poses[0].yaw,
          sv: poses[0].vel,
          gx: poses[1].x,
          gy: poses[1].y,
          gyaw: poses[1].yaw,
          gv: poses[1].vel,
          max_vel: parseFloat(maxVel),
          max_accel: parseFloat(maxAccel),
          max_jerk: parseFloat(maxJerk),
          track_width: parseFloat(trackWidth),
        };
        generatePath(k, payload);
      });
    },
    200,
    [paths, maxVel, maxAccel, maxJerk, trackWidth]
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  async function generatePath(path: string, payload: any) {
    const rtn = await squiggles.generate(payload);
    setBadPaths(new Map(badPaths.set(path, rtn.data.payload)));
  }

  // Load the Squiggles WASM library only when the component is mounted
  useEffect(() => {
    squiggles.load();
  }, []);

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
            <Typography variant="h6" noWrap className={classes.title}>
              Squiggles Drawing Board
            </Typography>
            <Button
              href="https://squiggles.readthedocs.io"
              color="inherit"
              size="large"
            >
              <Typography variant="h6" className={classes.docs}>
                DOCS
              </Typography>
            </Button>
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
          <SidebarContent
            handleDrawerClose={handleDrawerClose}
            mode={mode}
            setMode={setMode}
            field={field}
            setField={setField}
            trackWidth={trackWidth}
            setTrackWidth={setTrackWidth}
            maxVel={maxVel}
            setMaxVel={setMaxVel}
            maxAccel={maxAccel}
            setMaxAccel={setMaxAccel}
            maxJerk={maxJerk}
            setMaxJerk={setMaxJerk}
            latch={latch}
            setLatch={setLatch}
          />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DrawNewPath
            drawerWidth={drawerWidth}
            open={open}
            mode={mode}
            setMode={setMode}
            field={field}
            setCanvasDims={setCanvasDims}
            latch={latch}
            trackWidth={trackWidth}
            badPaths={badPaths}
          />
          <SimpleTabs
            paths={paths}
            trackWidth={trackWidth}
            maxVel={maxVel}
            maxAccel={maxAccel}
            maxJerk={maxJerk}
            canvasDims={canvasDims}
          />
        </main>
      </div>
    </ThemeProvider>
  );
};

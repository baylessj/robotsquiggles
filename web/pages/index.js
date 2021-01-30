import React, { useState } from "react";
import dynamic from "next/dynamic";
import squiggles from "../services/squiggles";

import clsx from "clsx";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";

import { DrawNewPath } from "../components";
import SimpleTabs from "../components/generated";
import { SidebarContent } from "../components/sidebar";

const drawerWidth = 300;

const useStyles = makeStyles((theme) =>
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

export default function Page() {
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
    x: 0, // window.innerWidth,
    y: 0, // window.innerHeight,
  });

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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  async function onClick() {
    // Load the model
    await squiggles.load();
    // Processing image
    // const processedImage = await cv.imageProcessing(image)
    const val = await squiggles.test();
    console.log(val);
    // Render the processed image to the canvas
    // ctx.putImageData(processedImage.data.payload, 0, 0);
  }

  return (
    <div className={classes.root}>
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
          <Button href="https://squiggles.readthedocs.io" color="inherit">
            DOCS
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <button style={{ width: 200, padding: 10 }} onClick={onClick}>
            {"Take a photo"}
          </button>
        </div>
        <DrawNewPath
          drawerWidth={drawerWidth}
          open={open}
          mode={mode}
          setMode={setMode}
          field={field}
          paths={paths}
          setPaths={setPaths}
          setCanvasDims={setCanvasDims}
          latch={latch}
          trackWidth={trackWidth}
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
  );
}

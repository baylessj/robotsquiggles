import React from "react";
import {
  IconButton,
  Divider,
  List,
  ListItem,
  Typography,
  TextField,
  useTheme,
} from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
  })
);

export interface SidebarContentProps {
  handleDrawerClose: () => void;
  mode: string;
  setMode: (mode: string) => void;
  field: string;
  setField: (field: string) => void;
  trackWidth: string;
  setTrackWidth: (trackWidth: string) => void;
  maxVel: string;
  setMaxVel: (maxVel: string) => void;
  maxAccel: string;
  setMaxAccel: (maxAccel: string) => void;
  maxJerk: string;
  setMaxJerk: (maxJerk: string) => void;
}

export const SidebarContent = (props: SidebarContentProps) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.handleDrawerClose}>
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
            value={props.mode}
            exclusive
            onChange={(e, newMode) => {
              if (newMode !== null) {
                props.setMode(newMode);
              }
            }}
            aria-label="path add/edit mode"
          >
            <ToggleButton value="ADD_PATH" aria-label="left aligned">
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
          {/* TODO: validate that these values are floats */}
          <TextField
            variant="outlined"
            required
            label="Track Width (m)"
            value={props.trackWidth}
            onChange={(e) => props.setTrackWidth(e.target.value)}
          />
        </ListItem>
        <ListItem>
          <TextField
            variant="outlined"
            required
            label="Max Velocity (m/s)"
            value={props.maxVel}
            onChange={(e) => props.setMaxVel(e.target.value)}
          />
        </ListItem>
        <ListItem>
          <TextField
            variant="outlined"
            label="Max Acceleration (m/s/s)"
            value={props.maxAccel}
            onChange={(e) => props.setMaxAccel(e.target.value)}
          />
        </ListItem>
        <ListItem>
          <TextField
            variant="outlined"
            label="Max Jerk (m/s/s/s)"
            value={props.maxJerk}
            onChange={(e) => props.setMaxJerk(e.target.value)}
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
            value={props.field}
            exclusive
            onChange={(e, newField) => {
              if (newField !== null) {
                props.setField(newField);
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
    </>
  );
};

import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { CopyBlock, atomOneDark } from "react-code-blocks";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          pt={2}
          p={1}
          style={{ backgroundColor: "#282c34" /* match the OneDark bg */ }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    maxWidth: 800,
  },
}));

export interface CanvasDims {
  x: number;
  y: number;
}
export interface SimpleTabsProps {
  paths: Map<string, any>;
  trackWidth: string;
  maxVel: string;
  maxAccel: string;
  maxJerk: string;
  canvasDims: CanvasDims;
}

export default function SimpleTabs(props: SimpleTabsProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const FIELD_METERS = 3.6576;

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const squigglesCoords = (x: number, y: number, yaw: number) => ({
    // TODO: check if the starting position is top left
    // Make (0, 0) be the bottom left, then X is up and Y is right for Okapi
    x: (x / props.canvasDims.x) * FIELD_METERS,
    y: (1 - y / props.canvasDims.y) * FIELD_METERS,
    yaw: -1 * (yaw + Math.PI / 2),
  });

  const okapiCoords = (x: number, y: number, yaw: number) => ({
    // TODO: check if the starting position is top left
    // Make (0, 0) be the bottom left, then X is up and Y is right for Okapi
    x: (1 - y / props.canvasDims.y) * FIELD_METERS,
    y: (x / props.canvasDims.x) * FIELD_METERS,
    yaw: yaw,
  });

  const squigglesCode = () => {
    let out = "#define PATH_DT             (0.01)\n";
    out += `#define PATH_MAX_VEL        (${props.maxVel})\n`;
    out += `#define PATH_MAX_ACCEL      (${props.maxAccel})\n`;
    out += `#define PATH_MAX_JERK       (${props.maxJerk})\n`;
    out += `#define CHASSIS_TRACK_WIDTH (${props.trackWidth})\n\n`;
    out +=
      "auto constraints = squiggles::Constraints(PATH_MAX_VEL, PATH_MAX_ACCEL, PATH_MAX_JERK);\n";
    out += `auto model = std::make_shared<squiggles::TankModel>(CHASSIS_TRACK_WIDTH, constraints);\n`;
    out +=
      "auto generator = squiggles::SplineGenerator(constraints, model, PATH_DT);\n\n";
    out += Array.from(props.paths)
      .slice(0, -1)
      .map(([k, v]) => {
        let path = `auto path${k} = generator.generate({\n`;
        for (let i = v.vectors.length - 1; i >= 0; --i) {
          const vec = v.vectors[i];
          let yaw = vec.r.rotation;
          const coords = squigglesCoords(
            vec.p.translation.x,
            vec.p.translation.y,
            yaw
          );
          const x = coords.x;
          const y = coords.y;
          yaw = coords.yaw;
          // TODO: should this be added to affect the path shape?
          // const vel = Math.sqrt(
          //   Math.pow(vec.r.translation.y - y, 2) +
          //     Math.pow(vec.r.translation.x - x, 2)
          // );
          path += `\tsquiggles::ControlVector(squiggles::Pose(${x.toFixed(
            3
          )}, ${y.toFixed(3)}, ${yaw.toFixed(3)})})`;
          if (i < v.vectors.length - 1) {
            path += ",\n";
          } else {
            path += "\n";
          }
        }
        path += "});\n";
        return path;
      })
      .join("");
    return out;
  };

  const okapiCode = () => {
    let out = "// TODO: Fill in the info below for your robot\n";
    out += "#define LEFT_CHASSIS_MOTOR_PORTS ({1, 2})\n";
    out += "#define RIGHT_CHASSIS_MOTOR_PORTS ({3, 4})\n";
    out += "#define WHEEL_DIAMETER (4_in)\n";
    out +=
      "#define CHASSIS_MOTOR_CARTRIDGE (okapi::AbstractMotor::gearset::green)\n";
    out +=
      "#define CHASSIS_CARTRIDGE_TICKS (imev5GreenTPR) // Should match above\n\n";
    out += `#define PATH_MAX_VEL        (${props.maxVel})\n`;
    out += `#define PATH_MAX_ACCEL      (${props.maxAccel})\n`;
    out += `#define PATH_MAX_JERK       (${props.maxJerk})\n`;
    out += `#define CHASSIS_TRACK_WIDTH (${props.trackWidth}_m)\n\n`;
    out += "auto chassis = okapi::ChassisControllerBuilder()\n";
    out +=
      "\t.withMotors(LEFT_CHASSIS_MOTOR_PORTS, RIGHT_CHASSIS_MOTOR_PORTS)\n";
    out += "\t.withDimensions(\n";
    out += "\t\tCHASSIS_MOTOR_CARTRIDGE,\n";
    out +=
      "\t\t{{WHEEL_DIAMETER, CHASSIS_TRACK_WIDTH}, CHASSIS_CARTRIDGE_TICKS})\n";
    out += "\t.build();\n";
    out +=
      "auto profileController = okapi::AsyncMotionProfileControllerBuilder()\n";
    out += "\t.withLimits({PATH_MAX_VEL, PATH_MAX_ACCEL, PATH_MAX_JERK})\n";
    out += "\t.withOutput(chassis)\n";
    out += "\t.buildMotionProfileController();\n\n";
    out += "/**\n";
    out += " * The Coordinate System for Okapi Points is:\n";
    out += " * ^\n";
    out += " * | x\n";
    out += " * |    ↷ yaw\n";
    out += " * |   y\n";
    out += " * ------>\n";
    out += " */\n";
    out += Array.from(props.paths)
      .slice(0, -1)
      .map(([k, v]) => {
        let path = "profileController->generatePath({\n";
        for (let i = v.vectors.length - 1; i >= 0; --i) {
          const vec = v.vectors[i];
          let yaw = vec.r.rotation;
          const coords = okapiCoords(
            vec.p.translation.x,
            vec.p.translation.y,
            yaw
          );
          const x = coords.x;
          const y = coords.y;
          yaw = coords.yaw;
          path += `\t{${x.toFixed(3)}_m, ${y.toFixed(3)}_m, ${yaw.toFixed(
            3
          )}_rad},\n`;
        }
        path += `\t"${k}"\n});\n`;
        return path;
      })
      .join("");
    return out;
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Okapi" {...a11yProps(0)} />
          <Tab label="Squiggles" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CopyBlock
          text={okapiCode()}
          language={"cpp"}
          showLineNumbers={true}
          theme={atomOneDark}
          codeBlock
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CopyBlock
          text={squigglesCode()}
          language={"cpp"}
          showLineNumbers={true}
          theme={atomOneDark}
          codeBlock
        />
      </TabPanel>
    </div>
  );
}

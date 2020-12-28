import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
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
      {value === index && <Box pt={1}>{children}</Box>}
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
  },
}));

export interface SimpleTabsProps {
  paths: Map<string, any>;
}

export default function SimpleTabs(props: SimpleTabsProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const squigglesCode = () => {
    let out =
      "auto constraints = squiggles::Constraints(2.0, 2.0, 1.0, 1.0);\n";
    out +=
      "auto model = std::make_shared<squiggles::TankModel>(0.4, constraints);\n";
    out += "const dt = 0.01;\n";
    out +=
      "auto generator = squiggles::SplineGenerator(constraints, model, dt);\n\n";
    out += Array.from(props.paths)
      .slice(0, -1)
      .map(([k, v]) => {
        let path = `auto path${k} = generator.generate({\n`;
        for (let i = 0; i < v.vectors.length; ++i) {
          const vec = v.vectors[i];
          const x = vec.p.translation.x;
          const y = vec.p.translation.y;
          const yaw = vec.r.rotation;
          const vel = Math.sqrt(
            Math.pow(vec.r.translation.y - y, 2) +
              Math.pow(vec.r.translation.x - x, 2)
          );
          path += `\tsquiggles::ControlVector(squiggles::Pose(${x}, ${y}, ${yaw}), ${vel})`;
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
    let out = "auto chassis = okapi::ChassisControllerBuilder()\n";
    out +=
      "\t.withMotors({1, 2}, {-3, -4} /* TODO: Add your motor ports here */)\n";
    out +=
      "\t.withDimensions(okapi::AbstractMotor::gearset::green, {{4_in, 11.5_in}, imev5GreenTPR})\n";
    out += "\t.build();\n\n";
    out += Array.from(props.paths)
      .slice(0, -1)
      .map(([k, v]) => {
        let path = `auto path${k} = generator.generate({\n`;
        for (let i = 0; i < v.vectors.length; ++i) {
          const vec = v.vectors[i];
          const x = vec.p.translation.x;
          const y = vec.p.translation.y;
          const yaw = vec.r.rotation;
          const vel = Math.sqrt(
            Math.pow(vec.r.translation.y - y, 2) +
              Math.pow(vec.r.translation.x - x, 2)
          );
          path += `\tsquiggles::ControlVector(squiggles::Pose(${x}, ${y}, ${yaw}), ${vel})`;
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

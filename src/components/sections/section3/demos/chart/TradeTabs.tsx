import React from "react";
import { withResizeDetector } from "react-resize-detector";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  tabsRoot: {
    minHeight: 0,
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      width: "30%",
      backgroundColor: "#635ee7",
    },
  },
  tabRoot: {
    width: "50%",
    minWidth: 0,
    minHeight: 0,
    textTransform: "none",
    fontWeight: "normal",
    "&:focus": {
      opacity: 1,
    },
  },
});

interface Props {
  onChange: (i: number) => void;
  value: number;
  height: number;
  width: number;
}

function CustomTabs(props: Props) {
  const { onChange, value, width } = props;
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    onChange(newValue);
  };

  return (
    <Tabs
      classes={{ root: classes.tabsRoot, indicator: classes.indicator }}
      TabIndicatorProps={{ children: <div /> }}
      onChange={handleChange}
      value={value}
    >
      <Tab
        classes={{ root: classes.tabRoot }}
        disableRipple
        label="Buy"
        style={{ fontSize: 0.04 * width, padding: 0.01 * width }}
      />
      <Tab
        classes={{ root: classes.tabRoot }}
        disableRipple
        label="Sell"
        style={{ fontSize: 0.04 * width, padding: 0.01 * width }}
      />
    </Tabs>
  );
}

export default withResizeDetector(CustomTabs);

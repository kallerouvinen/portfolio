import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Section1, Section2, Section3 } from "./components/sections/";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;

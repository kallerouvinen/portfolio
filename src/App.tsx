import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Section1, Section2, Section3, Section4 } from "./components/sections/";

import Slide from "./components/sections/section3/Slide";

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
    <Router>
      <Switch>
        <Route path="/slide1">
          <Slide backgroundColor="red" />
        </Route>
        <Route path="/slide2">
          <Slide backgroundColor="blue" />
        </Route>
        <Route path="/slide3">
          <Slide backgroundColor="green" />
        </Route>
        <Route path="/">
          <div className={classes.root}>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

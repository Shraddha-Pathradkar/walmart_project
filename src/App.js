import "./App.css";
import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./Components/Home";
import IssueDetails from "./Components/IssueDetails";
const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/details" exact>
        <IssueDetails />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return <Router>{routes}</Router>;
};

export default App;

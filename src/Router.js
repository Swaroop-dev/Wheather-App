import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import WheatherDetail from "./Components/WheatherDetail";

export default function RouterComponent() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/detail/:id">
            <WheatherDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

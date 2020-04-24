import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Companies from "./views/companies";
import Invest from "./views/invest";
import Profile from "./views/profile";
import Auth from "./views/auth";
import Dashboard from "./views/dashboard";
import "./styles.css";

const VIEWS = [
  ["companies", Companies],
  ["profile", Profile],
  ["invest", Invest],
  ["auth", Auth],
  ["", Dashboard]
];

const Content = () => {
  return (
    <Switch>
      {VIEWS.map(([path, Comp]) => (
        <Route key={path} path={`/${path}`}>
          <Comp />
        </Route>
      ))}
    </Switch>
  );
};

export default function App() {
  return (
    <Router>
      <h3>Header</h3>
      <div className="App">
        <Content />
      </div>
    </Router>
  );
}

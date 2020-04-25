import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";

import { FundGrid } from "./fundGrid";
import { FundPage } from "./fundPage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },
  content: {
    background: "#d9d9d9",
  },
  fundButton: {
    flexGrow: 1,
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },
}));

export default function Funds() {
  return (
    <Switch>
      <Route path="/funds/:id">
        <FundPage />
      </Route>
      <Route path="/funds/">
        <FundGrid />
      </Route>
    </Switch>
  );
}

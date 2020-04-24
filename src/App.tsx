import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Companies from "./views/companies";
import Invest from "./views/invest";
import Profile from "./views/profile";
import Auth from "./views/auth";
import Dashboard from "./views/dashboard";
import WithUser from "./HOC/WithUser";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  content: {
    margin: "15px",
  },
}));

const VIEWS = [
  ["companies", Companies],
  ["profile", Profile],
  ["invest", Invest],
  ["auth", Auth],
  ["", Dashboard],
];

const LOGGED_OUT_MENU = [{ label: "Login", link: "auth" }];

const LOGGED_MENU = [
  { label: "Profile", link: "profile" },
  { label: "Fund", link: "fund" },
];

const Content = () => {
  return (
    <Switch>
      {VIEWS.map(([path, Comp]) => (
        // @ts-ignore
        <Route key={path} path={`/${path}`}>
          <Comp />
        </Route>
      ))}
    </Switch>
  );
};

function AppMenu({ anchorEl, handleClose, user }: any) {
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {(user ? LOGGED_MENU : LOGGED_OUT_MENU).map((el) => (
        <MenuItem onClick={handleClose}>
          <Link to={el.link}>{el.label}</Link>
        </MenuItem>
      ))}
      {user && <MenuItem onClick={handleClose}>Logout</MenuItem>}
    </Menu>
  );
}

export default WithUser(function App({ user }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  //@ts-ignore
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            CrowdFund
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AppMenu user={user} handleClose={handleClose} anchorEl={anchorEl} />
      <div className={classes.content}>
        <Content />
      </div>
    </Router>
  );
});

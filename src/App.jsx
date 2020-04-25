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
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Companies from "./views/companies";
import Invest from "./views/invest";
import Profile from "./views/profile";
import Auth from "./views/auth";
import Dashboard from "./views/dashboard";
import WithUser from "./HOC/WithUser";
import { FirebaseContext } from "./firebase";
import Funds from "./views/funds/index";
import "./styles.css";

function focusByHash() {
  const location = window.location;
  if (location && location.hash) {
    const elmnt = document.querySelector(location.hash);
    elmnt && elmnt.scrollIntoView();
  }
}

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

const VIEWS = [
  ["funds", Funds],
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

function AppMenu({ anchorEl, handleClose, user }) {
  const firebase = React.useContext(FirebaseContext);
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {(user ? LOGGED_MENU : LOGGED_OUT_MENU).map((el) => (
        <MenuItem onClick={handleClose} key={el.link}>
          <Link to={el.link}>{el.label}</Link>
        </MenuItem>
      ))}
      {user && (
        <MenuItem
          onClick={(ev) => {
            handleClose(ev);
            // @ts-ignore
            if (firebase !== null) firebase.signout();
          }}
        >
          Logout
        </MenuItem>
      )}
    </Menu>
  );
}

export default WithUser(function App({ user }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log("called");


  React.useEffect(() => {
    console.log('effect');
    focusByHash();
  });
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="">CrowdFund</Link>
          </Typography>
          <Typography variant="h6" className={classes.fundButton}>
            <Button color="primary" onClick={() => focusByHash()}>
              <Link to={"/#about"}>About</Link>
            </Button>
          </Typography>
          <Typography variant="h6" className={classes.fundButton}>
            <Button color="primary" onClick={() => focusByHash()}>
              <Link to={"/#mission"}>Mission</Link>
            </Button>
          </Typography>
          <Typography variant="h6" className={classes.fundButton}>
            <Button color="primary" onClick={() => focusByHash()}>
              <Link to={"/#team"}>Team</Link>
            </Button>
          </Typography>
          <Typography variant="h6" className={classes.fundButton}>
            <Button color="primary">
              <Link to={"/funds"}>Donate/Funds</Link>
            </Button>
          </Typography>
          <Typography variant="h6" className={classes.fundButton}>
            <Button color="primary" onClick={() => focusByHash()}>
              <Link to={"/profile"}>Profile</Link>
            </Button>
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

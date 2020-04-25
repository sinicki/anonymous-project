import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const CARD_HEIGHT = 200;

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 256,
    width: 256,
    maxHeight: CARD_HEIGHT,
    height: CARD_HEIGHT,

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
  },
  button: {
    border: "1px solid black",
    borderRadius: 3,
    backgroundColor: "white",
    color: "gray",
    padding: 7,
    paddingLeft: 15,
    paddingRight: 15,
    minWidth: 100,
    "& a": { textDecoration: "none" },
    "& :hover": {
      backgroundColor: "yellow",
      padding: 7,
      paddingLeft: 15,
      paddingRight: 15,
      minWidth: 100,
    },
  },
});

export function FundCard({ name, imageUrl }) {
  const classes = useStyles();

  return (
    <Paper
      className={classes.root + " " + classes.centralized}
      key={name}
      style={{
        backgroundImage: `url("${imageUrl}")`,
      }}
    >
      <Button size="small" color="primary" className={classes.button}>
        <a href={"funds/" + name}>{name}</a>
      </Button>
    </Paper>
  );
}

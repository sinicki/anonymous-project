import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const FUNDS = [
  [
    "Hotels",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Mercure_hotel_taksim.jpg/1920px-Mercure_hotel_taksim.jpg",
  ],
  [
    "Restaurants",
    "https://upload.wikimedia.org/wikipedia/commons/2/22/Petrus_%28London%29_Kitchen.jpg",
  ],
  [
    "Gyms",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Amsterdam_-_Gymnasium_-_0591.jpg/1280px-Amsterdam_-_Gymnasium_-_0591.jpg",
  ],
  [
    "Travel agencies",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Farming_near_Klingerstown%2C_Pennsylvania.jpg/640px-Farming_near_Klingerstown%2C_Pennsylvania.jpg",
  ],
];

const CARD_HEIGHT = 200;

const useStyles = makeStyles({
  title: {
    position: "relative",
    top: 40,
    left: 40,
    zIndex: "3",
  },
  centralized: {

  },
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
    "& :hover": {
      backgroundColor: "yellow",
    },
  },

  description: {
    maxHeight: 300,
    overflowY: "auto",
  },
});

export default function Funds() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Typography align={"center"} variant="h4" gutterBottom>
      Our open funds
      </Typography>
      <Grid container spacing={10} justify="center" alignItems="center">
        {FUNDS.map(([name, imageUrl]) => (
          <Grid item xs={12} sm={6} key={name} className={""}>
            <Paper
              className={classes.root + " " + classes.centralized}
              key={name}
              style={{

                backgroundImage: `url("${imageUrl}")`,
              }}
            >
              <Button
                size="small"
                color="primary"
                className={classes.button}
                onClick={(e) => {
                  console.log(e);
                }}
              >
                {name}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
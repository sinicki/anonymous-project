import MaterialButton from "@material-ui/core/Button";
import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { FUNDS } from "./data";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useLocation } from "react-router-dom";
import { ProjectCarousel } from "./projectCarousel";
import Paper from "@material-ui/core/Paper";
const CARD_HEIGHT = 200;

const useStyles = makeStyles({
  root: {},
  picture: {
    height: 200,
    width: "auto",
  },
  progress: {
    height: 10,
  },
  mainGrid: {
    backgroundColor: "white",
  },
  roundedButton: {
    marginTop: 10,
    borderRadius: 20,
    padding: 5,
    border: "1px solid black",
  },
  projectCard: {
    width:250,
    height:300,
    maxWidth:160,
    maxHeight:300,
    fontSize:12,
    margin:5
  }
});

export function FundPage(props) {
  const location = useLocation();
  const classes = useStyles();
  const pathElements = location.pathname.split("/");
  console.log(pathElements);
  const id = pathElements.length >= 3 ? pathElements[2] : null;
  const fund = FUNDS.find((fund) => fund[0] === id);
  if (!fund) {
    return null;
  }
  const [name, imageUrl] = fund;

  return (
    <Container maxWidth="sm">
      <Typography align={"center"} variant="h4" gutterBottom></Typography>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12} sm={6} className={classes.mainGrid}>
          <Typography variant="h6">{name} fund</Typography>
          <Typography variant="h6">Amount rest: ****PLN</Typography>
          <Typography variant="h6">Total amount: ****PLN</Typography>
          <LinearProgress
            variant="determinate"
            color="secondary"
            value={50}
            className={classes.progress}
          />
          <MaterialButton className={classes.roundedButton}>
            Donate
          </MaterialButton>
        </Grid>
        <Grid item xs={12} sm={6} className={""}>
          <CardMedia
            className={classes.picture}
            image={imageUrl}
            title={name}
          />
        </Grid>
        <Grid item xs={12}>
          <ProjectCarousel
            title="Funded Projects"
            items={[
              { name: "Ryba", description: "near the shore" },
              {
                name: "Deer",
                description: "in the forest",
              },
            ]}
            ItemComponent={(props) => (

                <Paper className={classes.projectCard}>
                {JSON.stringify(props)}
                </Paper>

            )}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

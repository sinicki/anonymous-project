import MaterialButton from "@material-ui/core/Button";
import Button from "@material-ui/core/Button";
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { FUNDS } from "./data";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useLocation } from "react-router-dom";
import { ProjectCarousel } from "./projectCarousel";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import { FirebaseContext } from "../../firebase";
import {
  BlockDisplay,
  BlockSize,
  BlockType,
} from "../../sharedComponents/Block";

const useStyles = makeStyles({
  root: {},
  picture: {
    height: 200,
    width: "auto",
  },
  cardPicture: {
    height: 80,
    maxWidth: 80,
    backgroundSize: "cover",
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
    height: 300,
    maxWidth: 160,
    minWidth: 160,
    maxHeight: 300,
    fontSize: 4,
    margin: 5,
    padding: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  voteButton: {
    borderRadius: 15,
    padding: 5,
    border: "1px solid black",
  },
  text: {
    fontSize: 12,
  },
  firstRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export function FundPage(props) {
  const firebaseContext = useContext(FirebaseContext);

  const location = useLocation();
  const classes = useStyles();
  const pathElements = location.pathname.split("/");

  const id = pathElements.length >= 3 ? pathElements[2] : null;
  const fund = FUNDS.find((fund) => fund[0] === id);
  if (!fund) {
    return null;
  }
  const [name, imageUrl] = fund;
  let amount = 0;

  let donate = () => {
    let currentUserEmail = firebaseContext.getCurrentUser().email;
    firebaseContext.addDonation({
      amount_donated: parseInt(amount),
      email: currentUserEmail,
      funds_id: name.toLowerCase(),
    });
  };

  let fundDetail = (
    <div className={classes.firstRow}>
      <div style={{ width: "100%", padding: "15px" }}>
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
          <TextField
            id="donation-amount"
            label="Amount"
            onChange={(event) => (amount = event.target.value)}
          />
          <MaterialButton onClick={donate} className={classes.roundedButton}>
            Donate
          </MaterialButton>
        </Grid>
      </div>
      <div
        style={{
          width: "100%",
          padding: "15px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sm={6} className={""}>
          <CardMedia
            className={classes.picture}
            image={imageUrl}
            title={name}
          />
        </Grid>
      </div>
    </div>
  );

  return (
    <BlockDisplay
      blocks={[
        {
          type: BlockType.title,
          title: "Overview",
          size: BlockSize.small,
          content: fundDetail,
        },
        {
          type: BlockType.title,
          size: BlockSize.middle,
          title: "Funded projects",
          content: (
            <Grid item xs={12}>
              <ProjectCarousel
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
          ),
        },
        {
          type: BlockType.title,
          size: BlockSize.middle,
          title: "Waiting for fundation",
          content: (
            <ProjectCarousel
              comment="Here some project which is still waiting for you"
              items={[
                { name: "Forest cafe", description: "Near Notecka Puszcza" },
                {
                  name: "London Cafe",
                  description: "In center of Warsaw",
                },
                {
                  name: "Kraków Nights",
                  description: "Near royal palace",
                },
                {
                  name: "Gdansk Sea",
                  description: "Near See",
                },
                {
                  name: "Wroclaw Music",
                  description: "Game Symphony",
                },
              ]}
              ItemComponent={({ name, description }) => (
                <Paper className={classes.projectCard}>
                  <Typography>
                    <CardMedia
                      component="img"
                      className={classes.cardPicture}
                      image={
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Igel.JPG/305px-Igel.JPG"
                      }
                      title={name}
                    />
                  </Typography>
                  <Typography variant="h6" className={classes.text}>
                    Name:
                  </Typography>
                  <Typography className={classes.text}>{name}</Typography>
                  <Typography variant="h6" className={classes.text}>
                    Description:
                  </Typography>
                  <Typography className={classes.text}>
                    {description}
                  </Typography>
                  <Button
                    className={classes.voteButton}
                    onClick={() => {
                      console.log("Vote for " + name);
                    }}
                  >
                    Vote
                  </Button>
                </Paper>
              )}
            />
          ),
        },
      ]}
    />
  );
}

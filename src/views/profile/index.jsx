import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useLocation } from "react-router-dom";
import WithUser from "./../../HOC/WithUser";

import Paper from "@material-ui/core/Paper";

const PORTRAIT_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Reproduction-of-the-1805-Rembrandt-Peale-painting-of-Thomas-Jefferson-New-York-Historical-Society_1.jpg/200px-Reproduction-of-the-1805-Rembrandt-Peale-painting-of-Thomas-Jefferson-New-York-Historical-Society_1.jpg";

const useStyles = makeStyles({
  root: { backgroundColor: "white" },
  pieImage: { height: 450, width: "auto" },
  portrait: {
    width: 200,
    height: 240,
  },
  userName: {
    fontSize: 16,
    fontFamily: "Courier New",
  },
  paper: {
    fontSize: 14,
    fontFamily: "Courier New",
    textAlign: "right",
  },
  paperHeader: {
    fontSize: 14,
    fontFamily: "Courier New",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default WithUser(function Profile({ user }) {
  const location = useLocation();
  const classes = useStyles();
  if (!user) {
    // return null;
  }
  console.log("user");
  var user = new Object();
  user.displayName = "Tomasz Rapusta";
  user.email = "tommy@rapusta.com";
  const { displayName, email } = user;

  const pathElements = location.pathname.split("/");

  const donations = [
    { date: "2012-01-04", amount: "4000PLN", fund: "Restaurants" },
    { date: "2014-01-04", amount: "4000PLN", fund: "Restaurants" },
    { date: "2019-01-04", amount: "2000PLN", fund: "Restaurants" },
    { date: "2020-01-04", amount: "222PLN", fund: "Hotels" },
  ];

  const totalAmount = donations
    .map((x) => Number.parseFloat(x.amount))
    .reduce((r, number) => {
      return r + number;
    }, 0);

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography align={"center"} variant="h4" gutterBottom />
      <Grid container spacing={10} justify="center" alignItems="center">
        <Grid item xs={12} sm={4} className={""}>
          <Typography align={"center"} variant="h4" gutterBottom>
            <CardMedia title={"name"}>
              <img className={classes.portrait} src={PORTRAIT_URL} />
            </CardMedia>
          </Typography>

          <Typography className={classes.userName}>{displayName}</Typography>
          <Typography className={classes.userName}>{email}</Typography>
        </Grid>
        <Grid item xs={12} sm={8} className={""}>
          <Typography>Total amount: {totalAmount} PLN</Typography>
          <Typography align={"center"} variant="h4" gutterBottom>
            <CardMedia title={"name"}>
              <img className={classes.pieImage} src={"/pie.PNG"} />
            </CardMedia>
          </Typography>
        </Grid>
        <Grid item xs={12} className={""} align="center">
          <Typography align={"center"} variant="h4" gutterBottom />
          <Typography variant={"h"}>Donations history:</Typography>
          <Typography align={"center"} variant="h4" gutterBottom />
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paperHeader}>Amount</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paperHeader}>Date</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paperHeader}>Fund</Paper>
          </Grid>
        </Grid>

        {donations.map((donation) => {
          return (
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>{donation.amount}</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>{donation.date}</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>{donation.fund}</Paper>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
});

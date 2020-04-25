import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { FUNDS } from "./data";
import { FundCard } from "./fundCard";

export default function Funds() {
  return (
    <Container maxWidth="sm">
      <Typography align={"center"} variant="h4" gutterBottom>
        Our open funds
      </Typography>
      <Grid container spacing={10} justify="center" alignItems="center">
        {FUNDS.map(([name, imageUrl]) => (
          <Grid item xs={12} sm={6} key={name} className={""}>
            <FundCard name={name} imageUrl={imageUrl} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

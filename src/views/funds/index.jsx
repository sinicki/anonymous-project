import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {
  BlockDisplay,
  BlockType,
  BlockSize,
} from "../../sharedComponents/Block";

import { FUNDS } from "./data";
import { FundCard } from "./fundCard";

export default function Funds() {
  return (
    <BlockDisplay
      blocks={[
        {
          title: "Our open funds",
          size: BlockSize.medium,
          type: BlockType.title,
          content: (
            <Container maxWidth="sm">
              <Grid container spacing={10} justify="center" alignItems="center">
                {FUNDS.map(([name, imageUrl]) => (
                  <Grid item xs={12} sm={6} key={name} className={""}>
                    <FundCard name={name} imageUrl={imageUrl} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          ),
        },
      ]}
    />
  );
}

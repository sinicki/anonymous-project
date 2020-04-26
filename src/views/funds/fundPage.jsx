import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FUNDS } from "./data";
import { useLocation } from "react-router-dom";
import FundDetail from "./fundDetail";
import FundProjects from "./fundProjects";

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
    backgroundColor: "white",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
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
  const location = useLocation();
  const classes = useStyles();
  const pathElements = location.pathname.split("/");

  const id = pathElements.length >= 3 ? pathElements[2] : null;
  const fund = FUNDS.find((fund) => fund[0] === id);
  if (!fund) {
    return null;
  }
  const [name, imageUrl] = fund;

  return (
    <BlockDisplay
      blocks={[
        {
          type: BlockType.title,
          title: "Overview",
          size: BlockSize.small,
          content: (
            <FundDetail
              fundName={name.toLowerCase()}
              classes={classes}
            ></FundDetail>
          ),
        },
        {
          type: BlockType.title,
          size: BlockSize.middle,
          title: "Funded projects",
          content: (
            <FundProjects
              funded={true}
              fundName={name.toLowerCase()}
              classes={classes}
            ></FundProjects>
          ),
        },
        {
          type: BlockType.title,
          size: BlockSize.middle,
          title: "Waiting for fundation",
          content: (
            <FundProjects
              funded={false}
              fundName={name.toLowerCase()}
              classes={classes}
            ></FundProjects>
            // <ProjectCarousel
            //   comment="Here some project which is still waiting for you"
            //   items={[
            //     { name: "Forest cafe", description: "Near Notecka Puszcza" },
            //     {
            //       name: "London Cafe",
            //       description: "In center of Warsaw",
            //     },
            //     {
            //       name: "Kraków Nights",
            //       description: "Near royal palace",
            //     },
            //     {
            //       name: "Gdansk Sea",
            //       description: "Near See",
            //     },
            //     {
            //       name: "Wroclaw Music",
            //       description: "Game Symphony",
            //     },
            //   ]}
            //   ItemComponent={({ name, description }) => (
            //     <Paper className={classes.projectCard}>
            //       <Typography>
            //         <CardMedia
            //           component="img"
            //           className={classes.cardPicture}
            //           image={
            //             "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Igel.JPG/305px-Igel.JPG"
            //           }
            //           title={name}
            //         />
            //       </Typography>
            //       <Typography variant="h6" className={classes.text}>
            //         Name:
            //       </Typography>
            //       <Typography className={classes.text}>{name}</Typography>
            //       <Typography variant="h6" className={classes.text}>
            //         Description:
            //       </Typography>
            //       <Typography className={classes.text}>
            //         {description}
            //       </Typography>
            //       <Button
            //         className={classes.voteButton}
            //         onClick={() => {
            //           console.log("Vote for " + name);
            //         }}
            //       >
            //         Vote
            //       </Button>
            //     </Paper>
            //   )}
            // />
          ),
        },
      ]}
    />
  );
}

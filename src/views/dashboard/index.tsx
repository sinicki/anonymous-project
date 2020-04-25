import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import {
  Block,
  BlockDisplay,
  BlockSize,
  BlockType,
} from "../../sharedComponents/Block";

const useStyles = makeStyles(() => ({
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  team: {},
  teamBlock: {
    padding: "15px 125px",
    border: "2px solid black",
    display: "grid",
    gridAutoRows: "25px",
  },
  teamMember: {},
  touchMessage: {
    width: "530px",
    height: "150px",
  },
  touchLine: {
    display: "grid",
    gridTemplateColumns: "200px 200px 100px",
    gridGap: "15px",
  },
}));

const TeamMember = ({ name }: { name: string }) => {
  const classes = useStyles();
  return (
    <div className={classes.flexCenter}>
      <span>{name}</span>
    </div>
  );
};

const TEAM = `Charles-Alexander GAMBA
Lukasz Karczewski
Kamil Kobza
Ivan Urvanow
Tomasz Rapusta
Anna Badurek`.split("\n");

const Team = () => {
  const classes = useStyles();
  return (
    <div className={classes.flexCenter}>
      <div className={classes.teamBlock}>
        <div className={classes.flexCenter}>
          <span>We are a team of new ITDS workers.</span>
        </div>
        <div className={classes.flexCenter}>
          <span>Team members:</span>
        </div>
        {TEAM.map((tm) => (
          <TeamMember name={tm} key={tm} />
        ))}
      </div>
    </div>
  );
};

const Touch = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.flexCenter}>
      <form noValidate autoComplete="off">
        <div className={classes.touchMessage}>
          <TextField
            style={{ width: "100%", height: "100%" }}
            required
            label="Message"
            multiline
            id="message"
            rowsMax={5}
            defaultValue={`Write us a message



`}
            variant="outlined"
          />
        </div>
        <div className={classes.touchLine}>
          <TextField id="email" label="Email" autoComplete="email" />
          <TextField id="full-name" label="Full name" />
          <Button variant="contained" color="primary">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

const getLines = (s: string) => s.split("\n").map((el) => <div>{el}</div>);

const BLOCKS: Block[] = [
  {
    size: BlockSize.medium,
    title: "Photo",
    background: "/finance_1920.jpg",
    type: BlockType.image,
  },
  {
    size: BlockSize.small,
    title: "About",
    content: getLines(`We are offer donators an opportunity to get back "revenues", without guarantees, once the restaurants are profitable in the future (2-3 years)
      We create a new form of donation - When things get better, donators can get back their cash - Model of mutualize losses and mutualize the gains for the small businesses (Restaurant) that will survive thanks to these donations!
      We offer literary everyone to become a shareholder of their local community business! Crowd & Social Power!`),
    type: BlockType.title,
  },
  {
    size: BlockSize.small,
    title: "Mission",
    content: getLines(`We are offer donators an opportunity to get back "revenues", without guarantees, once the restaurants are profitable in the future (2-3 years)  
    We create a new form of donation - When things get better, donators can get back their cash - Model of mutualize losses and mutualize the gains for the small businesses (Restaurant) that will survive thanks to these donations!
    We offer literary everyone to become a shareholder of their local community business! Crowd & Social Power!
    `),
    type: BlockType.title,
  },
  {
    size: BlockSize.small,
    title: "Team",
    content: <Team />,
    type: BlockType.title,
  },
  {
    size: BlockSize.small,
    title: "Get in touch",
    content: <Touch />,
    type: BlockType.title,
  },
];

export default () => {
  return (
    <div>
      <BlockDisplay blocks={BLOCKS} />
    </div>
  );
};

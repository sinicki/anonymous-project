import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export enum BlockType {
  small,
  large,
  full,
  image,
  plainSmall,
}

export interface Block {
  title: string;
  content: any;
  type: BlockType;
}

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    block: {
      background: "white",
      fontFamily: "Arial, Helvetica, sans-serif",
      color: "#434343",
    },
    blockTitle: {
      height: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "40px",
    },
    blockContent: {
      padding: "25px 125px",
    },
    blockDisplay: {
      display: "grid",
      gridGap: "1px",
    },
    blockFull: {
      height: "100vh",
    },
    blockImage: {
      height: "600px",
      width: "100%",
    },
    blockSmall: {
      height: "400px",
      overflow: "hidden",
    },
    flexCenter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});

const BlockImage = ({ content }: Block) => {
  const classes = useStyles();
  return (
    <div
      className={classes.blockImage}
      style={{
        background: `url(${process.env.PUBLIC_URL + content})`,
      }}
    />
  );
};

const BlockFull = ({ content }: Block) => {
  const classes = useStyles();
  return <div className={classes.blockFull}>{content}</div>;
};

const BlockSmall = ({ content, title }: Block) => {
  const classes = useStyles();
  return (
    <div className={classes.blockSmall}>
      <div className={classes.blockTitle}>
        <span role="title">{title}</span>
      </div>
      <div className={classes.blockContent}>{content}</div>
    </div>
  );
};

const BlockLarge = ({ content, title }: Block) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.blockTitle}>
        <span role="title">{title}</span>
      </div>
      <div className={classes.blockContent}>{content}</div>
    </>
  );
};

const BlockPlainSmall = ({ content }: Block) => {
  const classes = useStyles();
  return (
    <div className={classes.blockSmall}>
      <div className={classes.blockContent}>{content}</div>
    </div>
  );
};

const CompMap = {
  [BlockType.full]: BlockFull,
  [BlockType.small]: BlockSmall,
  [BlockType.large]: BlockLarge,
  [BlockType.image]: BlockImage,
  [BlockType.plainSmall]: BlockPlainSmall,
};

const BlockComp = ({ type, ...rest }: Block) => {
  const classes = useStyles();
  const Comp = CompMap[type];
  return (
    <div className={classes.block}>
      <Comp {...rest} type={type} />
    </div>
  );
};

export const BlockDisplay = ({ blocks }: { blocks: Block[] }) => {
  const classes = useStyles();
  return (
    <div className={classes.blockDisplay}>
      {blocks.map((b) => (
        <BlockComp {...b} />
      ))}
    </div>
  );
};

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export enum BlockType {
  title,
  image,
  imageTitle,
  plain,
}

export enum BlockSize {
  superSmall,
  small,
  medium,
  full,
  // large,
  // superLarge,
}

export interface Block {
  title: any;
  content?: any;
  size: BlockSize;
  type: BlockType;
  background?: string;
}

const useStyles = makeStyles((theme) => {
  const SUPER_SMALL = "200px";
  const SMALL_HEIGHT = "400px";
  const MEDIUM_HEIGHT = "600px";
  return {
    block: {
      background: "white",
      fontFamily: "Arial, Helvetica, sans-serif",
      color: "#434343",
      overflow: "hidden",
    },

    blockSuperSmall: {
      height: SUPER_SMALL,
    },
    blockSmall: {
      height: SMALL_HEIGHT,
    },
    blockMedium: {
      height: MEDIUM_HEIGHT,
    },
    blockFull: {
      height: "100%",
      minHeight: "calc(100vh - 64px)",
    },

    blockTitle: {
      height: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "40px",
    },
    blockSmallTitle: {
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
      margin: "20px 0 0 0",
    },

    blockContent: {
      padding: "25px 125px",
    },
    blockDisplay: {
      display: "grid",
      gridGap: "1px",
    },

    blockImage: {
      height: MEDIUM_HEIGHT,
      width: "100%",
    },
    blockImageTitle: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      position: "relative",
    },

    flexCenter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});

const SIZE_MAP = {
  [BlockSize.superSmall]: "blockSuperSmall",

  [BlockSize.small]: "blockSmall",

  [BlockSize.medium]: "blockMedium",

  [BlockSize.full]: "blockFull",
};

const BlockImage = ({ background, clas }: any) => {
  const classes = useStyles();
  return (
    <div
      className={clas}
      style={{
        background: `url(${process.env.PUBLIC_URL + background})`,
      }}
    />
  );
};

const BlockTitle = ({ content, title, size, clas }: any) => {
  const classes = useStyles();
  const name: string = title.toLowerCase();
  return (
    <div className={clas} id={name}>
      <div
        className={
          size === BlockSize.superSmall
            ? classes.blockSmallTitle
            : classes.blockTitle
        }
      >
        <Typography align={"center"} variant="h4" gutterBottom>
          {title}
        </Typography>
      </div>
      <div className={classes.blockContent}>{content}</div>
    </div>
  );
};

const BlockPlain = ({ content, clas }: any) => {
  const classes = useStyles();
  return (
    <div className={clas}>
      <div className={classes.blockContent}>{content}</div>
    </div>
  );
};

const BlockImageTitle = ({ background, title, content, size, clas }: any) => {
  const classes = useStyles();
  const name: string = title.toLowerCase();
  return (
    <div
      id={name}
      className={`${clas} ${classes.blockImageTitle}`}
      style={{
        background: `url(${process.env.PUBLIC_URL + background})`,
      }}
    >
      <span>{title}</span>
      {content}
    </div>
  );
};

const CompMap = {
  [BlockType.title]: BlockTitle,
  [BlockType.image]: BlockImage,
  [BlockType.imageTitle]: BlockImageTitle,
  [BlockType.plain]: BlockPlain,
};

const BlockComp = ({ type, size, ...rest }: Block) => {
  const classes = useStyles();

  const Comp = CompMap[type];
  // @ts-ignore
  const clas = classes[SIZE_MAP[size]];
  return (
    <div className={classes.block}>
      <Comp {...rest} clas={clas} size={size} type={type} />
    </div>
  );
};

export const BlockDisplay = ({ blocks }: { blocks: Block[] }) => {
  const classes = useStyles();
  return (
    <div className={classes.blockDisplay}>
      {blocks.map((b) => (
        <BlockComp {...b} key={b.title} />
      ))}
    </div>
  );
};

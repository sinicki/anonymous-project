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

      fontFamily: "questrial, sans-serif",
      fontSize: 40,
      fontStretch: "100%",
      fontStyle: "normal",
      fontVariantCaps: "normal",
      fontVariantEastEsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      fontWeight: 400,
      color: "rgb(255, 137, 50)",
    },
    blockSmallTitle: {
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      margin: "20px 0 0 0",

      fontFamily: "questrial, sans-serif",
      fontSize: 20,
      fontStretch: "100%",
      fontStyle: "normal",
      fontVariantCaps: "normal",
      fontVariantEastEsian: "normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: "normal",
      fontWeight: 400,
      color: "rgb(255, 137, 50)",
    },

    blockContent: {
      padding: "25px 125px",
      font:
        "normal normal normal 15px/1.875em avenir-lt-w01_35-light1475496,sans-serif",
      fontWeight: 400,

      color: "#0E1F58",
      textAlign: "center",
      /*  font-family:avenir-lt-w01_35-light1475496, sans-serif;
    font-size:15px;
    font-stretch:100%;
    font-style:normal;
    font-variant-caps:normal;
    font-variant-east-asian:normal;
    font-variant-ligatures:normal;
    font-variant-numeric:normal;
    font-weight:400;*/
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

const BlockImage = ({ background, clas, content }: any) => {
  const classes = useStyles();
  const style = !!content
    ? { display: "flex", justifyContent: "center", alignItems: "center" }
    : null;
  return (
    <div
      id={"land"}
      className={clas}
      style={{
        ...style,
        background: `url(${
          process.env.PUBLIC_URL + background
        }) no-repeat center center fixed`,

        backgroundSize: "cover",
      }}
    >
      {content}
    </div>
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
  const name: string = title;
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

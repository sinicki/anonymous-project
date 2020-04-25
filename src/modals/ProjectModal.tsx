import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { BlockDisplay, BlockType } from "../sharedComponents/Block";

const useStyles = makeStyles({
  modal: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ({
  open,
  handleClose,
  project,
}: {
  open: boolean;
  handleClose: any;
  project: { Name: string };
}) => {
  const classes = useStyles();
  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby="project-modal"
      aria-describedby="Modal presenting project details"
    >
      <BlockDisplay
        blocks={[
          {
            title: project.Name,
            type: BlockType.small,
            content: <div>Lala</div>,
          },
        ]}
      />
    </Modal>
  );
};

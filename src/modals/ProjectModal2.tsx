import React from "react";
import { Pie, PieChart } from "recharts";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { BlockDisplay, BlockSize, BlockType } from "../sharedComponents/Block";
import ThumbUpAlt from "@material-ui/icons/ThumbUpAlt";

const useStyles = makeStyles({
  modal: {
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
  project: any;
}) => {
  const classes = useStyles();
  console.log('project->')
  console.log(project);
  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby="project-modal"
      aria-describedby="Modal presenting project details"
    >
      <div style={{ maxWidth: "960px" }}>
        <BlockDisplay
          blocks={[
            {
              size: BlockSize.superSmall,
              title: "Amount Donated",
              type: BlockType.title,
              content: (
                <div>
                  <div>{project}</div>
                  <div
                    style={{
                      padding: "15px 0 0 0",
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </Modal>
  );
};

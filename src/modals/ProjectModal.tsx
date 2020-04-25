import React from "react";
import { PieChart, Pie } from "recharts";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { BlockDisplay, BlockType, BlockSize } from "../sharedComponents/Block";
import ThumbUpAlt from "@material-ui/icons/ThumbUpAlt";

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
  project: any;
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
            size: BlockSize.superSmall,
            title: <span style={{ padding: "50px" }}>{project.Name}</span>,
            type: BlockType.imageTitle,
            background:
              "https://cdn.pixabay.com/photo/2015/06/24/01/15/morning-819362_960_720.jpg",
            content: (
              <span
                style={{ position: "absolute", bottom: "5px", right: "5px" }}
              >
                <ThumbUpAlt />
              </span>
            ),
          },
          {
            size: BlockSize.superSmall,
            title: "Description",
            type: BlockType.title,
            content: project.Description,
          },
          {
            size: BlockSize.superSmall,
            title: "Finance",
            type: BlockType.title,
            content: (
              <div>
                <PieChart width={730} height={250}>
                  <Pie
                    data={[
                      {
                        name: "Group A",
                        value: 400,
                      },
                      {
                        name: "Group B",
                        value: 300,
                      },
                    ]}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={50}
                    fill="#8884d8"
                  />
                </PieChart>
              </div>
            ),
          },
        ]}
      />
    </Modal>
  );
};

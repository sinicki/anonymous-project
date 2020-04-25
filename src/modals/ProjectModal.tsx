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
              title: (
                <span
                  style={{
                    padding: "50px",
                    fontSize: "40px",
                    fontWeight: 800,
                  }}
                >
                  {project.name}
                </span>
              ),
              type: BlockType.imageTitle,
              background: project.image_url,
              content: (
                <span
                  style={{
                    position: "absolute",
                    bottom: "5px",
                    right: "5px",
                  }}
                >
                  <span
                    style={{
                      position: "relative",
                      bottom: "5px",
                      right: "5px",
                    }}
                  >
                    Votes: {project.votes_up}
                  </span>
                  <ThumbUpAlt />
                </span>
              ),
            },
            {
              size: BlockSize.superSmall,
              title: "Description",
              type: BlockType.title,
              content: (
                <div>
                  <div>{project.description}</div>
                  <div
                    style={{
                      padding: "15px 0 0 0",
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <span>NIP: {project.tax_id}</span>
                    <span>City: {project.city}</span>
                  </div>
                </div>
              ),
            },
            {
              size: project.amount_required
                ? BlockSize.small
                : BlockSize.superSmall,
              title: "Finance",
              type: BlockType.title,
              content: project.amount_required ? (
                <div style={{ display: "flex" }}>
                  <div style={{ width: "100%" }}>
                    <PieChart width={730} height={250}>
                      <Pie
                        data={[
                          {
                            name: "Required",
                            value: project.amount_required,
                          },
                          {
                            name: "Donated",
                            value: project.amount_donated,
                          },
                        ]}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={50}
                        fill="#8884d8"
                        label
                      />
                    </PieChart>
                  </div>
                  <div style={{ width: "100%" }}>
                    <span>Raised amount: {project.amount_donated}</span>
                    <span>Money required: {project.amount_required}</span>
                  </div>
                </div>
              ) : (
                <div>No Financial Data for this company</div>
              ),
            },
          ]}
        />
      </div>
    </Modal>
  );
};

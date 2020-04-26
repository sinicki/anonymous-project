import React, { useState } from "react";
import ProjectModal from "../../modals/ProjectModal";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export default (props) => {
  const [open, setOpen] = useState(false);

  let vote = props.needsFunding ? (
    <Button
      className={props.classes.voteButton}
      onClick={() => {
        console.log("Vote for " + props.itemComponentProps.name);
      }}
    >
      Vote
    </Button>
  ) : (
    <div></div>
  );

  return (
    <div
      onClick={() => {
        setOpen(true);
      }}
    >
      {props.itemComponentProps && (
        <ProjectModal
          open={open}
          project={props.itemComponentProps}
          handleClose={(ev) => {
            ev.stopPropagation();
            setOpen(false);
          }}
        />
      )}
      <Paper className={props.projectCard}>
        {JSON.stringify(props.itemComponentProps)}
        {vote}
      </Paper>
    </div>
  );
};

import React, { useState } from "react";
import Company from "./company";
import ProjectModal from "../../modals/ProjectModal";
import "./index.css";

export default (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => {
        setOpen(true);
      }}
      className="ProjectTile"
    >
      {props.element && (
        <ProjectModal
          open={open}
          project={props.element}
          handleClose={(ev) => {
            ev.stopPropagation();
            setOpen(false);
          }}
        />
      )}
      <p>Project Name: {props.element.name}</p>
      <p>Project Cost: {props.element.amount_required}</p>
      <Company
        Tax_id={props.element.tax_id}
      ></Company>
    </div>
  );
};

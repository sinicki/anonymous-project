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
      <p>Project Name: {props.element.Name}</p>
      <p>Project Description: {props.element.Description}</p>
      <p>Project Cost: {props.element.Cost}</p>
      <Company
        Name={props.element.companyName}
        Phone={props.element.companyPhone}
      ></Company>
    </div>
  );
};

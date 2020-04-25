import React from "react";
import Company from "./company";
import "./index.css";

export default (props) => {
  return (
    <div className="ProjectTile">
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

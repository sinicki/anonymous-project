import React from "react";
import "./index.css";
import FundDetail from "./fundDetail";

export default (props) => {
  return (
    <div className="FundView">
      <p className="grid-item-1">
        <FundDetail fundDetail={props.fundDetail}></FundDetail>
      </p>
      <img className="grid-item-2" src="finance_1920.jpg" />
    </div>
  );
};

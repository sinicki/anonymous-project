import React from "react";
import './index.css';
import Button from "@material-ui/core/Button";

export default (props) => {

    return  (
        <div>
          <p>{props.fundDetail.name}</p>
          <p>{props.fundDetail.description}</p>
          <p>{props.fundDetail.amount_donated}</p>
          <Button size="small" color="primary">
                Donate
          </Button>
        </div>
   )
}
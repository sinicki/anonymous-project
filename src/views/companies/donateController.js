import React, { Component } from "react";
import { FirebaseContext } from "../../firebase";
import FundView from "./fundView";

class DonateController extends Component {
  state = {
    loading: true,
    fundDetail: {},
  };

  componentDidMount() {
    let value = this.context;
    value.getFund(this.props.fundName).then((result) => {
      this.setState({
        loading: false,
        fundDetail: result,
      });
    });
  }

  render() {
    let projects = this.state.loading ? (
      <p>Loading</p>
    ) : (
      <FundView fundDetail={this.state.fundDetail}></FundView>
    );
    return <div>{projects}</div>;
  }
}

DonateController.contextType = FirebaseContext;

export default DonateController;

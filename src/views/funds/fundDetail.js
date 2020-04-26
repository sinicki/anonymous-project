import React, { Component } from "react";
import { FirebaseContext } from "../../firebase";
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import MaterialButton from "@material-ui/core/Button";
import Loader from "../../sharedComponents/Loader";
import { Route } from 'react-router-dom'
import ProjectModal from "../../modals/ProjectModal2";   

class FundDetail extends Component {
  state = {
    loading: true,
    fundDetail: {},
    showPopup: false
  };

  amount = 0;

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  componentDidMount() {
    let value = this.context;
    value.listenToDatabase(this.props.fundName, (res)=> {
        this.setState({
            loading: false,
            fundDetail: res,
          });
    })
  }

  donate = () => {
    let value = this.context;
    let currentUserEmail = value.getCurrentUser().email;
    value.addDonation({
      amount_donated: parseInt(this.amount),
      email: currentUserEmail,
      funds_id: this.props.fundName.toLowerCase(),
    });
  };

  render() {
    let toRender = this.state.loading ? (
      <Loader loading={true} children={<div></div>}></Loader>
    ) : (
      <div className={this.props.classes.firstRow}>
            <ProjectModal
                open={this.state.showPopup}
                handleClose={(ev) => {
                    ev.stopPropagation();
                    this.setState({
                        showPopup:false
                    });
                }}
                project={this.amount}
            />
        <div style={{ width: "100%", padding: "15px" }}>
          <Grid item xs={12} sm={6} className={this.props.classes.mainGrid}>
            <Typography variant="h6">
              {this.props.fundName.charAt(0).toUpperCase() +
                this.props.fundName.slice(1)}{" "}
              fund
            </Typography>
            <Typography variant="h6">
              Amount rest: {this.state.fundDetail.amount_donated}PLN
            </Typography>
            <Typography variant="h6">
              Total amount: {this.state.fundDetail.target_amount}PLN
            </Typography>
            <LinearProgress
              variant="determinate"
              color="secondary"
              value={50}
              className={this.props.classes.progress}
            />
            <TextField
              id="donation-amount"
              label="Amount"
              onChange={(event) => (this.amount = event.target.value)}
            />
            <Route render={({ history}) => (
                <MaterialButton
                onClick={() => {
                    this.donate();
                    this.setState({
                        showPopup:true
                    })

                    // history.push('/profile')
                }}
                className={this.props.classes.roundedButton}
                >
                Donate
                </MaterialButton>
            )} />
          </Grid>
        </div>
        <div
          style={{
            width: "100%",
            padding: "15px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} sm={6} className={""}>
            <CardMedia
              className={this.props.classes.picture}
              image={this.state.fundDetail.image_url}
              title={this.props.fundName}
            />
          </Grid>
        </div>
      </div>
    );
    return <div>{toRender}</div>;
  }
}

FundDetail.contextType = FirebaseContext;

export default FundDetail;

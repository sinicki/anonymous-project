import React, { Component } from "react";
import { FirebaseContext } from "../../firebase";
import Loader from '../../sharedComponents/Loader'
import Grid from "@material-ui/core/Grid";
import { ProjectCarousel } from "./projectCarousel";
import Project from './project'

class FundProjects extends Component {
  state = {
    loading: true,
    projectList: [],
  };

  componentDidMount() {
    let value = this.context;
    value.getAllProjects(this.props.fundName, this.props.funded).then((list) => {
      this.setState({
          loading: false,
          projectList: list,
      });
    }); 
  }

  render() {    
    let projects = this.state.loading ? (
        <Loader loading={true} children={<div></div>} ></Loader>
    ) : (
      <Grid item xs={12}>
        <ProjectCarousel
          items={this.state.projectList}
          ItemComponent={(props) => (
              <Project itemComponentProps = {props} projectCard = {this.props.classes.projectCard} needsFunding = {!this.props.funded} classes = {this.props.classes}></Project>
          )}
        />
      </Grid>
    );
    return <div>{projects}</div>;
  }
}

FundProjects.contextType = FirebaseContext;

export default FundProjects;
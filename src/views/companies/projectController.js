import React, { Component } from "react";
import { FirebaseContext } from "../../firebase";
import ProjectListController from "./ProjectListController";

class ProjectController extends Component {
  state = {
    loading: true,
    projectList: [],
  };

  componentDidMount() {
    let value = this.context;
    value.getAllProjects("lQbjexa1WjJBhQ9IU4v1").then((list) => {
      this.setState((prevState) => {
        return {
          loading: false,
          projectList: list,
        };
      });
    });
  }

  render() {
    let projects = this.state.loading ? (
      <p>Loading</p>
    ) : (
      <ProjectListController
        projectList={this.state.projectList}
      ></ProjectListController>
    );
    return <div>{projects}</div>;
  }
}

ProjectController.contextType = FirebaseContext;

export default ProjectController;

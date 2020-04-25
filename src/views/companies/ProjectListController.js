
import React , {Component} from 'react';
import Project from './project'
import './index.css';

class ProjectListController extends Component {

    state = {
        firstIndex: 0,
        lastIndex: 3
    }

    next = () => {
        this.setState((prevState => {
            return {
                firstIndex: prevState.lastIndex < this.props.projectList.length ? prevState.firstIndex + 1 : prevState.firstIndex,
                lastIndex: prevState.lastIndex < this.props.projectList.length ? prevState.lastIndex + 1 : prevState.lastIndex
            };
        }));
    }

    prev = () => {
        this.setState((prevState => {
            return {
                firstIndex: prevState.firstIndex > 0 ? prevState.firstIndex - 1 : prevState.firstIndex,
                lastIndex: prevState.firstIndex > 0 ? prevState.lastIndex - 1 : prevState.lastIndex
            };
        }));
    }

    render() {

        let projects = [];

        for (let index = this.state.firstIndex; index < this.state.lastIndex; index++) {
            projects.push(<Project element={this.props.projectList[index]} ></Project>)
        }

        return (
            <div>
                <div className="ProjectContainer">  
                    <button className="btn-inline" onClick={this.prev}>
                        <svg class="search__icon">
                            <use href="img/icons.svg#icon-triangle-left"></use>
                        </svg>         
                    </button>
                        {projects}
                    <button className="btn-inline" onClick={this.next}>
                    <svg class="search__icon">
                            <use href="img/icons.svg#icon-triangle-right"></use>
                        </svg>   
                    </button>
                </div>
            </div>
        )
    } 
}

export default ProjectListController;
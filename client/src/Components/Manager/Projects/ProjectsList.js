
  
import React, { Component }   from "react";
import { connect }            from "react-redux";
import { Link }               from "react-router-dom";

import { fetchProjects }       from "../../../Action/projects";


class ProjectsList extends Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  renderAdmin(project) {
      return (
        <div style={{ textAlign: "left" }}>
          <Link to={`projects/edit/${project._id}`} className="ui button primary">
            EDIT
          </Link>
          <Link
            to={`projects/delete/${project._id}`}
            className="ui button negative"
          >
            DELETE
          </Link>
        </div>
      );
  }

  renderList() {
    return this.props.projects.map((project) => {
      return (
        <div className="item">
          <div className="list-group list-group-flush " key={project._id}>
            <li className="list-group-item list-group-item-action">
              <h2 className="mb-1">
                <i className="icon camera" />
                <Link to={`/projects/${project._id}`}>
                {project.title}
                </Link>
              </h2>
              <p>{project.description}</p>
              {this.renderAdmin(project)}
            </li>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
   
      return (
        <div style={{ textAlign: "right" }}>
          <Link to={`projects/new`}>
            <button className="ui button primary">Create live project</button>
          </Link>
        </div>
      );
    
  }

  render() {
    return (
      <div className="ProjectsList">
        <div className="ui container">
          <h1>List of all project </h1>
          <div className="ui celled list">{this.renderList()}</div>
          {this.renderCreate()}
        </div>
      </div>
    );
  }

}


const mapStateToProps = (state) => {
  return {
    projects: Object.values(state.project),
  };
};


export default connect(mapStateToProps, { fetchProjects })(ProjectsList);

import React, { Component }   from "react";
import { connect }            from "react-redux";
import { Link }               from "react-router-dom";

import Modal                  from "../../Modal/Modal";
import history                from "../../../history";
import { fetchProject }        from "../../../Action/projects";
import { deleteProject }       from "../../../Action/projects";

class ProjectsDelete extends Component {

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  }


  renderAction() {
      const {id}=this.props.match.params;
    return (
      <React.Fragment>
        <button onClick={()=>this.props.deleteProject(id)} className="ui button negative"> Delete</button>
        <Link to={`projects`} className="ui button">
          cancel
        </Link>
      </React.Fragment>
    );
  }


  renderContent() {
    if (!this.props.project) {
      return "Are you sure you want to delete the project ?";
    }
    return `Are you sure you want to delete the project with title: ${this.props.project.title} ?`;
  }


  render() {
    return (
      <div>
        <Modal
          title="Delete project"
          content={this.renderContent()}
          actions={this.renderAction()}
          onDismiss={() => history.push("/admin/projects")}
        />
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    project: state.project[ownProps.match.params.id],
  };
};


export default connect(mapStateToProps, { fetchProject, deleteProject })(
  ProjectsDelete
);
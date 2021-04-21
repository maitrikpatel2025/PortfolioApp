import React, { Component }   from "react";
import { connect }            from "react-redux";
import { Link }               from "react-router-dom";

import Modal                  from "../../Modal/Modal";
import history                from "../../../history";
import { fetchMiniProject }        from "../../../Action/miniProjects";
import { deleteMiniProject }       from "../../../Action/miniProjects";

class MiniProjectsDelete extends Component {

  componentDidMount() {
    this.props.fetchMiniProject(this.props.match.params.id);
  }


  renderAction() {
      const {id}=this.props.match.params;
    return (
      <React.Fragment>
        <button onClick={()=>this.props.deleteMiniProject(id)} className="ui button negative"> Delete</button>
        <Link to={`admin/miniprojects`} className="ui button">
          cancel
        </Link>
      </React.Fragment>
    );
  }


  renderContent() {
    if (!this.props.miniprojects) {
      return "Are you sure you want to delete the Mini Project ?";
    }
    return `Are you sure you want to delete the Mini Project with title: ${this.props.miniprojects.title} ?`;
  }


  render() {
    return (
      <div>
        <Modal
          title="Delete project"
          content={this.renderContent()}
          actions={this.renderAction()}
          onDismiss={() => history.push("/admin/miniprojects")}
        />
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    miniprojects: state.miniProject[ownProps.match.params.id],
  };
};


export default connect(mapStateToProps, { fetchMiniProject, deleteMiniProject })(
  MiniProjectsDelete
);
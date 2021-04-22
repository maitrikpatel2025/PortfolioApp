import React, { Component }   from "react";
import { connect }            from "react-redux";
import { Link }               from "react-router-dom";

import Modal                  from "../../Modal/Modal";
import history                from "../../../history";
import { fetchSkill }        from "../../../Action/skills";
import { deleteSkill }       from "../../../Action/skills";

class SkillsDelete extends Component {

  componentDidMount() {
    this.props.fetchSkill(this.props.match.params.id);
  }


  renderAction() {
      const {id}=this.props.match.params;
    return (
      <React.Fragment>
        <button onClick={()=>this.props.deleteSkill(id)} className="ui button negative"> Delete</button>
        <Link to={`skills`} className="ui button">
          cancel
        </Link>
      </React.Fragment>
    );
  }


  renderContent() {
    if (!this.props.skill) {
      return "Are you sure you want to delete the skills ?";
    }
    return `Are you sure you want to delete the skills with title: ${this.props.skill.skills_title} ?`;
  }


  render() {
    return (
      <div>
        <Modal
          title="Delete skills"
          content={this.renderContent()}
          actions={this.renderAction()}
          onDismiss={() => history.push("/admin/skills")}
        />
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    skill: state.skill[ownProps.match.params.id],
  };
};


export default connect(mapStateToProps, { fetchSkill, deleteSkill })(
  SkillsDelete
);
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchProject } from "../../../Action/projects";
import { editProject } from "../../../Action/projects";
import ProjectsFrom from "./ProjectsForm";


class ProjectsEdit extends Component {


    onSubmit = (fromValues) => {
        this.props.editProject(this.props.match.params.id, fromValues)
    };
    componentDidMount() {
        this.props.fetchProject(this.props.match.params.id);
    }

    render() {
        return (
            <div style={{ padding: "40px" }} className="ProjectsEdit">
                <div className="ui container">
                    <h1>Edit your Projects </h1>
                </div>
                <ProjectsFrom initialValues={_.pick(this.props.projects, 'title', 'summary','other_details',"skills","tech_skills_logo","roles","team","start_date","end_date","git_link","website_link","duration")} onSubmit={this.onSubmit} button="Edit Project" />
            </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return { projects: state.project[ownProps.match.params.id] };
};


export default connect(mapStateToProps, { fetchProject, editProject })(
    ProjectsEdit
);
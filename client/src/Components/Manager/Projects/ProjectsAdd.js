import React, { Component } from "react";
import { connect } from "react-redux";

import { createProject } from "../../../Action/projects";

import ProjectsForm from "./ProjectsForm";



class ProjectAdd extends Component {

    onSubmit = (fromValues) => {
        console.log(fromValues)
        this.props.createProject(fromValues);
    };


    render() {
        return (
            <div style={{ padding: "40px" }} className="ProjectAdd">
                <div className="ui container">
                    <h1>Add Project </h1>
                </div>
                <ProjectsForm onSubmit={this.onSubmit} button="Add Projects" />
            </div>
        );
    }

}


export default connect(null, { createProject })(ProjectAdd);
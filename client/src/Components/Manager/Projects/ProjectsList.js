

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchProjects } from "../../../Action/projects";


class ProjectsList extends Component {

    componentDidMount() {
        this.props.fetchProjects();
    }

    renderAdmin(project) {
        return (
            <div className="ui two buttons">
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
                <div className="card">
                    <div className="content" key={project.title}>

                        <div className="header">

                            {project.title}

                        </div>
                        <p className="description">{project.summary}</p>
                        {this.renderAdmin(project)}

                    </div>
                </div>
            );
        });
    }

    renderCreate() {

        return (
            <div style={{ textAlign: "center", padding: "20px" }}>
                <Link to={`projects/new`}>
                    <button className="ui button purple">Add project</button>
                </Link>
            </div>
        );

    }

    render() {
        return (
            <div className="ProjectsList">
                <h1 style={{ textAlign: "center" }} >List of all project </h1>
                {this.renderCreate()}
                <div className="ui cards">{this.renderList()}</div>
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

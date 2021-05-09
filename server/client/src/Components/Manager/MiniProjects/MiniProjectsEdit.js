import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchMiniProject } from "../../../Action/miniProjects";
import { editMiniProject } from "../../../Action/miniProjects";
import MiniProjectsForm from "./MiniProjectsForm";



class MiniProjectsEdit extends Component {


    onSubmit = (fromValues) => {
        this.props.editMiniProject(this.props.match.params.id, fromValues)
    };
    componentDidMount() {
        this.props.fetchMiniProject(this.props.match.params.id);
    }

    render() {
        return (
            <div style={{ padding: "40px" }} className="ProjectsEdit">
                <div className="ui container">
                    <h1>Edit your Mini projects </h1>
                </div>
                <MiniProjectsForm initialValues={_.pick(this.props.miniprojects, 'title', 'description')} onSubmit={this.onSubmit} button="Edit Mini Project" />
            </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return { miniprojects: state.miniProject[ownProps.match.params.id] };
};


export default connect(mapStateToProps, { fetchMiniProject, editMiniProject })(
    MiniProjectsEdit
);
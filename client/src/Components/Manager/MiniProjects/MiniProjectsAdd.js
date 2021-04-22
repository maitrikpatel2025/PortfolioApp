import React, { Component } from "react";
import { connect } from "react-redux";

import { createMiniProject } from "../../../Action/miniProjects";

import MiniProjectsForm from "./MiniProjectsForm";



class MiniProjectAdd extends Component {

    onSubmit = (fromValues) => {
        console.log(fromValues)
        this.props.createMiniProject(fromValues);
    };


    render() {
        return (
            <div style={{ padding: "40px" }} className="Mini Project Add">
                <div className="ui container">
                    <h1>Create Mini Project </h1>
                </div>
                <MiniProjectsForm onSubmit={this.onSubmit} button="Add Mini Projects" />
            </div>
        );
    }

}


export default connect(null, { createMiniProject })(MiniProjectAdd);
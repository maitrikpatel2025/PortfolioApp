import React, { Component } from "react";
import { connect } from "react-redux";

import { createExperience } from "../../../Action/experience";

import ExperienceForm from "./ExperienceForm";




class ExperienceAdd extends Component {

    onSubmit = (fromValues) => {
        console.log(fromValues)
        this.props.createExperience(fromValues);
    };


    render() {
        return (
            <div style={{ padding: "40px" }} className="ExperienceAdd">
                <div className="ui container">
                    <h1>Add Experience</h1>
                </div>
                <ExperienceForm onSubmit={this.onSubmit} button="Add Experience" />
            </div>
        );
    }

}


export default connect(null, { createExperience })(ExperienceAdd);
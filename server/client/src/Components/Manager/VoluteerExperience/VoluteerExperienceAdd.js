import React, { Component } from "react";
import { connect } from "react-redux";

import { createVoluteerExperience } from "../../../Action/voluteerExperience";

import VoluteerExperienceForm from "./VoluteerExperienceForm";




class voluteerExperienceAdd extends Component {

    onSubmit = (fromValues) => {
        console.log(fromValues)
        this.props.createVoluteerExperience(fromValues);
    };


    render() {
        return (
            <div style={{ padding: "40px" }} className="voluteerExperienceAdd">
                <div className="ui container">
                    <h1>Add VoluteerExperience </h1>
                </div>
                <VoluteerExperienceForm onSubmit={this.onSubmit} button="Add VoluteerExperience" />
            </div>
        );
    }

}


export default connect(null, { createVoluteerExperience })(voluteerExperienceAdd);
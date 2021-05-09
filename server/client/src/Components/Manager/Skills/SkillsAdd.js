import React, { Component } from "react";
import { connect } from "react-redux";

import { createSkill } from "../../../Action/skills";
import SkillsForm from "./SkillsForm";





class SkillsAdd extends Component {

    onSubmit = (fromValues) => {
        console.log(fromValues)
        this.props.createSkill(fromValues);
    };


    render() {
        return (
            <div style={{ padding: "40px" }} className="Skills Add">
                <div className="ui container">
                    <h1>Add Skills</h1>
                </div>
                <SkillsForm onSubmit={this.onSubmit} button="Add Skills" />
            </div>
        );
    }

}


export default connect(null, { createSkill })(SkillsAdd);
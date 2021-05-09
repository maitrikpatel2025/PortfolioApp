import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchSkill } from "../../../Action/skills";
import { editSkill } from "../../../Action/skills";
import SkillsForm from "./SkillsForm";



class SkillsEdit extends Component {


    onSubmit = (fromValues) => {
        this.props.editSkill(this.props.match.params.id, fromValues)
    };
    componentDidMount() {
        this.props.fetchSkill(this.props.match.params.id);
    }

    render() {
        return (
            <div style={{ padding: "40px" }} className="ProjectsEdit">
                <div className="ui container">
                    <h1>Edit your Skills </h1>
                </div>
                <SkillsForm initialValues={_.pick(this.props.skill, 'skills_title', 'skills_list')} onSubmit={this.onSubmit} button="Edit skills" />
            </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return { skill: state.skill[ownProps.match.params.id] };
};


export default connect(mapStateToProps, { fetchSkill, editSkill })(
    SkillsEdit
);
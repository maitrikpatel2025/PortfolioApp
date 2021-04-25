import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchExperience} from "../../../Action/experience";
import { editExperience } from "../../../Action/experience";
import ExperienceForm from "./ExperienceForm";




class ExperiencesEdit extends Component {


    onSubmit = (fromValues) => {
        this.props.editExperience(this.props.match.params.id, fromValues)
    };
    componentDidMount() {
        this.props.fetchExperience(this.props.match.params.id);
    }

    render() {
        return (
            <div style={{ padding: "40px" }} className="Experience Edit">
                <div className="ui container">
                    <h1>Edit your Experiences </h1>
                </div>
                <ExperienceForm initialValues={_.pick(this.props.experience,"comp_name", "comp_position","comp_job_description", "comp_duration", "comp_start_date", "comp_end_date" )} onSubmit={this.onSubmit} button="Edit  Experiences" />
            </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return { experience: state.experience[ownProps.match.params.id] };
};


export default connect(mapStateToProps, { fetchExperience, editExperience })(
    ExperiencesEdit
);
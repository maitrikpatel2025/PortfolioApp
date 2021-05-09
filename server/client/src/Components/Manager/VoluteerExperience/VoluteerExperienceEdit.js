import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchVoluteerExperience } from "../../../Action/voluteerExperience";
import { editVoluteerExperience } from "../../../Action/voluteerExperience";
import VoluteerExperienceForm from "./VoluteerExperienceForm";




class voluteerExperiencesEdit extends Component {


    onSubmit = (fromValues) => {
        this.props.editVoluteerExperience(this.props.match.params.id, fromValues)
    };
    componentDidMount() {
        this.props.fetchVoluteerExperience(this.props.match.params.id);
    }

    render() {
        return (
            <div style={{ padding: "40px" }} className="ProjectsEdit">
                <div className="ui container">
                    <h1>Edit your voluteerExperiences </h1>
                </div>
                <VoluteerExperienceForm initialValues={_.pick(this.props.voluteerExperience,"comp_name", "comp_position", "comp_duration", "comp_start_date", "comp_end_date" )} onSubmit={this.onSubmit} button="Edit voluteer Experiences" />
            </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return { voluteerExperience: state.voluteerExperience[ownProps.match.params.id] };
};


export default connect(mapStateToProps, { fetchVoluteerExperience, editVoluteerExperience })(
    voluteerExperiencesEdit
);
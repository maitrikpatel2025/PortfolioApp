import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchCertification } from "../../../Action/certification";
import { editCertification } from "../../../Action/certification";
import CertificationsForm from "./CertificationsForm";




class CertificationsEdit extends Component {


    onSubmit = (fromValues) => {
        this.props.editCertification(this.props.match.params.id, fromValues)
    };
    componentDidMount() {
        this.props.fetchCertification(this.props.match.params.id);
    }

    render() {
        return (
            <div style={{ padding: "40px" }} className="ProjectsEdit">
                <div className="ui container">
                    <h1>Edit your certifications </h1>
                </div>
                <CertificationsForm initialValues={_.pick(this.props.certification, "cert_name","name_link","institute","institute_link","receive_date")} onSubmit={this.onSubmit} button="Edit certifications" />
            </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return { certification: state.certification[ownProps.match.params.id] };
};


export default connect(mapStateToProps, { fetchCertification, editCertification })(
    CertificationsEdit
);
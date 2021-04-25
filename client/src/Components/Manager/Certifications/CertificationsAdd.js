import React, { Component } from "react";
import { connect } from "react-redux";

import { createCertification } from "../../../Action/certification";

import CertificationsForm from "./CertificationsForm";




class CertificationAdd extends Component {

    onSubmit = (fromValues) => {
        console.log(fromValues)
        this.props.createCertification(fromValues);
    };


    render() {
        return (
            <div style={{ padding: "40px" }} className="CertificationAdd">
                <div className="ui container">
                    <h1>Add Certification </h1>
                </div>
                <CertificationsForm onSubmit={this.onSubmit} button="Add Certification" />
            </div>
        );
    }

}


export default connect(null, { createCertification })(CertificationAdd);
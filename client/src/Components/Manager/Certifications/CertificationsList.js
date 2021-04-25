

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchcertifications } from "../../../Action/certification";


class CertificationsList extends Component {

    componentDidMount() {
        this.props.fetchcertifications();
    }

    renderAdmin( certification) {
        return (
            <div className="ui two buttons">
                <Link to={`certifications/edit/${ certification._id}`} className="ui button primary">
                    EDIT
          </Link>
                <Link
                    to={`certifications/delete/${ certification._id}`}
                    className="ui button negative"
                >
                    DELETE
          </Link>
            </div>
        );
    }

    renderList() {
        return this.props. certifications.map(( certification) => {
            return (
                <div className="card">
                    <div className="content" key={ certification.cert_name}>

                        <div className="header">
                            <Link to={`/certifications/${ certification._id}`}>
                                { certification.cert_name}
                            </Link>
                        </div>
                        <p className="description">{ certification.institute}</p>
                        {this.renderAdmin( certification)}

                    </div>
                </div>
            );
        });
    }

    renderCreate() {

        return (
            <div style={{ textAlign: "center", padding: "20px" }}>
                <Link to={`certifications/new`}>
                    <button className="ui button purple">Add Certification</button>
                </Link>
            </div>
        );

    }

    render() {
        return (
            <div className="CertificationsList">
                <h1 style={{ textAlign: "center" }} >List of all Certification</h1>
                {this.renderCreate()}
                <div className="ui cards">{this.renderList()}</div>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return {
         certifications: Object.values(state.certification),
    };
};


export default connect(mapStateToProps, { fetchcertifications })(CertificationsList);



import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchVoluteerExperiences } from "../../../Action/voluteerExperience";


class VoluteerExperienceList extends Component {

    componentDidMount() {
        this.props.fetchVoluteerExperiences();
    }

    renderAdmin(voluteerExperience) {
        return (
            <div className="ui two buttons">
                <Link to={`voluteerexperience/edit/${voluteerExperience._id}`} className="ui button primary">
                    EDIT
          </Link>
                <Link
                    to={`voluteerexperience/delete/${voluteerExperience._id}`}
                    className="ui button negative"
                >
                    DELETE
          </Link>
            </div>
        );
    }

    renderList() {
        return this.props.voluteerExperiences.map((voluteerExperience) => {
            return (
                <div className="card">
                    <div className="content" key={voluteerExperience.comp_name}>

                        <div className="header">

                            {voluteerExperience.comp_name}

                        </div>
                        <p className="description">{voluteerExperience.comp_position}</p>
                        {this.renderAdmin(voluteerExperience)}

                    </div>
                </div>
            );
        });
    }

    renderCreate() {

        return (
            <div style={{ textAlign: "center", padding: "20px" }}>
                <Link to={`voluteerexperience/new`}>
                    <button className="ui button purple">Add voluteer Experience</button>
                </Link>
            </div>
        );

    }

    render() {
        return (
            <div className="VoluteerExperienceList">
                <h1 style={{ textAlign: "center" }} >List of all voluteer Experience</h1>
                {this.renderCreate()}
                <div className="ui cards">{this.renderList()}</div>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        voluteerExperiences: Object.values(state.voluteerExperience),
    };
};


export default connect(mapStateToProps, { fetchVoluteerExperiences })(VoluteerExperienceList);



import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchExperiences } from "../../../Action/experience";


class ExperienceList extends Component {

    componentDidMount() {
        this.props.fetchExperiences();
    }

    renderAdmin(experience) {
        return (
            <div className="ui two buttons">
                <Link to={`experience/edit/${experience._id}`} className="ui button primary">
                    EDIT
          </Link>
                <Link
                    to={`experience/delete/${experience._id}`}
                    className="ui button negative"
                >
                    DELETE
          </Link>
            </div>
        );
    }

    renderList() {
        return this.props.experiences.map((experience) => {
            return (
                <div className="card">
                    <div className="content" key={experience.comp_name}>

                        <div className="header">

                            {experience.comp_name}

                        </div>
                        <p className="description">{experience.comp_position}</p>
                        {this.renderAdmin(experience)}

                    </div>
                </div>
            );
        });
    }

    renderCreate() {

        return (
            <div style={{ textAlign: "center", padding: "20px" }}>
                <Link to={`experience/new`}>
                    <button className="ui button purple">Add  Experience</button>
                </Link>
            </div>
        );

    }

    render() {
        return (
            <div className="Experience List">
                <h1 style={{ textAlign: "center" }} >List of all  Experience</h1>
                {this.renderCreate()}
                <div className="ui cards">{this.renderList()}</div>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        experiences: Object.values(state.experience),
    };
};


export default connect(mapStateToProps, { fetchExperiences })(ExperienceList);



import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchskills } from "../../../Action/skills";


class SkillsList extends Component {

    componentDidMount() {
        this.props.fetchskills();
    }

    renderAdmin(skill) {
        return (
            <div className="ui two buttons">
                <Link to={`skills/edit/${skill._id}`} className="ui button primary">
                    EDIT
          </Link>
                <Link
                    to={`skills/delete/${skill._id}`}
                    className="ui button negative"
                >
                    DELETE
          </Link>
            </div>
        );
    }

    renderList() {
        return this.props.skills.map((skill) => {
            return (
                <div className="card">
                    <div className="content" key={skill.skills_title}>

                        <div className="header">
                            <Link to={`/skills/${skill._id}`}>
                                {skill.skills_title}
                            </Link>
                        </div>
                        <p className="description">{skill.skills_list}</p>
                        {this.renderAdmin(skill)}

                    </div>
                </div>
            );
        });
    }

    renderCreate() {

        return (
            <div style={{ textAlign: "center", padding: "20px" }}>
                <Link to={`skills/new`}>
                    <button className="ui button purple">Add skill</button>
                </Link>
            </div>
        );

    }

    render() {
        return (
            <div className="SkillsList">
                <h1 style={{ textAlign: "center" }} >List of all Skills </h1>
                {this.renderCreate()}
                <div className="ui cards">{this.renderList()}</div>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        skills: Object.values(state.skill),
    };
};


export default connect(mapStateToProps, { fetchskills })(SkillsList);

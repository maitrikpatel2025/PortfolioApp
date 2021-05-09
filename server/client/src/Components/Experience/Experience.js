import React, { Component } from 'react';
import { connect } from 'react-redux'
import dot from "../../Assets/dot.png"
import moment from 'moment'
import { fetchExperiences } from "../../Action/experience";

import './Experience.css'

class Experience extends Component {
    componentDidMount() {
        this.props.fetchExperiences();
    }

    renderExperienceList() {
        return this.props.experience.map((exp) => {
            return (
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <span className="badge"><img alt='/' src={dot}></img></span>
                    </div>
                    <div className="row justify-content-between expbox">
                        <div className="col-lg-6">
                            <div className="exp_card1" key={exp._id}>

                                <div className="card_header">

                                    {exp.comp_name}

                                </div>
                                <p className="card_intro">{exp.comp_position}</p>
                                <p className="card_intro">{moment(`${exp.comp_start_date}`).format('MMMM Do YYYY')}-{moment(`${exp.comp_end_date}`).format('MMMM Do YYYY')}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card_intro">{exp.comp_job_description}</div>
                        </div>
                    </div>
                </div>
            );
        });
    }
    render() {
        return (
            <div className="exp">
                <section className="layout1">
                    <div className="contianer">
                        <p className="project_tagline">Work Experiences</p>
                        <div className="row justify-content-start box timeline exper">
                            <div className="timeline">
                                {this.renderExperienceList()}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        experience: Object.values(state.experience),
    };
};


export default connect(mapStateToProps, { fetchExperiences })(Experience);
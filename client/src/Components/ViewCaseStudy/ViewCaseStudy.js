import React, { Component } from 'react';
import { connect } from "react-redux";

import { fetchProject } from "../../Action/projects";

import Button from '../Button/Button';
import './ViewCaseStudy.css';
import Footer from '../Footer/Footer';


class ViewCaseStudy extends Component {
    componentDidMount() {
        this.props.fetchProject(this.props.match.params.id);
    }

    render() {

        const { title, summary, skills, tech_skills_logo, duration, team, roles, other_details, image_url, git_link, website_link } = this.props.projects
        return (
            <section className="Home">
                <section className="layout1">
                    <div className="container" >
                        <div className="row justify-content-center box">
                            <div className="col-lg-6 content-center">
                                <div>
                                    <div className="header_project" >
                                        <div className="project_layout1">
                                            <div className="project_tagline_layout1">{title}</div>
                                        </div>
                                        <p className="project_intro_layout1">{summary}</p>
                                        <div className="row btn_layout1">

                                            {website_link === null ? " " : <a href={`${website_link}`} target="_blank" rel="noopener noreferrer">
                                                <Button Text="View Project" />
                                            </a>}

                                            {git_link === null ? " " : <a href={`${git_link}`} target="_blank" rel="noopener noreferrer">
                                                <Button Color Text="View Source Code" />
                                            </a>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 content-center">
                                <div>
                                    <span className="img_animat1">
                                        <img alt="laginsd" src={image_url} className="img-fluid animat1" />
                                    </span>
                                </div>
                            </div>
                            <div className="header_project header_view">
                                <p className="View_intro_layout1">{other_details}</p>
                            </div>
                        </div>
                        <div className="row role_box">
                            <div className="col-4 justify-content-center">
                                <p className="View_intro">Role</p>
                                {roles.map((role) => {
                                    return (
                                        <p className="View_intro_layout1" >{role}</p>
                                    );
                                })}
                            </div>
                            <div className="col-4 justify-content-center">
                                <p className="View_intro">Team</p>
                                {team.map((team) => {
                                    return (
                                        <p className="View_intro_layout1" >{team}</p>
                                    );
                                })}
                            </div>
                            <div className="col-4 justify-content-center">
                                <p className="View_intro">Duration</p>
                                <p className="View_intro_layout1" >{duration}</p>
                            </div>
                        </div>

                        <div className="row justify-content-center role_box">
                            <div className="col-3 justify-content-center">
                                <p className="View_intro">skills</p>
                                <div>
                                    {skills.map((skill) => {
                                        return (
                                            <p className="View_intro_layout1">{skill}</p>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="tech_layout1">
                            <div className="tech_tagline_layout1">Tools and Technologies used:</div>
                            <div className="row justify-content-center">
                                {tech_skills_logo.map((skill) => {
                                    return (
                                        <div className="column book_card">
                                            <i className={`cbp-ig-icon devicon-${skill}-plain colored`} ></i>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </section>);
    }
}
const mapStateToProps = (state, ownProps) => {
    return { projects: state.project[ownProps.match.params.id] };
};


export default connect(mapStateToProps, { fetchProject })(ViewCaseStudy);
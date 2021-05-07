import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import Button from '../Button/Button';

import { fetchProjects } from "../../Action/projects";

import './Projects.css'

class Projects extends Component {

    componentDidMount() {
        this.props.fetchProjects();
    }

    redernProjectsItems() {
        return this.props.projects.map((project) => {
            return (<div className="row renderProjectItem">
                <div className="col-lg-6 col-md-12">
                    <div className="header_project" key={project._id}>
                        <div className="project_layout1">
                            <div className="project_tagline_layout1">{project.title}</div>
                        </div>
                        <p className="project_intro_layout1">{project.summary}</p>
                        {project.skills.map((skill) => {
                            return (
                                <button type="text" className="project_skill">{skill}</button>
                            );
                        })}
                        <div className="row btn_project">
                            <Link to={`/works/projects/${project._id}`}>
                                <Button Color Text="View Case Study" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <span className="img_animat1">
                        <img alt="laginsd" src={project.image_url} className="img-fluid animat1" />
                    </span>
                </div>
            </div>)
        })
    }
    render() {
        return (<div className="Pojects">
            <section className="layout1">
                <div className="contianer">
                    <div className="row justify-content-center box">
                        <p className="project_tagline">Featured Projects</p>
                        {this.redernProjectsItems()}
                    </div>
                </div>
            </section>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        projects: Object.values(state.project),
    };
};


export default connect(mapStateToProps, { fetchProjects })(Projects);
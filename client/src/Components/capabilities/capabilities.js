import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchskills } from "../../Action/skills";
import { fetchcertifications } from "../../Action/certification";
import Footer from '../Footer/Footer';
import moment from 'moment'

import './Capabilities.css';

class Capabilities extends Component {
    componentDidMount() {
        this.props.fetchskills();
        this.props.fetchcertifications();
    }
    renderSkillList() {
        return this.props.skills.map((skill) => {
            return (
                <div className="row justify-content-start">
                    <div className="col column book_card">
                        <div className="cap_card1" key={skill.skills_title}>

                            <div className="cap_card_header">

                                {skill.skills_title}

                            </div>
                            {skill.skills_list.map((skill) => {
                                return <li className="cap_card_intro" key={skill}>{skill}</li>;
                            })}

                        </div>
                    </div>
                </div>
            );
        });
    }
    renderCapabilitiesList() {
        return this.props.certifications.map((Cert_detail) => {
            return (
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <span className="badge"><hr className="rounded" /></span>
                    </div>
                    <div className="row">
                        <div className="col m-4">
                            <div className="Name">
                                <a className="A7" href={Cert_detail.name_link} key={Cert_detail}>
                                    {Cert_detail.cert_name}
                                </a>
                &nbsp;&nbsp; - &nbsp;&nbsp;
                <a className="A8" href={Cert_detail.institute_link} key={Cert_detail}>
                                    {Cert_detail.institute}
                                </a>
                            </div>
                            <div className="Course">
                                <p className="A6" key={Cert_detail} >{moment(`${Cert_detail.receive_date}`).format('MMMM Do YYYY')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }
    render() {
        return (<div className="Capabilites">
            <section className="layout1">
                <div className="container">
                    <p className="project_tagline">Design &amp; Coding Capabilities</p>
                    <div className="row justify-content-center box">
                        {this.renderSkillList()}
                    </div>
                    <p className="cap_card_intro">* Indicates technologies familiar with/currently learning</p>
                </div>
                <div className="container">
                    <p className="project_tagline">Certifications</p>
                    <div className="row justify-content-center box">
                        <div className="timeline">
                            {this.renderCapabilitiesList()}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <p className="project_tagline">Awards</p>
                    <div className="row justify-content-center box">
                        <div className="col-lg-6">
                            <div className="exp_card1">

                                <div className="card_header">

                                    2021 Digital Health Hackathon Participant

                                </div>
                                <p className="card_intro">Seneca college
                                <br/>Feb 2021</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p className="card_intro">Problem Scenario(s): Enable organizations to verify health credentials for employees, students, customers, and visitors entering their site based on criteria specified by the organization. Privacy and integrity is central to the solution, and the digital wallet can allow individuals to maintain control of their personal health information and share it in a way that is secured, verifiable, and trusted. Participants can attempt to model processes to implement contact-tracing using digital health passports, to identify other individuals who accessed the same spaces/areas in a set period. Sponsors will provide instances and technical support for teams.</p>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>);
    }
}
const mapStateToProps = (state) => {
    return {
        skills: Object.values(state.skill),
        certifications: Object.values(state.certification),
    };
};


export default connect(mapStateToProps, { fetchskills, fetchcertifications })(Capabilities);
import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../Action/toggleWork'
import Projects from '../Projects/Projects';

import './SubNav.css'

class SubNav extends Component {
    state = {}
    render() {
        const {
            toggleProject,
            toggleMiniProject,
            toggleExperience,
            isProjectsOpen,
            isMiniProjectOpen,
            isExperienceOpen
        } = this.props;

        return (
            <div className="SubNav">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="menu">
                            <div className={`items  ${isProjectsOpen ? 'actived' : " "}`} onClick={toggleProject}>
                            PROJECTS
                            </div>
                            <div className={`items  ${isMiniProjectOpen ? "actived" : ''}`} onClick={toggleMiniProject}>
                            MINI PROJECTS
                            </div>
                            <div className={`items  ${isExperienceOpen ? "actived" : ''}`} onClick={toggleExperience}>
                            EXPERIENCE
                            </div>
                        </div>
                    </div>

                    {isProjectsOpen ? (
                        <Projects/>
                    ) : (
                        ''
                    )}
                    {isMiniProjectOpen ? (
                        <div>MINI PROJECTS</div>
                    ) : (
                        ''
                    )}
                    {isExperienceOpen ? (
                        <div>Expericence</div>
                    ) : (
                        ''
                    )}
                    
                </div>
            </div>);
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        isProjectsOpen: state.toggle.isProjectsOpen,
        isMiniProjectOpen: state.toggle.isMiniProjectOpen,
        isExperienceOpen: state.toggle.isExperienceOpen,
    };
};

export default connect(mapStateToProps, actions)(SubNav);
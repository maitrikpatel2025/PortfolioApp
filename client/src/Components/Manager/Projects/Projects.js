import React, { Component } from 'react';
import ProjectsAdd from './ProjectsAdd';
import ProjectsEdit from './ProjectsEdit';
import ProjectsForm from './ProjectsForm';

class Projects extends Component {
    state = {}
    render() {
        return (<div className="Projects">
            <div className="ui container">
                <h1>List of all Projects </h1>
             <ProjectsEdit/>
            </div>
        </div>);
    }
}

export default Projects;
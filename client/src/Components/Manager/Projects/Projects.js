import React, { Component } from 'react';

class Projects extends Component {
    state = {}
    render() {
        return (<div className="Projects">
            <div className="ui container">
                <h1>List of all Projects </h1>
                <div className="ui celled list">renderList()</div>
            </div>
        </div>);
    }
}

export default Projects;
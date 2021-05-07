import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchMiniProjects } from "../../Action/miniProjects";

import './MiniProjects.css'

class MiniProjects extends Component {
    componentDidMount() {
        this.props.fetchMiniProjects();
    }

    renderMiniProjectsList() {
        return this.props.miniprojects.map((miniproject) => {
            return (
                <div className="row justify-content-start">
                    <div className="col-lg-6">
                        <div className="miniproject_card1" key={miniproject.title}>

                            <div className="card_header">

                                {miniproject.title}

                            </div>
                            <p className="card_intro">{miniproject.description}</p>

                        </div>
                    </div>
                </div>
            );
        });
    }
    render() {
        return (
            <div className="MiniProject">
                <section className="layout1">
                    <div className="contianer">
                        <p className="project_tagline">Featured Mini Projects</p>
                        <div className="row justify-content-center box">
                            {this.renderMiniProjectsList()}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        miniprojects: Object.values(state.miniProject),
    };
};


export default connect(mapStateToProps, { fetchMiniProjects })(MiniProjects);
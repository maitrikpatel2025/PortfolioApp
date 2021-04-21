

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchMiniProjects } from "../../../Action/miniProjects";


class MiniProjectsList extends Component {

    componentDidMount() {
        this.props.fetchMiniProjects();
    }

    renderAdmin(miniproject) {
        return (
            <div className="ui two buttons">
                <Link to={`miniprojects/edit/${miniproject._id}`} className="ui button primary">
                    EDIT
          </Link>
                <Link
                    to={`miniprojects/delete/${miniproject._id}`}
                    className="ui button negative"
                >
                    DELETE
          </Link>
            </div>
        );
    }

    renderList() {
        return this.props.miniprojects.map((miniproject) => {
            return (
                <div className="card">
                    <div className="content" key={miniproject._id}>

                        <div className="header">
                            <Link to={`/miniprojects/${miniproject._id}`}>
                                {miniproject.title}
                            </Link>
                        </div>
                        <p className="description">{miniproject.description}</p>
                        {this.renderAdmin(miniproject)}

                    </div>
                </div>
            );
        });
    }

    renderCreate() {

        return (
            <div style={{ textAlign: "center", padding: "20px" }}>
                <Link to={`miniprojects/new`}>
                    <button className="ui button purple">Add Mini project</button>
                </Link>
            </div>
        );

    }

    render() {
        return (
            <div className="ProjectsList">
                <h1 style={{ textAlign: "center" }} >List of all Mini Project </h1>
                {this.renderCreate()}
                <div className="ui cards">{this.renderList()}</div>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        miniprojects: Object.values(state.miniProject),
    };
};


export default connect(mapStateToProps, { fetchMiniProjects })(MiniProjectsList);

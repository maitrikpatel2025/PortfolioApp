import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Modal from "../../Modal/Modal";
import history from "../../../history";
import { fetchExperience } from "../../../Action/experience";
import { deleteExperience } from "../../../Action/experience";

class ExperienceDelete extends Component {

    componentDidMount() {
        this.props.fetchExperience(this.props.match.params.id);
    }


    renderAction() {
        const { id } = this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteExperience(id)} className="ui button negative"> Delete</button>
                <Link to={`admin/experience`} className="ui button">
                    cancel
        </Link>
            </React.Fragment>
        );
    }


    renderContent() {
        if (!this.props.experiences) {
            return "Are you sure you want to delete the  Experience ?";
        }
        return `Are you sure you want to delete the  Experience with title: ${this.props.experiences.comp_name} ?`;
    }


    render() {
        return (
            <div>
                <Modal
                    title="Delete  Experience"
                    content={this.renderContent()}
                    actions={this.renderAction()}
                    onDismiss={() => history.push("/admin/experience")}
                />
            </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        experiences: state.experience[ownProps.match.params.id],
    };
};


export default connect(mapStateToProps, { fetchExperience, deleteExperience })(
    ExperienceDelete
);
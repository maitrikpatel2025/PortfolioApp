import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Modal from "../../Modal/Modal";
import history from "../../../history";
import { fetchVoluteerExperience } from "../../../Action/voluteerExperience";
import { deleteVoluteerExperience } from "../../../Action/voluteerExperience";

class VoluteerExperienceDelete extends Component {

    componentDidMount() {
        this.props.fetchVoluteerExperience(this.props.match.params.id);
    }


    renderAction() {
        const { id } = this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteVoluteerExperience(id)} className="ui button negative"> Delete</button>
                <Link to={`admin/voluteerexperience`} className="ui button">
                    cancel
        </Link>
            </React.Fragment>
        );
    }


    renderContent() {
        if (!this.props.voluteerExperiences) {
            return "Are you sure you want to delete the Voluteer Experience ?";
        }
        return `Are you sure you want to delete the Voluteer Experience with title: ${this.props.voluteerExperiences.comp_name} ?`;
    }


    render() {
        return (
            <div>
                <Modal
                    title="Delete Voluteer Experience"
                    content={this.renderContent()}
                    actions={this.renderAction()}
                    onDismiss={() => history.push("/admin/voluteerexperience")}
                />
            </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        VoluteerExperiences: state.voluteerExperience[ownProps.match.params.id],
    };
};


export default connect(mapStateToProps, { fetchVoluteerExperience, deleteVoluteerExperience })(
    VoluteerExperienceDelete
);
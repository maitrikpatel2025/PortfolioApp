import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Modal from "../../Modal/Modal";
import history from "../../../history";
import { fetchTestimonial } from "../../../Action/testimonial";
import { deleteTestimonial } from "../../../Action/testimonial";

class testimonialDelete extends Component {

    componentDidMount() {
        this.props.fetchTestimonial(this.props.match.params.id);
    }


    renderAction() {
        const { id } = this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteTestimonial(id)} className="ui button negative"> Delete</button>
                <Link to={`admin/testimonial`} className="ui button">
                    cancel
        </Link>
            </React.Fragment>
        );
    }


    renderContent() {
        if (!this.props.testimonials) {
            return "Are you sure you want to delete the testimonial ?";
        }
        return `Are you sure you want to delete the testimonial with title: ${this.props.testimonials.testi_name} ?`;
    }


    render() {
        return (
            <div>
                <Modal
                    title="Delete  testimonial"
                    content={this.renderContent()}
                    actions={this.renderAction()}
                    onDismiss={() => history.push("/admin/testimonial")}
                />
            </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        testimonials: state.testimonial[ownProps.match.params.id],
    };
};


export default connect(mapStateToProps, { fetchTestimonial, deleteTestimonial })(
    testimonialDelete
);
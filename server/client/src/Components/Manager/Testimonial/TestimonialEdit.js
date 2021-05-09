import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchTestimonial } from "../../../Action/testimonial";
import { editTestimonial } from "../../../Action/testimonial";
import TestimonialForm from "./TestimonialForm";




class TestimonialEdit extends Component {


    onSubmit = (fromValues) => {
        this.props.editTestimonial(this.props.match.params.id, fromValues)
    };
    componentDidMount() {
        this.props.fetchTestimonial(this.props.match.params.id);
    }

    render() {
        return (
            <div style={{ padding: "40px" }} className="Testimonial Edit">
                <div className="ui container">
                    <h1>Edit your Testimonial </h1>
                </div>
                <TestimonialForm initialValues={_.pick(this.props.testimonial,"testi_name", "testi_linkedin_link","testi_message", "testi_profession", "receive_date" )} onSubmit={this.onSubmit} button="Edit  Testimonial" />
            </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return { testimonial: state.testimonial[ownProps.match.params.id] };
};


export default connect(mapStateToProps, { fetchTestimonial, editTestimonial })(
    TestimonialEdit
);
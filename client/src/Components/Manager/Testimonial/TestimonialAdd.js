import React, { Component } from "react";
import { connect } from "react-redux";

import { createTestimonial } from "../../../Action/testimonial";

import TestimonialForm from "./TestimonialForm";


class TestimonialAdd extends Component {

    onSubmit = (fromValues) => {
        console.log(fromValues)
        this.props.createTestimonial(fromValues);
    };


    render() {
        return (
            <div style={{ padding: "40px" }} className="TestimonialAdd">
                <div className="ui container">
                    <h1>Add Testimonial</h1>
                </div>
                <TestimonialForm onSubmit={this.onSubmit} button="Add Testimonial" />
            </div>
        );
    }

}


export default connect(null, { createTestimonial })(TestimonialAdd);
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { connect } from "react-redux";
import moment from 'moment'

import { fetchTestimonials } from "../../Action/testimonial";

import "./TestimonialCarousel.css"

class TestimonialCarousel extends Component {
    componentDidMount() {
        this.props.fetchTestimonials();
    }

    renderList() {
        return this.props.testimonials.map((testimonial) => {
            return (

                <Carousel.Item interval={500}>
                    <div key={testimonial._id}>
                        <span>&quot;{testimonial.testi_message}&quot;</span>
                        <span >

                            {testimonial.testi_name}

                        </span>
                        <span> {testimonial.testi_profession}</span>
                        <span> {moment(`${testimonial.receive_date}`).format('MMMM Do YYYY')}</span>
                    </div>
                </Carousel.Item>

            );
        });
    }

    render() {
        const renderRightIcon = () => {
            return (
                <div className="renderRightIcon">
                    <i className="black angle right icon"></i>
                </div>
            )
        }
        const renderLeftIcon = () => {
            return (
                <div className="renderLeftIcon">
                    <i className="black angle left icon"></i>
                </div>
            )
        }
        return (
            <div className="Carousel">
                <Carousel nextIcon={renderRightIcon()} prevIcon={renderLeftIcon()}>
                    {this.renderList()}
                </Carousel>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        testimonials: Object.values(state.testimonial),
    };
};

export default connect(mapStateToProps, { fetchTestimonials })(TestimonialCarousel);

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
                    <div classname="coroselItem" key={testimonial._id}>
                        <h1 className="testi_message" >&quot;{testimonial.testi_message}&quot;</h1>
                        <a href={testimonial.testi_linkedin_link}>
                        <p className="testi_name">
                            {testimonial.testi_name}
                        </p>
                        </a>
                        <p className="testi_profession"> {testimonial.testi_profession}</p>
                        <p className="testi_profession"> {moment(`${testimonial.receive_date}`).format('MMMM Do YYYY')}</p>
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
                <div className="row Item">
                <Carousel nextIcon={renderRightIcon()} prevIcon={renderLeftIcon()} indicators={false}>
                    {this.renderList()}
                </Carousel>
                </div>
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

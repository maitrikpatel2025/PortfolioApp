

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchTestimonials } from "../../../Action/testimonial";


class TestimonialList extends Component {

    componentDidMount() {
        this.props.fetchTestimonials();
    }

    renderAdmin(testimonial) {
        return (
            <div className="ui two buttons">
                <Link to={`testimonial/edit/${testimonial._id}`} className="ui button primary">
                    EDIT
          </Link>
                <Link
                    to={`testimonial/delete/${testimonial._id}`}
                    className="ui button negative"
                >
                    DELETE
          </Link>
            </div>
        );
    }

    renderList() {
        return this.props.testimonials.map((testimonial) => {
            return (
                <div className="card">
                    <div className="content" key={testimonial.testi_name}>

                        <div className="header">

                            {testimonial.testi_name}

                        </div>
                        <p className="description">{testimonial.testi_profession}</p>
                        {this.renderAdmin(testimonial)}

                    </div>
                </div>
            );
        });
    }

    renderCreate() {

        return (
            <div style={{ textAlign: "center", padding: "20px" }}>
                <Link to={`testimonial/new`}>
                    <button className="ui button purple">Add Testimonial</button>
                </Link>
            </div>
        );

    }

    render() {
        return (
            <div className="Testimonial List">
                <h1 style={{ textAlign: "center" }} >List of all Testimonial</h1>
                {this.renderCreate()}
                <div className="ui cards">{this.renderList()}</div>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return {
       testimonials: Object.values(state.testimonial),
    };
};


export default connect(mapStateToProps, { fetchTestimonials })(TestimonialList);

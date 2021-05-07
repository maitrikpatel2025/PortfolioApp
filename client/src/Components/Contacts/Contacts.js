import React, { Component } from 'react';
import './Contacts.css';
import { Field, reduxForm } from "redux-form";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createContact } from "../../Action/contacts";
import Footer from '../Footer/Footer';


class Contacts extends Component {
    state = {}
    redernInput = ({ input, label }) => {

        return (
            <div className="input">
                <input className="field_input" placeholder={label} type="text" {...input} autoComplete="off" />
            </div>
        );

    };
    redernTextarea = ({ input, label }) => {

        return (
            <div >
                <textarea className="field_text" placeholder={label} {...input} autoComplete="off" />
            </div>
        );

    };

    onSubmit = (fromValues) => {
        console.log(fromValues);
        this.props.createContact(fromValues)
    };

    render() {
        return (<div className="Contact">
            <section className="layout1">
                <div className="contianer">
                    <div className="row justify-content-center">
                        <div className="col">
                            <h1 className="project_tagline">How Can I Help You?</h1>
                            <p className="contact_intro_layout1"> If you have a project that you want to carry out, do not hesitate and tell me.</p>
                            <form
                                onSubmit={this.props.handleSubmit(this.onSubmit)}
                                className="From_Contact"
                            >
                                <Field
                                    name="cont_name"
                                    component={this.redernInput}
                                    label="Name"
                                />
                                <Field
                                    name="cont_email"
                                    component={this.redernInput}
                                    label="Email"
                                />
                                <Field
                                    name="cont_message"
                                    component={this.redernTextarea}
                                    label="Message"
                                />
                                <button className="ui primary button" type="submit">Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>);
    }
}
export default compose(
    connect(null,{createContact}),
    reduxForm({ form: 'contact' })
)(Contacts);

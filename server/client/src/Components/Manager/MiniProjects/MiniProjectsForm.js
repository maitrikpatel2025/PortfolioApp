import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";


class MiniProjectsForm extends Component {


    redernInput = ({ input, label }) => {

        const mystyle = {
            paddingBottom: "10px",
            fontSize: "20px",
        };

        return (
            <div className="field">
                <label style={mystyle}>{label} </label>
                <input {...input} autoComplete="off" />
            </div>
        );

    };

    redernTextarea = ({ input, label }) => {
        const fieldError = `field`;
        const mystyle = {
            paddingBottom: "10px",
            fontSize: "20px",
        };

        return (
            <div className={fieldError}>
                <label style={mystyle}>{label} </label>
                <textarea {...input} autoComplete="off" />
            </div>
        );

    };

    onSubmit = (fromValues) => {
        console.log(fromValues);
        this.props.onSubmit(fromValues);
    };


    render() {

        return (
            <div style={{ padding: "40px" }} className="StreamForm">

                <div className="Form">
                    <form
                        onSubmit={this.props.handleSubmit(this.onSubmit)}
                        className="ui form error"
                    >
                        <Field
                            name="title"
                            component={this.redernInput}
                            label="Title"
                        />
                        <Field
                            name="description"
                            component={this.redernTextarea}
                            label="description"
                        />
            
                        <button className="ui right floated purple button" type="submit" >{this.props.button}</button>
                    </form>
                </div>
            </div>
        );
    }

}

const validate = (formValues) => {
    const error = {};
    if (!formValues.title) {
        error.title = "You must enter a title";
    }
    if (!formValues.description) {
        error.description = "You must enter a description";
    }
    return error;
};


export default reduxForm({
    form: "MiniProjectsForm",
    validate
})(MiniProjectsForm);
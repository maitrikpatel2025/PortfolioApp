import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import TextField from '@material-ui/core/TextField';


class ExperienceForm extends Component {


    renderDateTimePicker = ({ input: { onChange, value }, label }) => {
        const mystyle = {
            paddingBottom: "10px",
            fontSize: "20px",
        };
        return (
            <div className="field">
                <label style={mystyle}>{label} </label>
                <TextField
                    id="date"
                    type="date"
                    onChange={onChange}
                    defaultValue={!value ? null : new Date(value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
        )
    }

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
                            name="comp_name"
                            component={this.redernInput}
                            label="Company Name"
                        />
                        <Field
                            name="comp_position"
                            component={this.redernInput}
                            label="Postion Title"
                        />
                        <Field
                            name="comp_job_description"
                            component={this.redernTextarea}
                            label="Job description"
                        />
                        <Field
                            name="comp_start_date"
                            component={this.renderDateTimePicker}
                            label="Start Date"
                        />
                        <Field
                            name="comp_end_date"
                            component={this.renderDateTimePicker}
                            label="End Date"
                        />
                        <Field
                            name="comp_duration"
                            component={this.redernInput}
                            label="Duration"
                        />
                        <br />


                        <button className="ui right floated purple button" type="submit" >{this.props.button}</button>
                    </form>
                </div>
            </div>
        );
    }

}

const validate = (formValues) => {
    const error = {};
    if (!formValues.comp_name) {
        error.comp_name = "You must enter a title";
    }
    if (!formValues.comp_duration) {
        error.comp_duration = "You must enter a description";
    }
    return error;
};


export default reduxForm({
    form: "ExperienceForm",
    validate
})(ExperienceForm);
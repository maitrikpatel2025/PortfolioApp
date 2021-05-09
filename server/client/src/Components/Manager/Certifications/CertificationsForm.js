import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import TextField from '@material-ui/core/TextField';


class CertificationForm extends Component {



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
                            name="cert_name"
                            component={this.redernInput}
                            label="Certification Name"
                        />
                        <Field
                            name="name_link"
                            component={this.redernInput}
                            label="Certification Link"
                        />
                        <Field
                            name="institute"
                            component={this.redernInput}
                            label="Institute Name"
                        />
                        <Field
                            name="institute_link"
                            component={this.redernInput}
                            label="Institute Link"
                        />
                        <Field
                            name="receive_date"
                            component={this.renderDateTimePicker}
                            label="Recevie Date"
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
    if (!formValues.cert_name) {
        error.cert_name = "You must enter a title";
    }
    if (!formValues.institute) {
        error.institute = "You must enter a description";
    }
    if (!formValues.receive_date) {
        error.receive_date = "You must enter a description";
    }
    return error;
};


export default reduxForm({
    form: "CertificationForm",
    validate
})(CertificationForm);
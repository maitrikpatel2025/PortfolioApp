import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import TextField from '@material-ui/core/TextField';


class TestimonialForm extends Component {


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
                            name="testi_name"
                            component={this.redernInput}
                            label="Name"
                        />
                        <Field
                            name="testi_linkedin_link"
                            component={this.redernInput}
                            label="Linkedin link"
                        />
                        <Field
                            name="testi_message"
                            component={this.redernTextarea}
                            label="Message"
                        />
                        <Field
                            name="testi_profession"
                            component={this.redernInput}
                            label="Profession"
                        />
                        <Field
                            name="receive_date"
                            component={this.renderDateTimePicker}
                            label="receive date"
                        />
                    
                        <br />


                        <button className="ui right floated purple button" type="submit" >{this.props.button}</button>
                    </form>
                </div>
            </div>
        );
    }

}


export default reduxForm({
    form: "TestimonialForm",
})(TestimonialForm);
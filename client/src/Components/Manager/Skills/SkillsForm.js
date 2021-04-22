import React, { Component } from "react";
import { Field, FieldArray, reduxForm } from "redux-form";


class SkillsForm extends Component {


    renderHobbies = ({ fields, label }) => {
        const mystyle = {
            paddingBottom: "10px",
            fontSize: "20px",
        };
        return (<div className="field grey">
            <label style={mystyle}>{label}</label>
            <button className="ui right floated primary button" onClick={() => fields.push()}>Add {label}</button>
            <div className="row">
                {fields.map((name, index) =>
                    <div className="col-md-6" key={index}>
                        <Field
                            name={name}
                            type="text"
                            component={this.redernInput}
                            label={`${label} #${index + 1}`} />
                        <button
                            className="ui right floated red button"
                            onClick={() => fields.remove(index)} >Delete {label}</button>

                    </div>
                )}
            </div>
        </div>)
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
            <div style={{ padding: "40px" }} className="Skills Form">

                <div className="Form">
                    <form
                        onSubmit={this.props.handleSubmit(this.onSubmit)}
                        className="ui form error"
                    >
                        <Field
                            name="skills_title"
                            component={this.redernInput}
                            label="skills Title"
                        />
                        <FieldArray
                            name="skills_list"
                            component={this.renderHobbies}
                            label="skills"
                        />
                        <br/>
                        <br/>
                        <br/>
                        <button className="ui right floated purple button" type="submit" >{this.props.button}</button>
                    </form>
                </div>
            </div>
        );
    }

}

const validate = (formValues) => {
    const error = {};
    if (!formValues.skills_title) {
        error.skills_title = "You must enter a title";
    }

    return error;
};


export default reduxForm({
    form: "SkillsForm",
    validate
})(SkillsForm);
import React, { Component } from "react";
import { Field, FieldArray, formValues, reduxForm } from "redux-form";
import TextField from '@material-ui/core/TextField';
import Dropzone from 'react-dropzone'
import DropZoneField from "../../imageUpload/DropzoneField";


const imageIsRequired = (value) => (!value ? "Required" : undefined);
class ProjectsForm extends Component {
    state = { imageFile: [] };

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



    onSubmit = (formValues) => {
        const fd = new FormData();
        fd.append("imageFile", formValues.image_url.file);
        this.props.onSubmit(formValues);
    };

    handleOnDrop = (newImageFile, onChange) => {
        const imageFile = {
          file: newImageFile[0],
          name: newImageFile[0].name,
          preview: URL.createObjectURL(newImageFile[0]),
          size: newImageFile[0].size
        };
    
        this.setState({ imageFile: [imageFile] }, () => onChange(imageFile));
      };
    
    render() {
        return (
            <div style={{ padding: "40px" }} className="StreamForm">

                <div className="Form">
                    <form
                        onSubmit={this.props.handleSubmit(this.onSubmit)}
                        className="ui form error"
                        enctype='multipart/form-data'
                    >
                        <Field
                            name="title"
                            component={this.redernInput}
                            label="Title"
                        />
                        <Field
                            name="summary"
                            component={this.redernTextarea}
                            label="Summary"
                        />
                        <Field
                            name="other_details"
                            component={this.redernTextarea}
                            label="Other Details"
                        />
                        <Field
                            name="start_date"
                            component={this.renderDateTimePicker}
                            label="Start date"
                        />
                        <Field
                            name="end_date"
                            component={this.renderDateTimePicker}
                            label="End date"
                        />
                        <br />
                        <FieldArray
                            name="skills"
                            component={this.renderHobbies}
                            label="skills"
                        />
                        <FieldArray
                            name="tech_skills_logo"
                            component={this.renderHobbies}
                            label="Tech Skills Logo"
                        />
                        <FieldArray
                            name="roles"
                            component={this.renderHobbies}
                            label="Roles"
                        />
                        <FieldArray
                            name="team"
                            component={this.renderHobbies}
                            label="Team Member"
                        />
                        <Field
                            name="git_link"
                            component={this.redernInput}
                            label="Git Link"
                        />
                        <Field
                            name="website_link"
                            component={this.redernInput}
                            label="Web Link"
                        />
                        <Field
                            name="image_url"
                            component={DropZoneField}
                            type="file"
                            imagefile={this.state.imageFile}
                            handleOnDrop={this.handleOnDrop}
                            validate={[imageIsRequired]}
                        />
                        <Field
                            name="duration"
                            component={this.redernInput}
                            label="duration"
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
    if (!formValues.summary) {
        error.description = "You must enter a description";
    }
    if (!formValues.duration) {
        error.duration = "You must enter a description";
    }
    return error;
};


export default reduxForm({
    form: "ProjectsForm",
    validate
})(ProjectsForm);
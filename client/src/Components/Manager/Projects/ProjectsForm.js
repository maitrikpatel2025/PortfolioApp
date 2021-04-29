import React, { Component } from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import TextField from '@material-ui/core/TextField';
import Dropzone from 'react-dropzone'





class ProjectsForm extends Component {

    renderFile = ({ input, label, dataAllowedFileExtensions }) => {
        const mystyle = {
            paddingBottom: "10px",
            fontSize: "20px",
        };
        const onInputChange = (e) => {
            e.preventDefault();
            const files = [...e.target.files];
            input.onChange(files[0]);
        };
        return (
            <div className="field">
                <label style={mystyle}>{label}</label>
                <input type="file"
                    onChange={onInputChange}
                    data-allowed-file-extensions={dataAllowedFileExtensions} />
            </div>
        )
    }

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

    onSubmit = (fromValues) => {
        console.log(fromValues);
        this.props.onSubmit(fromValues);
    };


    render() {

        const FILE_FIELD_NAME = 'files';

        const renderDropzoneInput = (field) => {
            const files = field.input.value;
            return (
                <div>
                    <Dropzone
                        name={field.name}
                        onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}
                    >
                        <div>Try dropping some files here, or click to select files to upload.</div>
                    </Dropzone>
                    {field.meta.touched &&
                        field.meta.error &&
                        <span className="error">{field.meta.error}</span>}
                    {files && Array.isArray(files) && (
                        <ul>
                            { files.map((file, i) => <li key={i}>{file.name}<img src={file.preview} /></li>)}
                        </ul>
                    )}
                </div>
            );
        }
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
                        <label>image</label>
                        <Field
                            name="image_url"
                            component={this.renderDropzoneInput}
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
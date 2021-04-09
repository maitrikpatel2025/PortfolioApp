import React, { Component } from 'react';
import { reduxForm } from "redux-form";
import DateInput from '../../ReduxFormUI/DateInput/DateInput';
import FieldArrayInput from '../../ReduxFormUI/FieldArrayInput/FieldArrayInput';
import FieldInput from '../../ReduxFormUI/FieldInput/FieldInput';
import TextArea from '../../ReduxFormUI/TextArea/TextArea';

class ProjectsForm extends Component {
    state = {}
    onSubmit = (formValues) => {
        console.log(this.props)
        
      };
    render() {
        return (
            <div className="ProjectsForm">
                <form className="form-group"  onSubmit={this.onSubmit} >
                    <FieldInput Name="title" Label="Title"  />
                    <TextArea Name="summary" Label="Summary"  Row={4} />
                    <TextArea Name="other_details" Label="Other Details"  Row={4} />
                    <DateInput Name="start_date" Label="Start Date" />
                    <DateInput Name="end_date" Label="End Date" />
                    <FieldInput Name="duration" Label="Duration"  />
                    <FieldArrayInput Name="skillS" Label="skills" />
                    <FieldArrayInput Name="roles" Label="roles" />
                    <FieldArrayInput Name="team" Label="team" />
                    <FieldArrayInput Name="tech_skills_logo" Label="Skill_icon" />
                    <FieldInput Name="git_link" Label="Github Link"  />
                    <FieldInput Name="website_link" Label="Website link"  />

                    <button className="ui button primary">onSubmit</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: "ProjectsForm",
})(ProjectsForm);

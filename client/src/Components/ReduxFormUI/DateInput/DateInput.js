import React, { Component } from "react";
import { Field } from "redux-form";
import TextField from '@material-ui/core/TextField';

class DateInput extends Component {


    redernDate = ({ label }) => {
        return (

            <div>
                <TextField
                    id="date"
                    label={label}
                    type="date"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
        );

    };

    render() {
        return (
            <div style={{ padding: "10px" }} >
                <Field
                    name={this.props.Name}
                    label={this.props.Label}
                    component={this.redernDate}
                    
                />
            </div>
        );
    }

}



export default DateInput;
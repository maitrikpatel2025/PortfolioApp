import React, { Component } from "react";
import { Field } from "redux-form";


class FieldInput extends Component {


    redernInput = ({ input, label }) => {
        return (

            <div>
                <label>{label}</label>
                <input
                    className="form-control"

                    {...input}
                />
            </div>
        );

    };

    render() {
        return (
            <div style={{ padding: "10px" }} >
                <Field
                    name={this.props.Name}
                    component={this.redernInput}
                    label={this.props.Label}
                />
            </div>
        );
    }

}



export default FieldInput;
import React, { Component } from "react";
import { Field } from "redux-form";

class TextArea extends Component {


    redernText = ({ input, label }) => {
        return (

            <div>
                <label>{label}</label>
                <textarea
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
                    component={this.redernText}
                    label={this.props.Label}
                />
            </div>
        );
    }

}



export default TextArea;
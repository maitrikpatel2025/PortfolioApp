import React from 'react'

import { Field, FieldArray } from 'redux-form'


const renderField = ({ input, label }) => (
    <div>

        <label>{label}</label>
        <input
            className="form-control"

            {...input}
        />

    </div>
)

const renderHobbies = ({ fields, name }) => (
    <div className="conatiner">
        {name}
        <div className="d-flex justify-content-end">
            <button className="ui violet button" type="button" onClick={() => fields.push()}>Add {name}</button>
        </div>
        {fields.map((name, index) =>
            <div className="justify-content-center">
                <div className="d-flex justify-content-end" key={index}>
                    <Field
                        name={name}
                        type="text"
                        component={renderField}
                        label={`${name} #${index + 1}`} />
                    <button
                        className="ui red button"
                        type="button"
                        onClick={() => fields.remove(index)}>
                        Delete
                </button>
                </div>
            </div>
        )}
    </div>
)

const FieldArrayInput = ({ Name, Label }) => {

    return (
        <div>
            <FieldArray name={Name} label={Label} component={renderHobbies} />
        </div>
    )
}

export default FieldArrayInput;
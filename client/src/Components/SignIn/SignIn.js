
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../Action/Auth';

class SignIn extends Component {
    onSubmit = formProps => {
        this.props.signin(formProps, () => {
            this.props.history.push('/admin/projects');
        });
    };

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="container">
                <div className="row justify-content-center m-5 p-5">
                    <div className="ui card m-5 p-1">
                        <form className="ui form" onSubmit={handleSubmit(this.onSubmit)}>
                            <fieldset>
                                <label>Email</label>
                                <Field
                                    name="email"
                                    type="text"
                                    component="input"
                                    autoComplete="none"
                                />
                            </fieldset>
                            <fieldset>
                                <label>Password</label>
                                <Field
                                    name="password"
                                    type="password"
                                    component="input"
                                    autoComplete="none"
                                />
                            </fieldset>
                                <button className="ui primary button">Sign In!</button>
                        </form>
                    </div>
                </div>
                <div>{this.props.errorMessage}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signin' })
)(SignIn);

import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import * as auth from "../../../Action/index";

class SignIn extends Component {
    onsubmit = (formProps) => {
        this.props.signin(formProps,() =>{
            this.props.history.push('/admin')
        });
      };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="signin">
         <div className="container" style={{padding : '100px'}}>
          <div class="row">
            <div class="col">
              <form className="ui form" onSubmit={handleSubmit(this.onsubmit)}>
                <fieldset>
                  <label>Email</label>
                  <Field name="email" type="text" component="input" />
                </fieldset>
                <fieldset>
                  <label>Password</label>
                  <Field name="password" type="text" component="input" />
                </fieldset>
                <div className="">{this.props.errorMessage}</div>
                <div style={{paddingTop : '30px'}} >
                <button className="right floated ui primary button" >Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, auth),
  reduxForm({
    form: "signip",
  })
)(SignIn);

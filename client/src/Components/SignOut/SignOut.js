import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Action/Auth';

class SignOut extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return <div></div>;
  }
}

export default connect(null, actions)(SignOut);
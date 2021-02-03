import React, { Component } from 'react';
import {connect} from 'react-redux'
import  * as sign_out  from '../../../Action/index' 


class SignOut extends Component {
    componentDidMount(){
        this.props.signout()
    }
    render() { 
        return ( <div className ="signup">
            djkahd
        </div> );
    }
}
 
export default connect(null,sign_out)(SignOut);
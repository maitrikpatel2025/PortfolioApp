import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Admin extends Component {
  render() { 
    return ( 
    <div className="container" style={{padding:'20px'}}>
      <div className="row">
        <div className="col">
          <div className="ui center">
          <button className="ui primary button">Add Projects</button>
          <button className="ui red button">Add Mini Projects</button>
          <button className="ui green button">Add Skills</button>
          <button className="ui purple button">Add Certification</button>
          <button className="ui orange button">Add Books</button>
          </div>
        </div>
      </div>
    </div> );
  }
}
 
export default Admin;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import requireAuth from '../AdminAuth/RequireAuth/requireAuth';

class Admin extends Component {
  render() { 
    return ( 
    <div className="container" style={{padding:'20px'}}>
      <div className="col">
        <div className="row">
          <Link to='/admin/view-project' className="ui primary button">View All Projects</Link>
          <Link to='/admin/view-mini-roject' className="ui red button">View Mini Projects</Link>
          <Link to='/admin/view-skills' className="ui green button">View Skills</Link>
          <Link to='/admin/view-certification' className="ui purple button">View Certification</Link>
          <Link to='/admin/view-books' className="ui orange button">View Books</Link>
        </div>
          <br/>
        <div className="row">
          <Link to='/admin/voluteering-experince' className="ui brown button">View Voluteering Experince</Link>
          <Link to='/admin/view-experience' className="ui gray button">View Experience</Link>
          <Link to='/admin/view-contact' className="ui violet button">View contact Us request</Link>
          <Link to='/admin/view-zoom' className="ui olive button">View Zoom Meeting request</Link>
        </div>
      </div>
    </div> );
  }
}
 
export default requireAuth(Admin);
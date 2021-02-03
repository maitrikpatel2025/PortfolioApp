import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./Components/TopNav/TopNav";
import Home from "./Components/Home/Home";
import Scroll from "./Components/Scroll/Scroll";
import SideNav from "./Components/SideNav/SideNav";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Admin from "./Components/Admin/admin";
import SignUp from './Components/AdminAuth/SignUp/SignUp';

class App extends Component {

  render() { 
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path="/" component={TopNav} />
              <Route path="/" component={SideNav} />
            </Switch>
            <div className="Page">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Project} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/admin" component ={Admin}/>
                <Route path="/admin/signup" component={SignUp} />
              </Switch>
            </div>
          </div>
          <Scroll />
        </Router>
      </div>
    );
  }
}
 
export default App;
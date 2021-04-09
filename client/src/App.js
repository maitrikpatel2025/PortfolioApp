import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as actions from "./Action/admin";

import Admin from "./Components/Admin/Admin";
import Home from "./Components/Home/Home";

import NavBar from "./Components/NavBar/NavBar";
import AdminNav from "./Components/AdminNav/AdminNav";
import history from "./history";
import SignOut from "./Components/SignOut/SignOut";
import SignIn from "./Components/SignIn/SignIn";
import Projects from "./Components/Manager/Projects/Projects";


class App extends Component {
  render()
  {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Switch>
              < Route path="/" exact component={NavBar} />
              < Route path="/about" exact component={NavBar} />
              < Route path="/projects" exact component={NavBar} />
              < Route path="/experience" exact component={NavBar} />
              < Route path="/contact" exact component={NavBar} />
            </Switch>
            < Route path="/admin" component={Admin} />
            <div className="Page">
            <Route path='/' exact component={Home} />
            <Route path='/manager/login'  component={SignIn} />
            <Route path="/logout" component={SignOut} />
            <Route path="/admin/projects" component={Projects} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
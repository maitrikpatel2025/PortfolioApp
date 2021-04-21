import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";


import Admin from "./Components/Admin/Admin";
import Home from "./Components/Home/Home";

import NavBar from "./Components/NavBar/NavBar";
import history from "./history";
import SignOut from "./Components/SignOut/SignOut";
import SignIn from "./Components/SignIn/SignIn";

import ProjectsEdit from "./Components/Manager/Projects/ProjectsEdit";
import ProjectsList from "./Components/Manager/Projects/ProjectsList";
import ProjectsDelete from "./Components/Manager/Projects/ProjectsDelete";
import Story from "./Components/Story/Story";
import ProjectsAdd from "./Components/Manager/Projects/ProjectsAdd";
import MiniProjectsList from "./Components/Manager/MiniProjects/MiniProjectsList";
import MiniProjectsAdd from "./Components/Manager/MiniProjects/MiniProjectsAdd";
import MiniProjectsEdit from "./Components/Manager/MiniProjects/MiniProjectsEdit";
import MiniProjectsDelete from "./Components/Manager/MiniProjects/MiniProjectsDelete";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Switch>
              < Route path="/" exact component={NavBar} />
              < Route path="/story" exact component={NavBar} />
              < Route path="/works" exact component={NavBar} />
              < Route path="/capabilities" exact component={NavBar} />
              < Route path="/contact" exact component={NavBar} />
            </Switch>
            < Route path="/admin" component={Admin} />
            <div className="Page">
              <Route path='/' exact component={Home} />
              <Route path='/story' exact component={Story} />
              <Route path='/manager/login' component={SignIn} />
              <Route path="/logout" component={SignOut} />
              <Route path="/admin/projects" exact component={ProjectsList} />
              <Route path="/admin/projects/new" exact component={ProjectsAdd} />
              <Route path="/admin/projects/edit/:id" exact component={ProjectsEdit} />
              <Route path="/admin/miniprojects" exact component={MiniProjectsList} />
              <Route path="/admin/miniprojects/new" exact component={MiniProjectsAdd} />
              <Route path="/admin/miniprojects/edit/:id" exact component={MiniProjectsEdit} />
              <Route
                path="/admin/miniprojects/delete/:id"
                exact
                component={MiniProjectsDelete}
              />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
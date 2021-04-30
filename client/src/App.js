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
import SkillsAdd from "./Components/Manager/Skills/SkillsAdd";
import SkillsList from "./Components/Manager/Skills/SkillsList";
import SkillsDelete from "./Components/Manager/Skills/SkillsDelete";
import SkillsEdit from "./Components/Manager/Skills/SkillsEdit";
import CertificationsList from "./Components/Manager/Certifications/CertificationsList";
import CertificationsAdd from "./Components/Manager/Certifications/CertificationsAdd";
import CertificationsEdit from "./Components/Manager/Certifications/CertificationsEdit";
import CertificationsDelete from "./Components/Manager/Certifications/CertificationsDelete";
import VoluteerExperienceList from "./Components/Manager/VoluteerExperience/VoluteerExperienceList";
import VoluteerExperienceAdd from "./Components/Manager/VoluteerExperience/VoluteerExperienceAdd";
import VoluteerExperienceEdit from "./Components/Manager/VoluteerExperience/VoluteerExperienceEdit";
import VoluteerExperienceDelete from "./Components/Manager/VoluteerExperience/VoluteerExperienceDelete";
import ExperienceList from "./Components/Manager/Experience/ExperienceList";
import ExperienceAdd from "./Components/Manager/Experience/ExperienceAdd";
import ExperienceEdit from "./Components/Manager/Experience/ExperienceEdit";
import ExperienceDelete from "./Components/Manager/Experience/ExperienceDelete";
import TestimonialList from "./Components/Manager/Testimonial/TestimonialList";
import TestimonialAdd from "./Components/Manager/Testimonial/TestimonialAdd";
import TestimonialEdit from "./Components/Manager/Testimonial/TestimonialEdit";
import TestimonialDelete from "./Components/Manager/Testimonial/TestimonialDelete";
import Works from "./Components/Works/Works";

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
              <Route path='/works' exact component={Works} />
              <Route path='/manager/login' exact component={SignIn} />
              <Route path="/logout" exact component={SignOut} />
              <Route path="/admin/projects" exact component={ProjectsList} />
              <Route path="/admin/projects/new" exact component={ProjectsAdd} />
              <Route path="/admin/projects/edit/:id" exact component={ProjectsEdit} />
              <Route
                path="/admin/projects/delete/:id"
                exact
                component={ProjectsDelete}
              />
              <Route path="/admin/miniprojects" exact component={MiniProjectsList} />
              <Route path="/admin/miniprojects/new" exact component={MiniProjectsAdd} />
              <Route path="/admin/miniprojects/edit/:id" exact component={MiniProjectsEdit} />
              <Route
                path="/admin/miniprojects/delete/:id"
                exact
                component={MiniProjectsDelete}
              />
              <Route path="/admin/skills" exact component={SkillsList} />
              <Route path="/admin/skills/new" exact component={SkillsAdd} />
              <Route path="/admin/skills/edit/:id" exact component={SkillsEdit} />
              <Route
                path="/admin/skills/delete/:id"
                exact
                component={SkillsDelete}
              />
              <Route path="/admin/certifications" exact component={CertificationsList} />
              <Route path="/admin/certifications/new" exact component={CertificationsAdd} />
              <Route path="/admin/certifications/edit/:id" exact component={CertificationsEdit} />
              <Route
                path="/admin/certifications/delete/:id"
                exact
                component={CertificationsDelete}
              />
              <Route path="/admin/experience" exact component={ExperienceList} />
              <Route path="/admin/experience/new" exact component={ExperienceAdd} />
              <Route path="/admin/experience/edit/:id" exact component={ExperienceEdit} />
              <Route
                path="/admin/experience/delete/:id"
                exact
                component={ExperienceDelete}
              />
              <Route path="/admin/voluteerexperience" exact component={VoluteerExperienceList} />
              <Route path="/admin/voluteerexperience/new" exact component={VoluteerExperienceAdd} />
              <Route path="/admin/voluteerexperience/edit/:id" exact component={VoluteerExperienceEdit} />
              <Route
                path="/admin/voluteerexperience/delete/:id"
                exact
                component={VoluteerExperienceDelete}
              />
              <Route path="/admin/testimonial" exact component={TestimonialList} />
              <Route path="/admin/testimonial/new" exact component={TestimonialAdd} />
              <Route path="/admin/testimonial/edit/:id" exact component={TestimonialEdit} />
              <Route
                path="/admin/testimonial/delete/:id"
                exact
                component={TestimonialDelete}
              />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
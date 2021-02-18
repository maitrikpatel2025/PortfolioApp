import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";

import NavBar from "./Components/NavBar/NavBar";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path="/" component={NavBar} />
            </Switch>
            <div className="Page">
              <Route path='/' exact component={Home}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import CourseNavigator from "./components/course-navigator";
import MyCourses from "./components/degree-overview";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      worklist: [],
    };
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={CourseNavigator} />
          <Route path="/create" component={MyCourses} />
        </div>
      </Router>
    );
  }
}

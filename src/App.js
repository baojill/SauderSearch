import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import CourseNavigator from "./components/course-navigator";
import DegreeOverview from "./components/degree-overview";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={CourseNavigator} />
          <Route path="/create" component={DegreeOverview} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

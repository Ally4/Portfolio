import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Education from "./components/Education";
import SkillsResume from "./components/SkillsResume";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/education" component={Education} />
          <Route path="/skills&resume&projects" component={SkillsResume} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

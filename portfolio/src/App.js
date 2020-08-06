import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import HomeAdmin from "./components/HomeAdmin/HomeAdmin";
import Education from "./components/Education/Education";
import SkillsResume from "./components/SkillsResume/SkillsResume";
import Blogs from "./components/Blogs/Blogs";
import AdminBlogs from "./components/BlogsAdmin/BlogsAdmin";
import Contact from "./components/Contact/Contact";
import Control from "./components/Control/Control";
import Login from "./components/Login/LogIn";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin" component={HomeAdmin} />
          <Route path="/education" component={Education} />
          <Route path="/skills&resume&projects" component={SkillsResume} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/admin_blogs" component={AdminBlogs} />
          <Route path="/contact" component={Contact} />
          <Route path="/control" component={Control} />
          <Route path="/log" component={Login} />
          <Route path="/" exact component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

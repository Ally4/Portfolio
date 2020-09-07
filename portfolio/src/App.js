import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import fire from "./config/fire";
import Home from "./components/Home/Home";
import HomeAdmin from "./components/HomeAdmin/HomeAdmin";
import Education from "./components/Education/Education";
import SkillsResume from "./components/SkillsResume/SkillsResume";
import Blogs from "./components/Blogs/Blogs";
import AdminBlogs from "./components/BlogsAdmin/BlogsAdmin";
import Contact from "./components/Contact/Contact";
import Control from "./components/Control/Control";
import Login from "./components/Login/LogIn";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import Location from "./components/Location/Location";
import Edit from "./components/Edit/Edit";
import ReadMore from "./components/ReadMore/ReadMore";
import ReadMoreAdmin from "./components/ReadMoreAdmin/ReadMoreAdmin";
import "./App.css";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

class App extends Component {

  render() {
    return (
      <AuthProvider>
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/admin" component={HomeAdmin} /> 
          <Route path="/admin" component={HomeAdmin} /> 
          <Route path="/education" component={Education} />
          <Route path="/skills&resume&projects" component={SkillsResume} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/admin_blogs" component={AdminBlogs} />
          <Route path="/contact" component={Contact} />
          <Route path="/control" component={Control} />
          <Route path="/login" component={Login} />
          <Route path="/create_blog" component={CreateBlog} />
          <Route path="/control/location" component={Location} />
          <Route path="/blog/edit/:id" component={Edit} />
          <Route path="/blog/read/:id" component={ReadMore} />
          <Route path="/blog/read_admin/:id" component={ReadMoreAdmin} />
        </Switch>
      </React.Fragment>
     </AuthProvider> 
    );
  }
}

export default App;

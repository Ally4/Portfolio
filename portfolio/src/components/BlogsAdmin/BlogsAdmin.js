import React, { Component } from "react";
import "./BlogsAdmin.css";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import BlogAdmin from '../BlogAdmin/BlogAdmin';
import Footer from '../Footer/Footer';

class BlogsAdmin extends Component {  
  state = {
  persons: [
    {
      title: "Tech and people",
      script: "The behaviour that people have regarding ...",
    },
    {
      title: "Tech and people",
      script: "The behaviour that people have regarding ...",
    },
    {
      title: "Tech and people",
      script: "The behaviour that people have regarding ...",
    },
    {
      title: "Tech and people",
      script: "The behaviour that people have regarding ...",
    },
    {
      title: "Tech and people",
      script: "The behaviour that people have regarding ...",
    },
    {
      title: "Tech and people",
      script: "The behaviour that people have regarding ...",
    },
  ],
};

  render() {
    return (
      <div>
      <NavbarAdmin />
          <div className="blog">
            <div className="head1">Blogs</div>
            <div className="head2">Blogs</div>
          </div>
          <div className="smallIntroBlog">Here are Ally`s blogs</div>
      <div className="arrange">
    {this.state.persons.map((iterate, index) => <BlogAdmin key={index} title={iterate.title} script={iterate.script} />)}  
      </div>
      <Footer />
        </div>
    );
  }
}

export default BlogsAdmin;

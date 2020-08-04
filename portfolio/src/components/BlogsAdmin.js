import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Blog from './Blog';
import CreateBlog from './CreateBlog';
import facebookLogo from "../pictures/iconmonstr-facebook-2-240.png";
import twitterLogo from "../pictures/iconmonstr-twitter-2-240.png";

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
      <Navbar />
          <div className="blog">
            <div className="head1">Blogs</div>
            <div className="head2">Blogs</div>
          </div>
          <div className="smallIntroBlog">Here are Ally`s blogs</div>
      <div className="arrange">
    {this.state.persons.map((iterate, index) => <Blog key={index} title={iterate.title} script={iterate.script} />)}  
    <CreateBlog />
      </div>
        <div className="footer">
          <div className="btn1" id="buttons">
            <Link
              to="https://twitter.com/AllyNengo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterLogo} alt="logo-twitter" id="logo"></img>Twitter
            </Link>
          </div>
          <div className="btn2" id="buttons">
            <Link
              to="https://web.facebook.com/el.ally3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookLogo} alt="logo-facebook" id="logo"></img>
              Facebook
            </Link>
          </div>
        </div>
        </div>
    );
  }
}

export default BlogsAdmin;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import facebookLogo from "../pictures/iconmonstr-facebook-2-240.png";
import twitterLogo from "../pictures/iconmonstr-twitter-2-240.png";
import blogPicture from "../pictures/6a01157041f4e3970b01b7c82eb758970b-320wi.png";

class Blogs extends Component {
  render() {
    return (
      <div>
        <div className="containerBlog" id="blog">
          <div className="blog">
            <div className="head1">Blogs</div>
            <div className="head2">Blogs</div>
          </div>
          <div className="smallIntroBlog">Here are Ally`s blogs</div>
          <br/>
          <div className="blogs">
            <div className="blog1">
              <div className="pictureBlog">
                <img src={blogPicture} id="imageBlog" alt="blogPicture"></img>
              </div>
              <div className="titleBlog">Tech and people</div>
              <div className="bodyBlog">
                The behaviour that people have regarding ...
              </div>
            </div>
            <div className="blog1">
              <div className="pictureBlog">
                <img src={blogPicture} id="imageBlog" alt="blogPicture"></img>
              </div>
              <div className="titleBlog">Tech and people</div>
              <div className="bodyBlog">
                The behaviour that people have regarding ...
              </div>
            </div>
            <div className="blog1">
              <div className="pictureBlog">
                <img src={blogPicture} id="imageBlog" alt="blogPicture"></img>
              </div>
              <div className="titleBlog">Tech and people</div>
              <div className="bodyBlog">
                The behaviour that people have regarding ...
              </div>
            </div>
            <div className="blog1">
              <div className="pictureBlog">
                <img src={blogPicture} id="imageBlog" alt="blogPicture"></img>
              </div>
              <div className="titleBlog">Tech and people</div>
              <div className="bodyBlog">
                The behaviour that people have regarding ...
              </div>
            </div>
            <div className="blog1">
              <div className="pictureBlog">
                <img src={blogPicture} id="imageBlog" alt="blogPicture"></img>
              </div>
              <div className="titleBlog">Tech and people</div>
              <div className="bodyBlog">
                The behaviour that people have regarding ...
              </div>
            </div>
            <div className="blog1">
              <div className="pictureBlog">
                <img src={blogPicture} id="imageBlog" alt="blogPicture"></img>
              </div>
              <div className="titleBlog">Tech and people</div>
              <div className="bodyBlog">
                The behaviour that people have regarding ...
              </div>
            </div>
            <div className="blog1">
              <div className="pictureBlog">
                <img src={blogPicture} id="imageBlog" alt="blogPicture"></img>
              </div>
              <div className="titleBlog">Tech and people</div>
              <div className="bodyBlog">
                The behaviour that people have regarding ...
              </div>
            </div>
            <div className="blog1">
              <div className="pictureBlog">
                <img src={blogPicture} id="imageBlog" alt="blogPicture"></img>
              </div>
              <div className="titleBlog">Tech and people</div>
              <div className="bodyBlog">
                The behaviour that people have regarding ...
              </div>
            </div>
          </div>
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

export default Blogs;

import React, { Component } from "react";
import "./Footer.css";
import facebookLogo from "../../pictures/iconmonstr-facebook-2-240.png";
import twitterLogo from "../../pictures/iconmonstr-twitter-2-240.png";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="btn1" id="buttons">
            <a
              href="https://twitter.com/AllyNengo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterLogo} alt="logo-twitter" id="logo"></img>Twitter
            </a>
          </div>
          <div className="btn2" id="buttons">
            <a
              href="https://web.facebook.com/el.ally3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookLogo} alt="logo-facebook" id="logo"></img>
              Facebook
            </a>
          </div>
        </div>
      </div>
    );
  }
}

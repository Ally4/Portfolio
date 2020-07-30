import React, { Component } from "react";
import { Link } from "react-router-dom";
import facebookLogo from "../pictures/iconmonstr-facebook-2-240.png";
import twitterLogo from "../pictures/iconmonstr-twitter-2-240.png";
import contact from "../pictures/contact.jpg";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="containerContact" id="contact">
          <div className="contact">
            <div className="head1">Contact</div>
          </div>
          <div className="smallIntroContact">Let be in touch</div>
          <br/>
          <div className="subcontentContact">
            <div className="imageContact">
              <img src={contact} id="imageContact" alt="contactPicture" />
            </div>
            <div className="forms-create">
              <form action="./admin-page.html">
                <input
                  type="text"
                  id="create"
                  placeholder="Your name"
                  required
                />
                <input
                  type="text"
                  id="create"
                  placeholder="Your email"
                  required
                />
                <textarea
                  type="text"
                  id="create"
                  placeholder="Leave here your message"
                />
                <br />
                <button className="send" value="Send">
                  Send
                </button>
              </form>
              <div></div>
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

export default Contact;

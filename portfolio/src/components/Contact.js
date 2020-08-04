import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import facebookLogo from "../pictures/iconmonstr-facebook-2-240.png";
import twitterLogo from "../pictures/iconmonstr-twitter-2-240.png";
import contact from "../pictures/contact.jpg";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleChangeName = (event) => {
    event.preventDefault();
    this.setState({
      name: event.target.value,
    });
  };

  handleChangeEmail = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.value,
    });
  };

  handleChangeMessage = (event) => {
    event.preventDefault();
    this.setState({
      message: event.target.value,
    });
  };

  render() {
    return (
      <div>
      <Navbar />
        <div className="containerContact" id="contact">
          <div className="contact">
            <div className="head1">Contact</div>
          </div>
          <div className="smallIntroContact">Let be in touch</div>
          <br />
          <div className="subcontentContact">
            <div className="imageContact">
              <img src={contact} id="imageContact" alt="contactPicture" />
            </div>
            <div className="forms-create">
              <form>
                <input
                  value={this.state.name}
                  onChange={this.handleChangeName}
                  type="text"
                  id="create"
                  placeholder="Your name"
                  required
                />
                <input
                  value={this.state.email}
                  onChange={this.handleChangeEmail}
                  type="email"
                  id="create"
                  placeholder="Your email"
                  required
                />
                <textarea
                  value={this.state.message}
                  onChange={this.handleChangeMessage}
                  type="text"
                  id="create"
                  placeholder="Leave here your message"
                  required
                />
                <br />
                <button 
                  className="send"
                  value="submit">
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

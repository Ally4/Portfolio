import React, { Component } from "react";
import { Link } from "react-router-dom";
import facebookLogo from "../pictures/iconmonstr-facebook-2-240.png";
import twitterLogo from "../pictures/iconmonstr-twitter-2-240.png";
import contact from "../pictures/contact.jpg";


class Log extends Component {

    state = {
        email: "",
        password: "",
      };
    
      handleChangeName = (event) => {
        event.preventDefault();
        this.setState({
          email: event.target.value,
        });
      };
    
      handleChangeEmail = (event) => {
        event.preventDefault();
        this.setState({
          password: event.target.value,
        });
      };


  render() {
    return (
      <div className="Log">
      <div className="containerLog" id="log">
      <div className="log">
        <div className="head1">Admin log</div>
      </div>
      <div className="subcontentLog">
        <div className="forms-create">
          <form>
            <input
              value={this.state.name}
              onChange={this.handleChangeName}
              type="email"
              id="create"
              placeholder="Email"
              required
            />
            <input
              value={this.state.email}
              onChange={this.handleChangeEmail}
              type="text"
              id="create"
              placeholder="Password"
              required
            />
            <br />
            <button 
              className="send"
              value="submit">
              Log In
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

export default Log;

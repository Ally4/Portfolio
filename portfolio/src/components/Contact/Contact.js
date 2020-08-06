import React, { Component } from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import contact from "../../pictures/contact.jpg";
import Footer from "../Footer/Footer";

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
        <Footer />
      </div>
    );
  }
}

export default Contact;

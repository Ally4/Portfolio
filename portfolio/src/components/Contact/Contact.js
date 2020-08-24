import React, { Component } from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import contact from "../../pictures/contact.jpg";
import Footer from "../Footer/Footer";
import app from "../../config/fire";

const db = app.firestore();

class Contact extends Component {
  state = {
    email: "",
    name: "",
    message: "",
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  sendMessage = (event) => {
    event.preventDefault();
    db.collection("Queries")
      .add({
        email: this.state.email,
        name: this.state.name,
        message: this.state.message,
      })
      .then((doc) => alert("Your message have been sent successfully"))
      .catch((err) => console.log(err));
    this.setState({ email: "", name: "", message: "" });
  };

  // handleChangeName = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     name: event.target.value,
  //   });
  // };

  // handleChangeEmail = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     email: event.target.value,
  //   });
  // };

  // handleChangeMessage = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     message: event.target.value,
  //   });
  // };

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
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  id="create"
                  placeholder="Your email"
                  required
                />
                <input
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  type="text"
                  id="create"
                  placeholder="Your name"
                  required
                />
                <textarea
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  type="text"
                  id="create"
                  placeholder="Leave here your message"
                  required
                />
                <br />
                <button
                  className="send"
                  value="submit"
                  onClick={this.sendMessage}
                >
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

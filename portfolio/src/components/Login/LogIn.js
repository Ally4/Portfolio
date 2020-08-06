import React, { Component } from "react";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

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
      <div>
        <Navbar />
        <div className="Log">
          <div className="containerLog" id="log">
            <div className="log">
              <div className="head1" id="login">
                Admin log
              </div>
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
                  <button className="send" value="submit">
                    Log In
                  </button>
                </form>
                <div></div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Log;

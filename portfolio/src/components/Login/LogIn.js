import React, { Component, useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../config/fire";
import { AuthContext } from "../../Auth";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/admin");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/admin" />;
  }

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
            <form onSubmit={handleLogin}>
              <input
                name="email"
                type="email"
                id="create"
                placeholder="Email"
                required
              />
              <input
                name="password"
                type="password"
                id="create"
                placeholder="Password"
                required
              />
              <br />
              <button className="send" value="submit">
                Log In
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

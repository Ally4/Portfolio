import React, { Component } from "react";
import "./Control.css";
import { Link } from 'react-router-dom';
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import Footer from "../Footer/Footer";
import Map_Location from "../Map_Location/Map_Location";

class Control extends Component {
  render() {
    return (
      <div>
        <NavbarAdmin />
        <div className="control_panel">
          <div className="control_list">
            <ul>
              <li>Location</li>
              <li><Link to="/queries" >Queries</Link></li>
              <li>Profile</li>
            </ul>
          </div>
          <div className="control_items">
              <Map_Location />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Control;

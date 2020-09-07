import React, { Component } from "react";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import Map_location from "../Map_Location/Map_Location";
import Footer from "../NavbarAdmin/NavbarAdmin";

class Location extends Component {
  render() {
    return (
      <div>
        <NavbarAdmin />
        <div className="control_panel">
          <div className="control_list">
            <ul>
              <li>Location</li>
              <li>Profile</li>
              <li>Queries</li>
            </ul>
          </div>
          <div className="control_items">
              <Map_location />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Location;

import React, { Component } from "react";
import GOOGLE_API_KEY from "../config";

class Map_Location extends Component {

    constructor(props) {
        super(props);
  this.state = {
    latitude: null,
    longitude: null,
    userAddress: null,
  };
  this.getLocation = this.getLocation.bind(this);
  this.getCoordinates = this.getCoordinates.bind(this);
  this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this);
}

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleError);
    } else {
      alert("Geolocation is not supported by this browser");
    }
  }

  getCoordinates(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    this.reverseGeocodeCoordinates();
  }

  reverseGeocodeCoordinates(){
    fetch(`https://maps.googleapis.com/maps/api/geocode/json/latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=${GOOGLE_API_KEY}`)
    .then(response => response.json())
    .then(data => this.setState({
        userAddress: data.results[0].formatted_address
    }))
    .catch(error => alert(error))
  }
  


handleError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
      default:
        alert("An unknown error occurred.")
    }
  }


  render() {
    return (
      <div className="Location">
        <h3>Location</h3>
        <button onClick={this.getLocation}> Get Location</button>
        <h3>Coordinates</h3>
        <p>Latitude: {this.state.latitude}</p>
        <p>Longitude: {this.state.longitude}</p>
        <h3>Geolocation</h3>
        <p>Address: {this.state.userAddress}</p>
        {
            this.state.latitude && this.state.longitude ? <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false${this.state.latitude},${this.state.longitude}&key=${GOOGLE_API_KEY}`} alt="map" /> : null 
        }
      </div>
    );
  }
}

export default Map_Location;

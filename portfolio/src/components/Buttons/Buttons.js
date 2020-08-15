import React, { Component, useState } from "react";
import fire from "../../config/fire";
import "./Buttons.css";

const db = fire.firestore();

class Actions extends Component {

  render() {
    return (
      <div className="action">
        <button className="edit" value="Edit">
          Edit
        </button>
        <button
          className="delete"
          value="delete"
          onClick={this.props.handleDelete}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Actions;

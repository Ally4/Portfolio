import React, { Component } from "react";

export default class Actions extends Component {
  render() {
    return (
      <div className="action">
        <button className="edit" value="Edit">
          Edit
        </button>
        <button className="delete" value="delete">
          Delete
        </button>
      </div>
    );
  }
}

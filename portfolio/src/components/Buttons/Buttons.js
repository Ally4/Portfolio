import React, { Component, useState } from "react";
import {Link} from 'react-router-dom';
import fire from "../../config/fire";
import "./Buttons.css";

const db = fire.firestore();

const Action = (blog) => {

  const toDelete = () => {
    db.collection("Blogs").doc(blog.id).delete().then(() => alert("the blog is deleted")).catch(error => console.log(`the error is ${error}`));
  };

  return (
    <div className="action">
      <button className="edit" value="Edit"><Link to={`/blog/edit/${blog.id}`}>Edit</Link>        
      </button>
      <button className="delete" value="delete" onClick={toDelete}>
        Delete
      </button>
    </div>
  );
};

export default Action;

import React, { Component, useState } from "react";
import {Link} from 'react-router-dom';
import fire from "../../config/fire";
import "./Read.css";

const db = fire.firestore();

const Read = (blog) => {
console.log(`bbbbbbbbbbb${blog.title}`);
  return (
    <div className="action">
      <button className="edit" value="Edit"><Link to={`/blog/read/${blog.id}`}>Read More</Link>       
      </button>
    </div>
  );
};

export default Read;
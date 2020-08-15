import React from "react";
import "./BlogAdmin.css";
import Change from "../Buttons/Buttons";

const Blog = (props) => {
  return (
    <div className="card">
      <div className="arrangementBlog">
        <img
          src={props.picture}
          style={{ width: "300px", height: "250px", borderRadius: "1em" }}
          alt="project"
        />
        <p className="title">{props.title}</p>
        <p className="script">{props.script}</p>
      </div>
      <Change />
    </div>
  );
};

export default Blog;

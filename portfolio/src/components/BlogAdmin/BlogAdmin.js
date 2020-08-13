import React from 'react';
import "./BlogAdmin.css";
import Buttons from "../Buttons/Buttons";
import blogPicture from "../../pictures/6a01157041f4e3970b01b7c82eb758970b-320wi.png";

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
            <Buttons />
        </div>
    )
}

export default Blog;

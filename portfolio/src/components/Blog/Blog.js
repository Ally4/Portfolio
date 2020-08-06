import React from 'react';
import "./Blog.css";
import Buttons from "../Buttons/Buttons";
import blogPicture from "../../pictures/6a01157041f4e3970b01b7c82eb758970b-320wi.png";

const Blog = (props) => {
    return (
        <div className="card">
            <div className="arrangementBlog">
             <img  className="image" src={blogPicture} id="imageBlog" alt="blogPicture"></img>
            <p className="title">{props.title}</p>  
            <p className="script">{props.script}</p> 
            <Buttons /> 
            </div>
        </div>
    )
}

export default Blog;
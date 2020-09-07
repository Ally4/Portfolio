import React from 'react';
import Read from '../Read/Read';
import "./Blog.css";

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
            <p className="script" id="script" >{props.script}</p> 
            <Read id={props.id}/>
            </div>
        </div>
    )
}

export default Blog;




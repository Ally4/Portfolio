import React from 'react';

const Blog = (props) => {
    return (
        <div className="card">
            <p name="image">{props.image} </p>
            <p name="title">{props.title}</p>  
            <p name="script">{props.script}</p>  
        </div>
    )
}

export default Blog;
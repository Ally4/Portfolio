import React from "react";
import { Link } from 'react-router-dom';
import "./Read.css";


const Read = (blog) => {
  return (
    <div className="action">
      <button className="edit" value="Edit"><Link to={`/blog/read/${blog.id}`}>Read More</Link>       
      </button>
    </div>
  );
};

export default Read;
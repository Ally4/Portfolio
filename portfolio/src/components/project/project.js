import React from "react";

const Project = (props) => {
    return (
      <div>




        <p className="pictureProject">{props.picture_project}</p>

        <p className="projectTitle">{props.project_title}</p>

        <p className="projectResume" >{props.project_resume}</p>

        <p className="projectResume" > <a href={props.link_repository} target="_blank" rel="noopener noreferrer"> Repository </a></p>

        <p className="projectResume" > <a href={props.link_UI} target="_blank" rel="noopener noreferrer">User Interface </a></p>












        {/* <div className="project">
          <div className="arrangementBlog">
            <img
              className="image"
              src={blogPicture}
              id="imageBlog"
              alt="blogPicture"
            ></img>
            <p className="title">{props.title}</p>
            <p className="script">{props.script}</p>
            <Buttons />
          </div>
        </div> */}
      </div>
    );
}

export default Project;

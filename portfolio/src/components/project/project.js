import React from "react";

const Project = (props) => {
  return (
    <div>
      <img
        src={props.picture_project}
        style={{ width: "300px", height: "250px", borderRadius: "1em" }}
        alt="project"
      />

      <p className="projectTitle">{props.project_title}</p>

      <p className="projectResume">{props.project_resume}</p>

      <p className="projectResume">
        {" "}
        <a
          href={props.link_repository}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Repository{" "}
        </a>
      </p>

      { props.link_UI ? <p className="projectResume">
        {" "}
        <a href={props.link_UI} target="_blank" rel="noopener noreferrer">
          User Interface{" "}
        </a>
      </p> : "" }
    </div>
  );
};

export default Project;

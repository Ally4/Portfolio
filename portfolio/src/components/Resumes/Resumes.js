import React from "react";
import "./resume.css";

const Resumes = (props) => {
  return (
    <div className="resume">
      <img
        src={props.image_resume}
        style={{ width: "250px", height: "250px", borderRadius: "1em" }}
        alt="resumes"
      />

      <p className="projectTitle">{props.year_resume}</p>

      <p className="projectResume">{props.body_resume}</p>

    </div>
  );
};

export default Resumes;
  
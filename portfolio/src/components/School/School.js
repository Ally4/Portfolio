import React, { Component } from 'react';
import "./School.css";

const School = (props) => {
    return (
        <div>
            <div className="arrangementSchool">
            <p className="year">{props.year}</p>  
            <p className="degree">{props.degree}</p>  
            <p className="institution">{props.institution}</p> 
            </div>
        </div>
    )
}

export default School;

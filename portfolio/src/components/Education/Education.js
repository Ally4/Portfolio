import React, { Component } from "react";
import "./Education.css";
import Navbar from "../Navbar/Navbar";
import School from "../School/School";
import Footer from "../Footer/Footer";

class Education extends Component {
  state = {
    school: [
      {
        year: "2013 - 2017",
        degree: "Associate diploma in education",
        institution:
          "College of education, Rukara campus, faculty of education, department of sciences, option of mathematic and computer-science.",
      },
      {
        year: "2010 - 2012",
        degree: "Secondary school diploma",
        institution: "Gisenyi Adventist Secondary School (GASS)",
      },
      {
        year: "2009",
        degree: "Ordinary level",
        institution: "This is the half of the secondary journey.",
      },
    ],
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="containerEducation" id="education">
          <div className="Education">
            <div className="head1">educations</div>
            <div className="head2">educations</div>
          </div>
          <div className="smallIntroEducation">Education background</div>
          <br />
          <div className="paragraph">
            <p>
              Ally is a human by default, a teacher by accident but loving the
              experience and all the related aspect of it, developer by choice
              and love, a life-long learn for the adaptability on the change, He
              vehemently believe that the greatest mission of a person in this
              world is to leave it better in all the aspects than how he found
              it!.
            </p>
          </div>
          <div className="Educations">
            {this.state.school.map((iterate, index) => (
              <School
                key={index}
                year={iterate.year}
                degree={iterate.degree}
                institution={iterate.institution}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Education;

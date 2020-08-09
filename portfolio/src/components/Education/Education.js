import React, { Component } from "react";
import "./Education.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

class Education extends Component {
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
            <div className="Education1">
              <div className="pictureEducation">
                <p className="year">2013 - 2017</p>
                <p className="degree">Associate diploma in education</p>
                <p className="institution">University of Rwanda</p>
                <p className="bodyEducation">
                  College of education, Rukara campus, faculty of education,
                  department of sciences, option of mathematic and
                  computer-science.{" "}
                </p>
              </div>
            </div>
            <div className="Education1">
              <div className="pictureEducation">
                <p className="year">2010 - 2012</p>
                <p className="degree">Secondary school diploma</p>
                <p className="institution">
                  Gisenyi Adventist Secondary School (GASS)
                </p>
                <p className="bodyEducation">
                  The combination is mathematic, physic and computer-science.
                </p>
              </div>
            </div>
            <div className="Education1">
              <div className="pictureEducation">
                <p className="year">2009</p>
                <p className="degree">Ordinary level</p>
                <p className="institution">
                  Ecole Secondaire Islamique de Gisenyi (ESIG)
                </p>
                <p className="bodyEducation">
                  This is the half of the secondary journey.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Education;

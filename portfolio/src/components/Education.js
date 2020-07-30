import React, { Component } from "react";
import { Link } from "react-router-dom";
import facebookLogo from "../pictures/iconmonstr-facebook-2-240.png";
import twitterLogo from "../pictures/iconmonstr-twitter-2-240.png";

class Education extends Component {
  render() {
    return (
      <div>
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
                <div className="year">2013 - 2017</div>
                <div className="degree">Associate diploma in education</div>
                <div className="institution">University of Rwanda</div>
                <div className="bodyEducation">
                  College of education, Rukara campus,
                  <br /> faculty of education, department of sciences,
                  <br /> option of mathematic and computer-science.{" "}
                </div>
              </div>
            </div>
            <div className="Education1">
              <div className="pictureEducation">
                <div className="year">2010 - 2012</div>
                <div className="degree">Secondary school diploma</div>
                <div className="institution">
                  Gisenyi Adventist Secondary School (GASS)
                </div>
                <div className="bodyEducation">
                  The combination is mathematic, physic and computer-science.
                </div>
              </div>
            </div>
            <div className="Education1">
              <div className="pictureEducation">
                <div className="year">2009</div>
                <div className="degree">Ordinary level</div>
                <div className="institution">
                  Ecole Secondaire Islamique de Gisenyi (ESIG)
                </div>
                <div className="bodyEducation">
                  This is the half of the secondary journey.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="btn1" id="buttons">
            <Link
              to="https://twitter.com/AllyNengo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterLogo} alt="logo-twitter" id="logo"></img>Twitter
            </Link>
          </div>
          <div className="btn2" id="buttons">
            <Link
              to="https://web.facebook.com/el.ally3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookLogo} alt="logo-facebook" id="logo"></img>
              Facebook
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;

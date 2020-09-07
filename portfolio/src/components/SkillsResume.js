import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import facebookLogo from "../pictures/iconmonstr-facebook-2-240.png";
import twitterLogo from "../pictures/iconmonstr-twitter-2-240.png";
import sell from "../pictures/sell.jpg";
import mentor from "../pictures/mentor.jpg";
import report from "../pictures/report.jpg";
import vote from "../pictures/vote.png";
import ydpd from "../pictures/ydpd.jpg";
import genesis from "../pictures/genesis.jpg";
import allybase from "../pictures/allybase.PNG";
import dream from "../pictures/dream.png";
import impano from "../pictures/impano.png";
import work from "../pictures/work.png";
import aylf from "../pictures/aylf.jpg";
import pam from "../pictures/pam.jpg";
import tm from "../pictures/tm.jpg";

class SkillsResume extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="containerSkills-Resume" id="resume">
          <div className="Skills-Resume">
            <div className="head1">Skills and Resume</div>
            <div className="head2">Skills and Resume</div>
          </div>
          <div className="smallIntroSkills-Resume">
            Here are the skills and working experience gained overtime.
          </div>
          <br />
          <div className="smallIntroSkills-Resume-tech">Technical skills</div>
          <div className="Skills-Resumes">
            <div className="Skills-Resume1">
              <div className="skill">Javascript</div>
              <div className="skill">Nodejs</div>
              <div className="skill">Expressjs</div>
              <div className="skill">Html</div>
              <div className="skill">Css</div>
              <div className="skill">Sql</div>
              <div className="skill">C++</div>
              <div className="skill">C</div>
              <div className="skill">Adode</div>
              <div className="skill">visuelBasic</div>
              <div className="skill">MicrosoftOffice</div>
            </div>
          </div>
          <div className="smallIntroSkills-Resume-tech">Soft skills</div>
          <div className="Skills-Resumes">
            <div className="Skills-Resume1">
              <div className="skill">Panel moderation, hosting ceremonies</div>
              <div className="skill">Leadership and communication</div>
              <div className="skill">
                Film(Directing, Acting, editing, writing)
              </div>
            </div>
          </div>
          <div className="smallIntroSkills-Resume-lang">
            Languages
            <span className="lang">(speaking, listening, understanding)</span>
          </div>
          <div className="Skills-Resumes">
            <div className="Skills-Resume1">
              <div className="skill-lang">Kinyarwanda(mother tongue)</div>
              <div className="skill-lang">English</div>
              <div className="skill-lang">French</div>
              <div className="skill-lang">Swahili</div>
            </div>
          </div>
        </div>
        <div className="containerProject" id="project">
          <div className="project">
            <div className="head1">Projects</div>
          </div>
          <div className="smallIntroProject">
            Here are Ally`s worked on projects
          </div>
          <br />
          <div className="projects">
            <div className="project1">
              <div className="pictureProject">
                <img src={sell} id="imageProject" alt="projectPicture"></img>
              </div>
              <div className="projectTitle">Property-pro-lite</div>
              <div className="projectResume">It`s an online platform</div>
              <div className="projectResume">
                <Link
                  to="https://github.com/Ally4/Property-Pro-Lite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository
                </Link>
              </div>
              <div className="projectResume">
                <a
                  to=" https://ally4.github.io/Property-Pro-Lite/UI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  User-Interface
                </a>
              </div>
            </div>
            <div className="project1">
              <div className="pictureProject">
                <img src={mentor} id="imageProject" alt="projectPicture"></img>
              </div>
              <div className="projectTitle">Mentor</div>
              <div className="projectResume">Getting a mentor online</div>
              <div className="projectResume">
                <a
                  to="https://github.com/Ally4/Mentor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository
                </a>
              </div>
              <div className="projectResume">
                <a
                  to="https://ally4.github.io/Mentor/UI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  User-Interface
                </a>
              </div>
            </div>
            <div className="project1">
              <div className="pictureProject">
                <img src={report} id="imageProject" alt="projectPicture"></img>
              </div>
              <div className="projectTitle">Your-voice</div>
              <div className="projectResume">
                It`s an online reprting platform
              </div>
              <div className="projectResume">
                <a
                  to="https://github.com/Ally4/Your-Voice"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository
                </a>
              </div>
            </div>
            <div className="project1">
              <div className="pictureProject">
                <img src={vote} id="imageProject" alt="projectPicture"></img>
              </div>
              <div className="projectTitle">Your-vote</div>
              <div className="projectResume">
                It`s an online voting platform
              </div>
              <div className="projectResume">
                <a
                  to="https://github.com/Ally4/Your-Vote"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository
                </a>
              </div>
              <div className="projectResume">
                <a
                  to="https://ally4.github.io/Your-Vote/UI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  User-Interface
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="containerResume" id="resume">
          <div className="resume">
            <div className="head1">Resume</div>
            <div className="head2">Resume</div>
          </div>
          <div className="smallIntroResume">
            Here are Ally`s working experience
          </div>
          <br />
          <div className="resumes">
            <div className="resume1">
              <div className="pictureResume">
                <img src={ydpd} id="imageResume" alt="resumePicture"></img>
              </div>
              <div className="yearResume">June, 2019 - Now</div>
              <div className="bodyResume">
                INTERNATIONAL RELATIONS MANAGER IN YOUTH
                <br /> DIALOGUE FOR PEACE AND DEVELOPMENT (YDPD)
              </div>
            </div>
            <div className="resume1">
              <div className="pictureResume">
                <img src={genesis} id="imageResume" alt="resumePicture"></img>
              </div>
              <div className="yearResume">November, 2017 - Now</div>
              <div className="bodyResume">Co-founder at GENESIS Initiative</div>
            </div>
            <div className="resume1">
              <div className="pictureResume">
                <img src={allybase} id="imageResume" alt="resumePicture"></img>
              </div>
              <div className="yearResume">2017 - Now</div>
              <div className="bodyResume">
                President and Founder <br />
                at ALLYBASE GROUP Limited
              </div>
            </div>
            <div className="resume1">
              <div className="pictureResume">
                <img src={dream} id="imageResume" alt="resumePicture"></img>
              </div>
              <div className="yearResume">2010 - Now</div>
              <div className="bodyResume">Co-founder of Dream Art Limited</div>
            </div>
            <div className="resume1">
              <div className="pictureResume">
                <img src={impano} id="imageResume" alt="resumePicture"></img>
              </div>
              <div className="yearResume">2018 - June 2019</div>
              <div className="bodyResume">Treasurer at Association Impano</div>
            </div>
            <div className="resume1">
              <div className="pictureResume">
                <img src={work} id="imageResume" alt="resumePicture"></img>
              </div>
              <div className="yearResume">2016 -2019</div>
              <div className="bodyResume">
                Officer in charge of information, <br />
                communication and public relation at Kacyiru sector
              </div>
            </div>
            <div className="resume1">
              <div className="pictureResume">
                <img src={tm} id="imageResume" alt="resumePicture"></img>
              </div>
              <div className="yearResume">2017 - 2018</div>
              <div className="bodyResume">
                Secretary at 1Rwanda toastmaster club
              </div>
            </div>
            <div className="resume1">
              <div className="pictureResume">
                <img src={work} id="imageResume" alt="resumePicture"></img>
              </div>
              <div className="yearResume">2016 - 2018</div>
              <div className="bodyResume">
                Officer in charge of information and <br />
                communicationat RICADRWANDA
              </div>
            </div>
            <div className="resume1">
              <div className="pictureResume">
                <img src={pam} id="imageResume" alt="resumePicture"></img>
              </div>
              <div className="yearResume">2016 - 2017</div>
              <div className="bodyResume">
                Chairperson of Pan-African mouvement in <br />
                University of Rwanda, <br />
                college of education, <br />
                Rukara campus
              </div>
            </div>
            <div className="resume1">
              <div className="pictureResume">
                <img src={aylf} id="imageResume" alt="resumePicture"></img>
              </div>
              <div className="yearResume">2016 - 2017</div>
              <div className="bodyResume">
                Vice-coordinator of <br />
                AFRICAN LEADERSHIP YOUTH FORUM (AYLF) in <br />
                University of Rwanda, <br />
                Rukara campus
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="btn1" id="buttons">
            <a
              to="https://twitter.com/AllyNengo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterLogo} alt="logo-twitter" id="logo"></img>Twitter
            </a>
          </div>
          <div className="btn2" id="buttons">
            <a
              to="https://web.facebook.com/el.ally3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookLogo} alt="logo-facebook" id="logo"></img>
              Facebook
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsResume;

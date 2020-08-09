import React, { Component } from "react";
import "./SkillsResume.css";
import Navbar from "../Navbar/Navbar";
import Project from "../project/project";
import sell from "../../pictures/sell.jpg";
import mentor from "../../pictures/mentor.jpg";
import report from "../../pictures/report.jpg";
import vote from "../../pictures/vote.png";
import ydpd from "../../pictures/ydpd.jpg";
import genesis from "../../pictures/genesis.jpg";
import allybase from "../../pictures/allybase.PNG";
import dream from "../../pictures/dream.png";
import impano from "../../pictures/impano.png";
import work from "../../pictures/work.png";
import aylf from "../../pictures/aylf.jpg";
import pam from "../../pictures/pam.jpg";
import tm from "../../pictures/tm.jpg";
import Footer from "../Footer/Footer";

class SkillsResume extends Component {

  state = {
    blogDetails: [
      {
        picture_project: 'https://i.picsum.photos/id/2/5616/3744.jpg?hmac=l1XcSPFigtRLcO2F6Li-t17EIeylkWH94Oowb4vzApk',
        project_title: "Property-pro-lite",
        project_resume: "It`s an online selling platform",
        link_repository: "https://github.com/Ally4/Property-Pro-Lite",
        link_UI: "https://ally4.github.io/Property-Pro-Lite/UI",
      },
      {
        picture_project:'https://res.cloudinary.com/bomayee/image/upload/v1596798877/portfolio/mentor_yqhkee.jpg',
        project_title: "Mentor",
        project_resume: "Getting a mentor online",
        link_repository: "https://github.com/Ally4/Mentor",
        link_UI: "https://ally4.github.io/Mentor/UI",
      },
      {
        picture_project: 'https://res.cloudinary.com/bomayee/image/upload/v1596798884/portfolio/report_fq1gha.jpg',
        project_title: "Your-voice",
        link_repository: "https://github.com/Ally4/Your-Voice",
      },
      {
        picture_project: 'https://res.cloudinary.com/bomayee/image/upload/v1596798879/portfolio/vote_ee54u9.png',
        project_title: "Your-vote",
        link_repository: "https://github.com/Ally4/Your-Vote",
        link_UI: "https://ally4.github.io/Your-Vote/UI",
      },
      {
        image_resume:"https://res.cloudinary.com/bomayee/image/upload/v1596798879/portfolio/ydpd_t47rjc.jpg",
        year_resume: "June, 2019 - Now",
        body_resume: "INTERNATIONAL RELATIONS MANAGER IN YOUTH DIALOGUE FOR PEACE AND DEVELOPMENT",
      },
      {
        image_resume: "https://res.cloudinary.com/bomayee/image/upload/v1596798884/portfolio/genesis_wevhso.jpg",
        year_resume: "November, 2017 - Now",
        body_resume: "Co-founder at GENESIS Initiative",
      },
      {
        image_resume: "https://res.cloudinary.com/bomayee/image/upload/v1596798874/portfolio/allybase_pio1on.png",
        year_resume: "2017 - Now",
        body_resume: "President and Founder at ALLYBASE GROUP Limited",
      },
      {
        image_resume: "https://res.cloudinary.com/bomayee/image/upload/v1596798874/portfolio/dream_zdxuao.png",
        year_resume: "2010 - Now",
        body_resume: "Co-founder of Dream Art Limited",
      },
      {
        image_resume: "https://res.cloudinary.com/bomayee/image/upload/v1596798876/portfolio/impano_znuwyt.png",
        year_resume: "2018 - June 2019",
        body_resume: "Treasurer at Association Impano",
      },
      {
        image_resume: "https://res.cloudinary.com/bomayee/image/upload/v1596798879/portfolio/work_qpgt9w.png",
        year_resume: "2016 - 2019",
        body_resume: "Officer in charge of information, communication and public relation at Kacyiru sector",
      },
      {
        image_resume: "https://res.cloudinary.com/bomayee/image/upload/v1596798881/portfolio/tm_sqvvox.jpg",
        year_resume: "2017 - 2018",
        body_resume: "Secretary at 1Rwanda toastmaster club",
      },
      {
        image_resume: "https://res.cloudinary.com/bomayee/image/upload/v1596798879/portfolio/work_qpgt9w.png",
        year_resume: "2016 - 2018",
        body_resume: "Officer in charge of information and communicationat RICADRWANDA",
      },
      {
        image_resume: "https://res.cloudinary.com/bomayee/image/upload/v1596798877/portfolio/pam_knmzgu.jpg",
        year_resume: "2016 - 2017",
        body_resume: "Chairperson of Pan-African mouvement in University of Rwanda, college of education, Rukara campus",
      },
      {
        image_resume: "https://res.cloudinary.com/bomayee/image/upload/v1596798874/portfolio/aylf_hjv2ne.jpg",
        year_resume: "2016 - 2017",
        body_resume: "Vice-coordinator of AFRICAN LEADERSHIP YOUTH FORUM (AYLF) in University of Rwanda, Rukara campus",
      },
    ],
  };


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





          {/* {this.state.blogDetails.map((iterate, index) => (
            <Project key={index} picture_project={iterate.picture_project} project_title={iterate.project_title} project_resume={iterate.project_resume} link_repository={iterate.link_repository} link_UI={iterate.link_UI}/>
          ))} */}



            {/* <div className="project1">
              <div className="pictureProject">
                <img src={sell} id="imageProject" alt="projectPicture"></img>
              </div>
              <div className="projectTitle">Property-pro-lite</div>
              <div className="projectResume">It`s an online selling platform</div>
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
                <Link
                  to=" https://ally4.github.io/Property-Pro-Lite/UI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  User-Interface
                </Link>
              </div>
            </div> */}






            {/* <div className="project1">
              <div className="pictureProject">
                <img src={mentor} id="imageProject" alt="projectPicture"></img>
              </div>
              <div className="projectTitle">Mentor</div>
              <div className="projectResume">Getting a mentor online</div>
              <div className="projectResume">
                <Link
                  to="https://github.com/Ally4/Mentor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository
                </Link>
              </div>
              <div className="projectResume">
                <Link
                  to="https://ally4.github.io/Mentor/UI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  User-Interface
                </Link>
              </div>
            </div> */}
            {/* <div className="project1">
              <div className="pictureProject">
                <img src={report} id="imageProject" alt="projectPicture"></img>
              </div>
              <div className="projectTitle">Your-voice</div>
              <div className="projectResume">
                It`s an online reporting platform
              </div>
              <div className="projectResume">
                <Link
                  to="https://github.com/Ally4/Your-Voice"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository
                </Link>
              </div>
            </div> */}
            {/* <div className="project1">
              <div className="pictureProject">
                <img src={vote} id="imageProject" alt="projectPicture"></img>
              </div>
              <div className="projectTitle">Your-vote</div>
              <div className="projectResume">
                It`s an online voting platform
              </div>
              <div className="projectResume">
                <Link
                  to="https://github.com/Ally4/Your-Vote"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository
                </Link>
              </div>
              <div className="projectResume">
                <Link
                  to="https://ally4.github.io/Your-Vote/UI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  User-Interface
                </Link>
              </div>
            </div> */}
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
              <div className="yearResume">2016 - 2019</div>
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
        <Footer />
      </div>
    );
  }
}

export default SkillsResume;

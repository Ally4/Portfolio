import React, { Component } from 'react';
import Navbar from './Navbar';
import homePicture from '../pictures/44980855102_a4c36d142a_o.jpg';
import aboutPicture from '../pictures/23663827635_68326e7357_k.jpg';
import blogPicture from '../pictures/6a01157041f4e3970b01b7c82eb758970b-320wi.png';
import facebookLogo from '../pictures/iconmonstr-facebook-2-240.png';
import twitterLogo from '../pictures/iconmonstr-twitter-2-240.png';
import aylf from '../pictures/aylf.jpg';
import allybase from '../pictures/allybase.PNG';
import dream from '../pictures/dream.png';
import genesis from '../pictures/genesis.jpg';
import impano from '../pictures/impano.png';
import pam from '../pictures/pam.jpg';
import tm from '../pictures/tm.jpg';
import ydpd from '../pictures/ydpd.jpg';
import work from '../pictures/work.png';
import mentor from '../pictures/mentor.jpg';
import report from '../pictures/report.jpg';
import sell from '../pictures/sell.jpg';
import vote from '../pictures/vote.png';


class Home extends Component {
    render() {
        return (
            <body>
            <Navbar />
    <div className="container">
            <div className="information">
                <div className="introduction">
                    <div className="cont">
                <span className="span-color" >Hello!. </span>
            I`m <span className="span-color">Nengo Ally </span>
             a <span className="span-color">software developer </span>
            and <span className="span-color">public-speaker.</span>
            </div>
                </div>                
                <div className="introduction">
                    <img className="picture" src={homePicture} alt="home" />
                </div>
                <div className="introduction">
                    <img className="picture" src={aboutPicture} alt="about" />
                </div>
                <div className="introduction">
                     <div className="subcontent about">
                <div className="about">
                    <div className="about1">About me</div>
                    <div className="about2">About me</div>
                </div>
                <div className="smallIntro" >A multifarious person and a life long learner</div>
                <div className="name">
                    <div className="name1">Name:</div>
                    <div className="name2">NENGO Ally</div>
                </div>
                <div className="bday">
                    <div className="bday1">Date of birth:</div>
                    <div className="bday2">December 12, 1993</div>
                </div>
                <div className="address">
                    <div className="address1">Address</div>
                    <div className="address2">Rwanda, Kigali, Gasabo</div>
                </div>
                <div className="zipcode">
                    <div className="zipcode1">Zipcode:</div>
                    <div className="zipcode2">+(250)</div>
                </div>
                <div className="email">
                    <div className="email1">Email:</div>
                    <div className="email2">El.ally741@gmail.com</div>
                </div>
                <div className="phone">
                    <div className="phone1">Telephone:</div>
                    <div className="phone2">+(250)784403223</div>
                </div>
            </div>
                </div>
        </div>
    </div>

    <div className="containerEducation">
                <div className="Education">
                    <div className="head1">educations</div>
                    <div className="head2">educations</div>
                </div>
                <div className="smallIntroEducation" >Education background</div><br/>
                <div className="paragraph"><p>Ally is a human by default, a teach by accident but loving the experience and all the related aspect of it, developer by choice and love, a life-long learn for the adaptability on the change, He vehemently believe that the greatest mission of a person in this world is to leave it better in all the aspects than how he found it!.</p></div>
                <div className="Educations">
                <div className="Education1">
                    <div className="pictureEducation">
                    <div className="year">2013 - 2017</div>
                    <div className="degree">Associate diploma in education</div>
                    <div className="institution">University of Rwanda</div>
                    <div className="bodyEducation">College of education, Rukara campus,<br/> faculty of education, department of sciences,<br/> option of mathematic and computer-science. </div>
                    </div>
                </div>
                <div className="Education1">
                    <div className="pictureEducation">
                    <div className="year">2010 - 2012</div>
                    <div className="degree">Secondary school diploma</div>
                    <div className="institution">Gisenyi Adventist Secondary School (GASS)</div>
                    <div className="bodyEducation">The combination is mathematic, physic and computer-science.</div>
                    </div>
                </div>
                <div className="Education1">
                    <div className="pictureEducation">
                    <div className="year">2009</div>
                    <div className="degree">Ordinary level</div>
                    <div className="institution">Ecole Secondaire Islamique de Gisenyi (ESIG)</div>
                    <div className="bodyEducation">This is the half of the secondary journey.</div>
                    </div>
                </div>
                </div>
            </div>
    <div className="containerSkills-Resume">
                <div className="Skills-Resume">
                    <div className="head1">Skills and Resume</div>
                    <div className="head2">Skills and Resume</div>
                </div>
                <div className="smallIntroSkills-Resume" >Here are the skills and working experience gained overtime.</div><br/>
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
                        <div className="skill">Film(Directing, Acting, editing, writing)</div>
                    </div>
                </div>
                    <div className="smallIntroSkills-Resume-lang">Languages <span className="lang">(speaking, listening, understanding)</span></div>    
                <div className="Skills-Resumes">
                <div className="Skills-Resume1">
                        <div className="skill-lang">Kinyarwanda(mother tongue)</div>
                        <div className="skill-lang">English</div>
                        <div className="skill-lang">French</div>
                        <div className="skill-lang">Swahili</div>
                    </div>
                </div>
            </div>
            <div className="containerProject">
                <div className="project">
                    <div className="head1">Projects</div>
                </div>
                <div className="smallIntroProject" >Here are Ally`s worked on projects </div><br/>
                <div className="projects">
                <div className="project1">
                    <div className="pictureProject"><img src={sell} id="imageProject" alt="projectPicture"></img></div>
                    <div className="projectTitle">Property-pro-lite</div>
                    <div className="projectResume">It`s an online platform</div>
                    <div className="projectResume"><a href="https://github.com/Ally4/Property-Pro-Lite" target="blank">Repository</a></div>
                    <div className="projectResume"><a href=" https://ally4.github.io/Property-Pro-Lite/UI" target="blank">User-Interface</a></div>
                </div>
                <div className="project1">
                    <div className="pictureProject"><img src={mentor} id="imageProject" alt="projectPicture"></img></div>
                    <div className="projectTitle">Mentor</div>
                    <div className="projectResume">Getting a mentor online</div>
                    <div className="projectResume"><a href="https://github.com/Ally4/Mentor" target="blank">Repository</a></div>
                    <div className="projectResume"><a href="https://ally4.github.io/Mentor/UI" target="blank">User-Interface</a></div>
                </div>
                <div className="project1">
                    <div className="pictureProject"><img src={report} id="imageProject" alt="projectPicture"></img></div>
                    <div className="projectTitle">Your-voice</div>
                    <div className="projectResume">It`s an online reprting platform</div>
                    <div className="projectResume"><a href="https://github.com/Ally4/Your-Voice" target="blank">Repository</a></div>
                </div>
                <div className="project1">
                    <div className="pictureProject"><img src={vote} id="imageProject" alt="projectPicture"></img></div>
                    <div className="projectTitle">Your-vote</div>
                    <div className="projectResume">It`s an online voting platform</div>
                    <div className="projectResume"><a href="https://github.com/Ally4/Your-Vote" target="blank">Repository</a></div>
                    <div className="projectResume"><a href="https://ally4.github.io/Your-Vote/UI" target="blank">User-Interface</a></div>
                </div>
                </div>
            </div>
            <div className="containerResume">
                <div className="resume">
                    <div className="head1">Resume</div>
                    <div className="head2">Resume</div>
                </div>
                <div className="smallIntroResume" >Here are Ally`s working experience</div><br/>
                <div className="resumes">
                <div className="resume1">
                    <div className="pictureResume"><img src={ydpd} id="imageResume" alt="resumePicture"></img></div>
                    <div className="yearResume">June, 2019 - Now</div>
                    <div className="bodyResume">INTERNATIONAL RELATIONS MANAGER IN YOUTH<br/> DIALOGUE FOR PEACE AND DEVELOPMENT (YDPD)</div>
                </div>
                <div className="resume1">
                    <div className="pictureResume"><img src={genesis} id="imageResume" alt="resumePicture"></img></div>
                    <div className="yearResume">November, 2017 - Now</div>
                    <div className="bodyResume">Co-founder at GENESIS Initiative</div>
                </div>
                <div className="resume1">
                    <div className="pictureResume"><img src={allybase} id="imageResume" alt="resumePicture"></img></div>
                    <div className="yearResume">2017 - Now</div>
                    <div className="bodyResume">President and Founder <br/>at ALLYBASE GROUP Limited</div>
                </div>
                <div className="resume1">
                    <div className="pictureResume"><img src={dream} id="imageResume" alt="resumePicture"></img></div>
                    <div className="yearResume">2010 - Now</div>
                    <div className="bodyResume">Co-founder of Dream Art Limited</div>
                </div>
                <div className="resume1">
                    <div className="pictureResume"><img src={impano} id="imageResume" alt="resumePicture"></img></div>
                    <div className="yearResume">2018 - June 2019</div>
                    <div className="bodyResume">Treasurer at Association Impano</div>
                </div>
                <div className="resume1">
                    <div className="pictureResume"><img src={work} id="imageResume" alt="resumePicture"></img></div>
                    <div className="yearResume">2016 -2019</div>
                    <div className="bodyResume">Officer in charge of information, <br/>communication and public relation at Kacyiru sector</div>
                </div>
                <div className="resume1">
                    <div className="pictureResume"><img src={tm} id="imageResume" alt="resumePicture"></img></div>
                    <div className="yearResume">2017 - 2018</div>
                    <div className="bodyResume">Secretary at 1Rwanda toastmaster club</div>
                </div>
                <div className="resume1">
                    <div className="pictureResume"><img src={work} id="imageResume" alt="resumePicture"></img></div>
                    <div className="yearResume">2016 - 2018</div>
                    <div className="bodyResume">Officer in charge of information and <br/>communicationat RICADRWANDA</div>
                </div>
                <div className="resume1">
                    <div className="pictureResume"><img src={pam} id="imageResume" alt="resumePicture"></img></div>
                    <div className="yearResume">2016 - 2017</div>
                    <div className="bodyResume">Chairperson of Pan-African mouvement in <br/>University of Rwanda, <br/>college of education, <br/>Rukara campus</div>
                </div>
                <div className="resume1">
                    <div className="pictureResume"><img src={aylf} id="imageResume" alt="resumePicture"></img></div>
                    <div className="yearResume">2016 - 2017</div>
                    <div className="bodyResume">Vice-coordinator of <br/>AFRICAN LEADERSHIP YOUTH FORUM (AYLF) in <br/>University of Rwanda, <br/>Rukara campus</div>
                </div>
                </div>
            </div>
    <div className="containerBlog">
                <div className="blog">
                    <div className="head1">Blogs</div>
                    <div className="head2">Blogs</div>
                </div>
                <div className="smallIntroBlog" >Here are Ally`s blogs</div><br></br>
                <div className="blogs">
                <div className="blog1">
                    <div className="pictureBlog"><img src={blogPicture} id="imageBlog" alt="blogPicture"></img></div>
                    <div className="titleBlog">Tech and people</div>
                    <div className="bodyBlog">The behaviour that people have regarding ...</div>
                </div>
                <div className="blog1">
                    <div className="pictureBlog"><img src={blogPicture} id="imageBlog" alt="blogPicture"></img></div>
                    <div className="titleBlog">Tech and people</div>
                    <div className="bodyBlog">The behaviour that people have regarding ...</div>
                </div>
                <div className="blog1">
                    <div className="pictureBlog"><img src={blogPicture} id="imageBlog" alt="blogPicture"></img></div>
                    <div className="titleBlog">Tech and people</div>
                    <div className="bodyBlog">The behaviour that people have regarding ...</div>
                </div>
                <div className="blog1">
                    <div className="pictureBlog"><img src={blogPicture} id="imageBlog" alt="blogPicture"></img></div>
                    <div className="titleBlog">Tech and people</div>
                    <div className="bodyBlog">The behaviour that people have regarding ...</div>
                </div>
                <div className="blog1">
                    <div className="pictureBlog"><img src={blogPicture} id="imageBlog" alt="blogPicture"></img></div>
                    <div className="titleBlog">Tech and people</div>
                    <div className="bodyBlog">The behaviour that people have regarding ...</div>
                </div>
                <div className="blog1">
                    <div className="pictureBlog"><img src={blogPicture} id="imageBlog" alt="blogPicture"></img></div>
                    <div className="titleBlog">Tech and people</div>
                    <div className="bodyBlog">The behaviour that people have regarding ...</div>
                </div>
                <div className="blog1">
                    <div className="pictureBlog"><img src={blogPicture} id="imageBlog" alt="blogPicture"></img></div>
                    <div className="titleBlog">Tech and people</div>
                    <div className="bodyBlog">The behaviour that people have regarding ...</div>
                </div>
                <div className="blog1">
                    <div className="pictureBlog"><img src={blogPicture} id="imageBlog" alt="blogPicture"></img></div>
                    <div className="titleBlog">Tech and people</div>
                    <div className="bodyBlog">The behaviour that people have regarding ...</div>
                </div>
                </div>
            </div>
        <div className="footer">
            <div class="btn1" id="buttons"><a href="https://twitter.com/AllyNengo" target="blank"><img src={twitterLogo} alt="logo-twitter" id="logo"></img>Twitter</a></div>
            <div class="btn2" id="buttons"><a href="https://web.facebook.com/el.ally3/" target="blank"><img src={facebookLogo} alt="logo-facebook" id="logo"></img>Facebook</a></div>
        </div>
    </body>
        )
    }
}

export default Home;
import React, { Component, Fragment } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import homePicture from "../../pictures/44980855102_a4c36d142a_o.jpg";
import aboutPicture from "../../pictures/23663827635_68326e7357_k.jpg";
import Footer from "../Footer/Footer";
class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container" id="home">
          <div className="information">
            <div className="introduction">
              <div className="cont">
                <span className="span-color">Hello!. </span>
                I`m <span className="span-color">Nengo Ally </span>a{" "}
                <span className="span-color">software developer </span>
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
                <div className="smallIntro">
                  A multifarious person and a life long learner
                </div>
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
        <Footer />
      </Fragment>
    );
  }
}

export default Home;

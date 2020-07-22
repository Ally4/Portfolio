import React, { Component } from 'react';
import Navbar from './Navbar';
import homePicture from '../pictures/44980855102_a4c36d142a_o.jpg';
import aboutPicture from '../pictures/23663827635_68326e7357_k.jpg';
import blogPicture from '../pictures/6a01157041f4e3970b01b7c82eb758970b-320wi.png';
import facebookLogo from '../pictures/iconmonstr-facebook-2-240.png';
import twitterLogo from '../pictures/iconmonstr-twitter-2-240.png';
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
    <div className="containerBlog">
                <div className="blog">
                    <div className="head1">Blogs</div>
                    <div className="head2">Blogs</div>
                </div>
                <div className="smallIntroBlog" >Here are Ally`s blogs</div><br></br>
                <div className="blogs">
                <div className="blog1">
                    <div className="pictureBlog"><img src={blogPicture} id="imageBlog"></img></div>
                    <div className="titleBlog">Tech and people</div>
                    <div className="bodyBlog">The behaviour that people have regarding ...</div>
                </div>
                <div className="blog1">
                    <div className="pictureBlog"><img src={blogPicture} id="imageBlog"></img></div>
                    <div className="titleBlog">Tech and people</div>
                    <div className="bodyBlog">The behaviour that people have regarding ...</div>
                </div>
                <div className="blog1">
                    <div className="pictureBlog"><img src={blogPicture} id="imageBlog"></img></div>
                    <div className="titleBlog">Tech and people</div>
                    <div className="bodyBlog">The behaviour that people have regarding ...</div>
                </div>
                <div className="blog1">
                    <div className="pictureBlog"><img src={blogPicture} id="imageBlog"></img></div>
                    <div className="titleBlog">Tech and people</div>
                    <div className="bodyBlog">The behaviour that people have regarding ...</div>
                </div>
                <div className="blog1">
                    <div className="pictureBlog"><img src={blogPicture} id="imageBlog"></img></div>
                    <div className="titleBlog">Tech and people</div>
                    <div className="bodyBlog">The behaviour that people have regarding ...</div>
                </div>
                <div className="blog1">
                    <div className="pictureBlog"><img src={blogPicture} id="imageBlog"></img></div>
                    <div className="titleBlog">Tech and people</div>
                    <div className="bodyBlog">The behaviour that people have regarding ...</div>
                </div>
                <div className="blog1">
                    <div className="pictureBlog"><img src={blogPicture} id="imageBlog"></img></div>
                    <div className="titleBlog">Tech and people</div>
                    <div className="bodyBlog">The behaviour that people have regarding ...</div>
                </div>
                <div className="blog1">
                    <div className="pictureBlog"><img src={blogPicture} id="imageBlog"></img></div>
                    <div className="titleBlog">Tech and people</div>
                    <div className="bodyBlog">The behaviour that people have regarding ...</div>
                </div>
                </div>
            </div>
        <div className="footer">
            <div class="btn1" id="buttons"><a href="https://twitter.com/AllyNengo"><img src={twitterLogo} alt="logo-twitter" id="logo"></img>Twitter</a></div>
            <div class="btn2" id="buttons"><a href="https://web.facebook.com/el.ally3/"><img src={facebookLogo} alt="logo-facebook" id="logo"></img>Facebook</a></div>
        </div>
    </body>
        )
    }
}

export default Home;
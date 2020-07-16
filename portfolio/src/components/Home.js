import React, { Component } from 'react';
import Navbar from '../layouts/Navbar';
import home from '../44980855102_a4c36d142a_o.jpg'

class Home extends Component {
    render() {
        return (
            <body>
            <Navbar />
        <div className="content">
            <div className="subcontent">
                <div className="cont">
            Hello!.<br/>
            I`m Nengo Ally<br/>
            a software developer<br/>
            and public-speaker based<br/>
            in Kigali.<br/>
            <br/>
            If you want to hire me, <br/>
            you are just a call or mail away.<br/>
                </div>
            </div>
            <div className="sidebar">
                <div className="size"><img src={home} id="size"></img></div>
            </div>
        </div>
        <div className="footer">
            <h3>contact me:</h3>
        <div class="btn" id="buttons"><a href="#">Mail</a></div>
            <div class="btn" id="buttons"><a href="#">Twitter</a></div>
            <div class="btn" id="buttons"><a href="#">Facebook</a></div>
        </div>
    </body>
        )
    }
}

export default Home;
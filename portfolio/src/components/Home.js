import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <span style={{color:"#F3C00A"}}>Hello!.</span>
            I`m <span style={{color:"#F3C00A"}}>Nengo Ally</span>
            a <span style={{color:"#F3C00A"}}>software developer</span>
            and <span style={{color:"#F3C00A"}}>public-speaker</span> based
            in Kigali.
            If you want to <span style={{color:"#F3C00A"}}>hire</span> me, 
            you are just a <span style={{color:"#F3C00A"}}>call or mail away.</span>
            <div className="clicks">
            <div  className="clicks1"><a href="#">Hire me</a></div> 
            <div  className="clicks2"><a href="#">My work</a></div>
            </div>
                </div>
            </div>
            <div className="sidebar">
                <div className="size"><img src={home} id="size"></img></div>
            </div>
        </div>
        <div className="footer">
            <h3>contact me:</h3>
        <div class="btn" id="buttons"><a href="#">	&#x2709;Mail</a></div>
            <div class="btn" id="buttons"><a href="#">&#xf099;Twitter</a></div>
            <div class="btn" id="buttons"><a href="#">&#xf230;Facebook</a></div>
        </div>
    </body>
        )
    }
}

export default Home;
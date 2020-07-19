import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
        <div className="navbar">
            <div ><h2>Ally</h2></div>
            <div class="btn" id="buttons"><a href="#"  style={{color:"#F3C00A"}}>Home</a></div>
            <div class="btn" id="buttons"><a href="#">About</a></div>
            <div class="btn" id="buttons"><a href="#">Education</a></div>
            <div class="btn" id="buttons"><a href="#">Resume</a></div>
            <div class="btn" id="buttons"><a href="#">Blog</a></div>
            <div class="btn" id="buttons"><a href="#">Contact</a></div>
        </div>
        )
    }
}

export default Navbar;
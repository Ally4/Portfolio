import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
        <div className="navbar">
            <div class="btn" id="buttons"><a href="#"  style={{color:"#F3C00A"}}>Home</a></div>
            <div class="btn" id="buttons"><a href="#">Education</a></div>
            <div class="btn" id="buttons"><a href="#">Skills&Resume</a></div>
            <div class="btn" id="buttons"><a href="#">Blog</a></div>
            <div class="btn" id="buttons"><a href="#">Contact</a></div>
            <drawerToggleButton/>
        </div>
        )
    }
}

export default Navbar;
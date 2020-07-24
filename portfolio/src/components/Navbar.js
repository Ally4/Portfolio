import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="fix-nav">
        <div className="navbar">
            <div className="btn" id="buttons"><a href="#home">Home</a></div>
            <div className="btn" id="buttons"><a href="#education">Education</a></div>
            <div className="btn" id="buttons"><a href="#resume">Skills&Resume</a></div>
            <div className="btn" id="buttons"><a href="#blog">Blog</a></div>
            <div className="btn" id="buttons"><a href="#contact">Contact</a></div>
        </div>
        </div>
        )
    }
}

export default Navbar;
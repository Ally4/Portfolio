import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Education from './Education';
import SkillsResume from './SkillsResume';
import Blogs from './Blogs';
import Contact from './Contact';

class Navbar extends Component {
    render() {
        return (
            <div className="fix-nav">
        <div className="navbar">
            <div className="btn" id="buttons"><Link to="/">Home</Link></div>
            <div className="btn" id="buttons"><Link to="/education">Education</Link></div>
            <div className="btn" id="buttons"><Link to="/skills&resume&projects">Skills&Resume</Link></div>
            <div className="btn" id="buttons"><Link to="/blogs">Blog</Link></div>
            <div className="btn" id="buttons"><Link to="/contact">Contact</Link></div>
        </div>
        </div>
        )
    }
}

export default Navbar;

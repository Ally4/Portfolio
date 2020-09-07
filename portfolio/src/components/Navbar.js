import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="fix-nav">
        <div className="navbar">
            <div className="btn" id="buttons"><Link to="/">HOME</Link></div>
            <div className="btn" id="buttons"><Link to="/education">EDUCATION</Link></div>
            <div className="btn" id="buttons"><Link to="/skills&resume&projects">SKILLS&RESUME</Link></div>
            <div className="btn" id="buttons"><Link to="/blogs">BLOG</Link></div>
            <div className="btn" id="buttons"><Link to="/contact">CONTACT</Link></div>
        </div>
        </div>
        )
    }
}

export default Navbar;

import React, { Component } from 'react';
import "./Control.css";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";

class Control extends Component {
    render() {
        return (
            <div>
                <NavbarAdmin />   
                <div className="control_panel">
                    <div className="control_list"></div>
                    <div className="control_items"></div>
                </div>             
            </div>
        )
    }
}

export default Control;

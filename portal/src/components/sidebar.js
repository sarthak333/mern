import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/sidebar.scss";

class Sidebar extends Component {
    state = {
        currentPage:'',
        currentUser:''
    }

    render(){
        return(
            <div className="Sidebar">
            <p>sidebar</p>
            </div>
        );
    }
}

export default Sidebar;
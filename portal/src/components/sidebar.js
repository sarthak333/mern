import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/sidebar.scss";

class Sidebar extends Component {
  state = {
    currentPage: '',
    currentUser: ''
  }

  render() {
    return (
      <div className="Sidebar" style={{ width: (this.props.display ? '18vw' : 0) }}>
        <div style={{ opacity: (this.props.display ? 1 : 0) }} className="sidebar-content">
          <div className="user-image"></div>
          <h1>UserName</h1>
          <div className="option-list">
            <div className="option">Options</div>
            <div className="option">Lists</div>
            <div className="option">Assets</div>
            <div className="option">Activities</div>
            <div className="option">Settings</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
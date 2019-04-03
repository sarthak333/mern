import React, { Component } from 'react';
import '../styles/topbar.scss'

class Topbar extends Component {
    state={
        currentPage:'',
        currentUser:'',
        loggedIn:''
    }

    render(){
        return(
            <div className="Topbar">
            topbar
            </div>
        )
    }
}

export default Topbar;
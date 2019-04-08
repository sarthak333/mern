import React, { Component } from 'react';
import '../styles/topbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NotificationBox from './NotificationBox.js'

class Topbar extends Component {
    state = {
        currentPage: '',
        currentUser: '',
        loggedIn: '',
        notificationCount: 1,
        notify: false
    }

    render() {
        return (
            <div className="Topbar" style={{ width: (this.props.display ? '77vw' : '100vw'), marginLeft: (this.props.display ? '18vw' : '0vw') }}>
                <div className="shift-right" style={{ width: (this.props.display ? '77vw' : '95vw'),marginLeft: (this.props.display ? '18vw' : '0vw') }}>
                    <div className="icon-container" >
                        <FontAwesomeIcon 
                        onClick={()=>this.setState({notify: !this.state.notify})} 
                        icon="dot-circle" className="icon notification" 
                        style={{ color: (this.state.notificationCount ? '#ff0a0a' : '#a80000') }} />
                        {
                            (this.state.notificationCount)?
                            <NotificationBox notify={this.state.notify}/>
                            :
                            ''
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Topbar;
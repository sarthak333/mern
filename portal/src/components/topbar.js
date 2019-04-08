import React, { Component } from 'react';
import '../styles/topbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Topbar extends Component {
    state = {
        currentPage: '',
        currentUser: '',
        loggedIn: '',
        notificationCount: 0
    }

    render() {
        return (
            <div className="Topbar" style={{ width: (this.props.display ? '77vw' : '100vw'), marginLeft: (this.props.display ? '18vw' : '0vw') }}>
                <div className="icon-container" style={{ width: (this.props.display ? '77vw' : "95vw"), marginLeft: (this.props.display ? '18vw' : '0vw') }}>
                    <FontAwesomeIcon icon="dot-circle" className="icon notification" style={{ color: (this.state.notificationCount ? '#ff0a0a' : '#a80000') }} />
                </div>
            </div>
        )
    }
}

export default Topbar;
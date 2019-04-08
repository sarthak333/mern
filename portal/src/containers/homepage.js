import React, { Component } from 'react';
import '../styles/homepage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class HomePage extends Component {

    state = {
        default: ''
    }

    render() {
        return (
            <div className="homepage-container">
                <h1>Welcome, user</h1>
                <div className="task-container">
                    <div className="task-child">
                        <FontAwesomeIcon icon="folder" className="icon folder" />
                        <p>Files Manager</p>
                    </div>
                    <div className="task-child">
                        <FontAwesomeIcon icon="headphones" className="icon music" />
                        <p>Music</p>
                    </div>
                    <div className="task-child">
                        <FontAwesomeIcon icon="comments" className="icon conversation" />
                        <p>Messages</p>
                    </div>
                </div>
                <div className="task-container">
                    <div className="task-child">
                        <FontAwesomeIcon icon="code" className="icon work" />
                        <p>Code</p>
                    </div>
                    <div className="task-child">
                        <FontAwesomeIcon icon="random" className="icon random" />
                        <p>Meh..</p>
                    </div>
                    <div className="task-child">
                        <FontAwesomeIcon icon="ellipsis-h" className="icon options" />
                        <p>More</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
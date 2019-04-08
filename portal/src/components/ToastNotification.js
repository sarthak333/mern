import React from 'react';
import '../styles/toasty.scss'

const ToastNotification= (props) =>{
    return(
        <div className="toasty">
            <p>{props.content}</p>
        </div>
    );
}

export default ToastNotification;
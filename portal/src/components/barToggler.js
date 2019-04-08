import React, { Component } from 'react';
import '../styles/toggler.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class barToggler extends Component {
    
 handleClick=()=>{
    this.props.toggle();
}
render(){
    return(
        <div onClick={()=>this.handleClick()} className="toggler" style={{marginLeft: (this.props.display? '16.5vw':'0.5vw'), }}>
        <div className="toggle-container">
        {
            (this.props.display)?
            <FontAwesomeIcon icon="angle-left" />
            :
            <FontAwesomeIcon icon="angle-right" />
        }
        
        </div>
        </div>
    )
}
}
export default barToggler;
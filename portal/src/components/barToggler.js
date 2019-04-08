import React, { Component } from 'react';
import '../styles/toggler.scss';

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
            '<-'
            :
            '->'
        }
        
        </div>
        </div>
    )
}
}
export default barToggler;
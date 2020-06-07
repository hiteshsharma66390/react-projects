import React from 'react';
import './Button.css';

class Button extends React.Component{
    isOperator= val =>{
        return (!isNaN(val) || val==="=" || val==="C");
    }
    render(){
        return(
                <div className={`Button ${this.isOperator(this.props.children) ? "":"operator"}`}
                    onClick={() => this.props.handleClick(this.props.children)}>
                    {this.props.children}
                </div>
        );
    }
}

export default Button;
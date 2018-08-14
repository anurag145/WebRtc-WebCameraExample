import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './Button.css'
import {connect} from 'react-redux';
class RaisedButton extends Component
{
    render(){
        return (
            <div className='Button'>
            <Button variant='raised' 
            color="primary"
            onClick={this.props.clicked}>
            {this.props.buttonState?"Stop": "Play"}
            </Button>
            </div>
            );
    }
}

const mapStateToProps =state=>{
    return{
        buttonState: state.buttonState
    }
}


export default connect(mapStateToProps)(RaisedButton);

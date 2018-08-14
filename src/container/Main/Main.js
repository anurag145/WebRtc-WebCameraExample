import React,{Component} from 'react';
import Button from '../Button/Button';
import Video from '../VideoElement/VideoElement';
import {connect} from 'react-redux';
import './Main.css';
import * as actions from '../../store/index';
class Main extends Component{
    
  
    onClickHandler=()=>{
        
        if(this.props.buttonState)
        {
           this.props.onStop();
        }else{
            this.startService();
             
        }
    }
    startService=()=>{
       this.props.onPlay();
    
}
    
    componentDidMount()
    {
         this.startService();
    }
    render(){
        
        let mainDisplay=<p className={'display'}>Waiting for permission...</p>;
            if(this.props.Permission)  
           mainDisplay=<div className={"content"}>
           <div style={{fontSize:"2em"}}>DEMO</div>
           <div className={'video'} >
           {(this.props.buttonState)?<Video src={this.props.mediaStream}/>:null}  
            </div>
             <div className={'buttondiv'}><Button clicked={this.onClickHandler} /></div>
          </div>
           
         
         
       
          return mainDisplay;
         
    }
}
const mapStateToProps=state=>{
    return {
        
        mediaStream:state.mediaStream,
        Permission:state.Permission,
        buttonState:state.buttonState
    }
}
const mapsDispatchToProps=dispatch=>{
    return {
        onStop: ()=>dispatch(actions.stopConnection()),
        onPlay: (mediaStream)=>dispatch(actions.playConnection(mediaStream))
    }
}
export default connect(mapStateToProps,mapsDispatchToProps)(Main);
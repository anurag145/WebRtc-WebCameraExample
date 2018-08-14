import React,{Component} from 'react';

class VideoElement extends Component{
    componentDidMount(){
        if(this.props.src)
        this.video.srcObject=this.props.src;
        
    }

    render(){
        return <video ref={ref=>{this.video=ref;}} autoPlay playsInline></video>
    
    }
} 
export default VideoElement;
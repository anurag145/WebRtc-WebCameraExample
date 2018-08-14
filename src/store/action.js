import * as actionTypes from './actionTypes';
export const stopConnection=()=>{
    console.log("i am 1");

    return{
    type:actionTypes.STOP_CONNECTION
}
}


export const playConnection=(mediaStream)=>{
      
       return {
           type:actionTypes.PLAY_CONNECTION,
           mediaStream:mediaStream
       }
    }
    
    
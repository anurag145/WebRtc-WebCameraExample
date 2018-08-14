import * as actionTypes from './actionTypes';
import UpdateObject from './utility';
const initialState={
    mediaStream:null,
    buttonState: true,
    Permission:false
}
const stopConnection=(state)=>{
    const UpdateMediaStream = state.mediaStream
        UpdateMediaStream.getTracks().forEach(track => {
           track.stop(); 
        });
    return UpdateObject(state,{mediaStream:UpdateMediaStream,buttonState:false});
        
}

const playConnection=(state,action)=>{
    console.log(action.mediaStream);
    return UpdateObject(state,{mediaStream:action.mediaStream,buttonState:true,Permission:true})
}

const reducer=(state=initialState,action)=>{
    console.log("hello I am here");
     switch(action.type)
     {
         case actionTypes.STOP_CONNECTION:
         console.log("I am 23");
         return stopConnection(state,action);
         case actionTypes.PLAY_CONNECTION:
         console.log("I am 3");
         return playConnection(state,action);
            
         
         default: return state;
     }
    
}
export default reducer;
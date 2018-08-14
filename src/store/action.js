import * as actionTypes from './actionTypes';
export const stopConnection=()=>{
    

    return{
    type:actionTypes.STOP_CONNECTION
}
}
 export const action=(mediaStream)=>{
return{
    type:actionTypes.PLAY_CONNECTION,
    mediaStream:mediaStream
}
 }

export const player=()=>{
 
   return dispatch=>{
    const mediaStreamConstraints = {
        video: true,
      };
      navigator.mediaDevices.getUserMedia(mediaStreamConstraints).then(mediaStream=>{
      
        dispatch(action(mediaStream))
        
      }).catch(err=>{
        console.log(err);
      });
      
      
     
      }
    }

export const playConnection=()=>{
      
       return dispatch=>{
          dispatch(player());
       }
    }
    
    
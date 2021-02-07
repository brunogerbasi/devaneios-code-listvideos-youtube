const SET_STATE = {
    videos: {}            
}


export default function startVideo(state = SET_STATE, action){
    if(action.type === 'START_VIDEO'){ 
        return{
            videos: action.videos
        } 
    }else{
        return state
    }
}

const SET_STATE = {
    videos: [],
    loading: false, 
    error: false
}


export default function search(state = SET_STATE, action){
    switch(action.type){ 
        case 'SEARCH_VIDEO':
            return { 
                videos: [],
                loading: true,
                error: false
            }

        case 'SEARCH_VIDEO_SUCCESS': 
            return {
                videos: action.videos, 
                loading: false,
                error: false
            }

        case 'SEARCH_VIDEO_ERROR': 
            return{
                videos: [],
                loading: false,
                error: true
            }

        default: return state 
    }
}
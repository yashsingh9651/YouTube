import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT, TOGGLE_SIDEBAR } from "../actionType";
const initialState = {
    authToken:localStorage.getItem('authToken')?localStorage.getItem('authToken'):null,
    user:localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null,
    loading:false,
    toggle:false
}
export const authreducer = (previousState=initialState,action)=>{
    const {type,payload} = action;
    switch (type) {
        case LOGIN_REQUEST: return{...previousState,loading:true};
        case LOGIN_SUCCESS: return{...previousState,authToken:payload,loading:false};
        case LOGIN_FAIL: return{...previousState,authToken:null,loading:false,error:payload};
        case LOAD_PROFILE: return{...previousState,user:payload};
        case LOG_OUT: return{...previousState,authToken:null,user:null};
        case TOGGLE_SIDEBAR: return{...previousState,toggle:!previousState.toggle};
        default: return previousState
    }
};
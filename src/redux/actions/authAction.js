import firebase from 'firebase/compat/app';
import auth from '../../firebase';
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT, TOGGLE_SIDEBAR } from '../actionType';
export const login = ()=> async dispatch =>{
try {
    dispatch({type:LOGIN_REQUEST})
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
    const res = await auth.signInWithPopup(provider);
    const authToken=res.credential.accessToken;
    const profile ={
        name:res.additionalUserInfo.profile.name,
        photoUrl:res.additionalUserInfo.profile.picture
    }
    localStorage.setItem("authToken",authToken);
    localStorage.setItem("user",JSON.stringify(profile));
    dispatch({type:LOGIN_SUCCESS,payload:authToken});
    dispatch({type:LOAD_PROFILE,payload:profile});

} catch (error) {
    console.log("error")
    dispatch({type:LOGIN_FAIL,payload:error.message});
}
}
export const logout=()=> async dispatch =>{
    dispatch({type:LOG_OUT})
}
export const toggleSidebar=()=> async dispatch =>{
    dispatch({type:TOGGLE_SIDEBAR})
}
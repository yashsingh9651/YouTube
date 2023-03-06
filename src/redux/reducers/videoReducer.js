import {HOME_VEDIOS_FAIL, HOME_VEDIOS_REQUEST, HOME_VEDIOS_SUCCESS } from "../actionType";

const homeVideoReducer = (state={
vedios:[],
loading:false,
nextPageToken:null,
activeCategory:'ALL'
},action)=>{
    const {type,payload} = action;
    switch(type){
        case HOME_VEDIOS_SUCCESS:return{
            ...state,vedios:state.activeCategory===payload.category?[...state.vedios,...payload.vedios]:payload.vedios,loading:false,nextPageToken: payload.nextPageToken,activeCategory:payload.category
        }
        case HOME_VEDIOS_FAIL:return{
            ...state,loading:false,error:payload
        }
        case HOME_VEDIOS_REQUEST:return{
            ...state,loading:true
        }
        default:return state
    }
};
export default homeVideoReducer;
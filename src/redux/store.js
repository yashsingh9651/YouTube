import { applyMiddleware, legacy_createStore as createStore,combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {authreducer} from './reducers/authReducer'
import videoReducer from './reducers/videoReducer'
const rootReducer = combineReducers({
    auth:authreducer,
    homeVideos:videoReducer
});
const store =  createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;
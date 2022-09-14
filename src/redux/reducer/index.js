import {combineReducers} from 'redux'
import authReducer from './AuthReducer'
import viewSessionReducer from './viewSessionReducer'


const rootReducer=combineReducers({
    getsession: viewSessionReducer,
    auth: authReducer,
    
})


export default rootReducer;
import {combineReducers} from 'redux';
import UserReducer from './userReducer';

const rootReducer = combineReducers({
    userState: UserReducer,
})

export default rootReducer
import {combineReducers} from 'redux';
import UserReducer from './userReducer';
import ItemReducer from './itemReducer';

const rootReducer = combineReducers({
    userState: UserReducer,
    itemState: ItemReducer,
})

export default rootReducer
import { combineReducers } from 'redux';
import { userReducer } from './user';
import { hostReducer } from './host';

export const rootReducer = combineReducers({
    user: userReducer,
    host: hostReducer
})
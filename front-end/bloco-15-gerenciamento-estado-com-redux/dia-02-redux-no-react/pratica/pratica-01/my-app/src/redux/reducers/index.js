import { combineReducers } from 'redux';
import myReducer from './myReducer';
import mySuperReducer from './myReducer2';

const rootReducer = combineReducers({ myReducer, mySuperReducer });

export default rootReducer;
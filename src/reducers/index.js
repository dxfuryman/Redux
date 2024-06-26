//  yes//This file represents the root reducer,
// // which combines all the individual reducers in the application.yes
import taskReducer from './taskReducer.js'
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    tasks: taskReducer,
});

export default rootReducer;
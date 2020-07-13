import { combineReducers } from 'redux'
import {userReducer} from "./userReducer";
import {windmillsReducer} from "./windmillReducer";

const rootReducer = combineReducers({
    userReducer,
    windmillsReducer
})

export default rootReducer;
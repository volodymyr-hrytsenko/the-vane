import { combineReducers } from 'redux'
import {userReducer} from "./userReducer";
import {windmillsReducer} from "./windmillReducer";
import {titleReducer} from "./titleReducers";

const rootReducer = combineReducers({
    userReducer,
    windmillsReducer,
    titleReducer
})

export default rootReducer;
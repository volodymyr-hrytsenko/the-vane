import { combineReducers } from 'redux'
import {userReducer} from "./userReducer";
import {windmillsReducer} from "./windmillReducer";
import {titleReducer} from "./titleReducers";
import {registrationReducer} from "./registrationReducer";

const rootReducer = combineReducers({
    userReducer,
    windmillsReducer,
    titleReducer,
    registrationReducer
})

export default rootReducer;
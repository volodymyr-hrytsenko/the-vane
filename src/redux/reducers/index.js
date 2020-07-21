import { combineReducers } from 'redux'
import {userReducer} from "./userReducer";
import {windmillsReducer} from "./windmillReducer";
import {titleReducer} from "./titleReducers";
import {registrationReducer} from "./registrationReducer";
import {windmillTempReducer} from "./windmillTempReducer";
import {devicesReducer} from "./deviceReducers";

const rootReducer = combineReducers({
    userReducer,
    windmillsReducer,
    titleReducer,
    registrationReducer,
    windmillTempReducer,
    devicesReducer
})

export default rootReducer;
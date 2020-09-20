import { combineReducers } from 'redux'
import {userReducer} from "./userReducer";
import {windmillsReducer} from "./windmillReducer";
import {titleReducer} from "./titleReducers";
import {registrationReducer} from "./registrationReducer";
import {windmillTempReducer} from "./windmillTempReducer";
import {devicesReducer} from "./deviceReducers";
import {diagramsReducer} from "./diagramsReducer";

const rootReducer = combineReducers({
    userReducer,
    windmillsReducer,
    titleReducer,
    registrationReducer,
    windmillTempReducer,
    devicesReducer,
    diagramsReducer
})

export default rootReducer;
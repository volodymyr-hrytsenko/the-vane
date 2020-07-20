import {ADD_WINDMILL_TO_TEMP, CLEAR_TEMP, DELETE_WINDMILL_FROM_TEMP} from "../actions/windmillTempAction";

const initialState = {
    temporaryWindmills: []
};

export const windmillTempReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_WINDMILL_TO_TEMP:
            return {
                ...state,
                temporaryWindmills: [...state.temporaryWindmills, action.payload]
            }
        case DELETE_WINDMILL_FROM_TEMP:
            return {
                ...state,
                temporaryWindmills: state.temporaryWindmills.filter(windmill => windmill.id !== action.payload)
            }
        case CLEAR_TEMP:
            return initialState
        default:
            return state
    }
}
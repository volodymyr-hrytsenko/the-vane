import {WINDMILLS_IS_ERROR, WINDMILLS_IS_PENDING, WINDMILLS_IS_SUCCESS} from "../actions/windmillActions";

const initialState = {
    windmillsIsPending: false,
    windmills: []
};

export const windmillsReducer = (state=initialState, action) => {
    switch (action.type) {
        case WINDMILLS_IS_PENDING:
            return {
                ...state,
                windmillsIsPending: action.payload
            }
        case WINDMILLS_IS_ERROR:
            return {
                ...state,
                windmillsIsPending: action.payload
            }
        case WINDMILLS_IS_SUCCESS:
            return {
                ...state,
                windmillsIsPending: action.payload.pending,
                windmills: action.payload.windmills
            }
        default:
            return state
    }
}
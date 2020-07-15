import {WINDMILLS_IS_ERROR, WINDMILLS_IS_PENDING, WINDMILLS_IS_SUCCESS} from "../actions/windmillActions";

const initialState = {
    windmillsIsPending: false,
    windmills: [],
    windmillsError: null
};

export const windmillsReducer = (state=initialState, action) => {
    switch (action.type) {
        case WINDMILLS_IS_PENDING:
            return {
                ...state,
                windmillsIsPending: action.payload,
                windmillsError: null
            }
        case WINDMILLS_IS_ERROR:
            return {
                ...state,
                windmillsIsPending: action.payload.isPending,
                windmillsError: action.payload.err
            }
        case WINDMILLS_IS_SUCCESS:
            return {
                ...state,
                windmillsIsPending: action.payload.isPending,
                windmills: action.payload.windmills
            }
        default:
            return state
    }
}
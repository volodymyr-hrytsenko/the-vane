import {
    ADD_WINDMILLS,
    ADD_WINDMILLS_IS_ERROR,
    ADD_WINDMILLS_IS_PENDING,
    ALL_WINDMILLS_IS_ERROR,
    ALL_WINDMILLS_IS_PENDING,
    ALL_WINDMILLS_IS_SUCCESS,
    DELETE_WINDMILLS,
    DELETE_WINDMILLS_IS_ERROR,
    DELETE_WINDMILLS_IS_PENDING,
    WINDMILLS_IS_ERROR,
    WINDMILLS_IS_PENDING,
    WINDMILLS_IS_SUCCESS
} from "../actions/windmillActions";

const initialState = {
    windmillsIsPending: false,
    windmills: [],
    windmillsError: null,
    allWindmillsIsPending: false,
    allWindmills: [],
    allWindmillsError: null,
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
        case ALL_WINDMILLS_IS_PENDING:
            return {
                ...state,
                allWindmillsIsPending: action.payload,
                allWindmillsError: null
            }
        case ALL_WINDMILLS_IS_ERROR:
            return {
                ...state,
                allWindmillsIsPending: action.payload.isPending,
                allWindmillsError: action.payload.err
            }
        case ALL_WINDMILLS_IS_SUCCESS:
            return {
                ...state,
                allWindmillsIsPending: action.payload.isPending,
                allWindmills: action.payload.allWindmills
            }
        case DELETE_WINDMILLS:
            return {
                ...state,
                windmills: state.windmills.filter((windmill) => windmill.id !== action.payload)
            }
        case ADD_WINDMILLS:
            return {
                ...state,
                windmills: [...state.windmills, ...action.payload]
            }
        default:
            return state
    }
}
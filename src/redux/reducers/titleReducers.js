import {SET_TITLE_TYPE} from "../actions/titleActions";


const initialState = {
    titleType: 'profile'
};

export const titleReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_TITLE_TYPE:
            return {
                ...state,
                titleType: action.payload
            }
        default:
            return state
    }
}
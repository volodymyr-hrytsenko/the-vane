import {
    LOGIN_ERROR,
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    GET_USER_INFO
} from "../actions/userActions";

const initialState = {
    loginPending: false,
    user: {}
};

export const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN_PENDING:
            return {
                ...state,
                loginPending: action.payload
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loginPending: action.payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginPending: action.payload
            }
        case GET_USER_INFO:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}
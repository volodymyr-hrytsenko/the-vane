import {
    LOGIN_ERROR,
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    GET_USER_INFO,
    USER_INFO_PENDING,
    USER_INFO_ERROR
} from "../actions/userActions";

const initialState = {
    loginPending: false,
    userInfoPending: false,
    user: {},
    userError: null
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
                loginPending: action.payload.isPending,
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
        case USER_INFO_PENDING:
            return {
                ...state,
                userInfoPending: action.payload,
                userError: null
            }
        case USER_INFO_ERROR:
            return {
                ...state,
                userInfoPending: action.payload.isPending,
                userError: action.payload.err
            }
        default:
            return state
    }
}
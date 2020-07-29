import {
    LOGIN_ERROR,
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    GET_USER_INFO,
    USER_INFO_PENDING,
    USER_INFO_ERROR, SET_LOGGED_IN, LOG_OUT
} from "../actions/userActions";

const initialState = {
    loginPending: false,
    userInfoPending: false,
    loginError: null,
    isLoggedIn: false,
    user: {name: ' ', surname: ' ', email: ' ', account: {permission: 3}},
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
                loginError: action.payload.err
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginPending: action.payload.isPending,
                isLoggedIn: action.payload.isLoggedIn,
            }
        case SET_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn
            }
        case GET_USER_INFO:
            return {
                ...state,
                user: action.payload,
                userInfoPending: false
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
        case LOG_OUT:
            return initialState
        default:
            return state
    }
}
import api from "../../service/api";

export const LOGIN_PENDING = 'ACTION_LOGIN_PENDING';
export const LOGIN_SUCCESS = 'ACTION_LOGIN_SUCCESS';
export const LOGIN_ERROR = 'ACTION_LOGIN_ERROR';
export const USER_INFO_PENDING = 'ACTION_USER_INFO_PENDING';
export const USER_INFO_ERROR = 'ACTION_USER_INFO_ERROR';
export const GET_USER_INFO = 'ACTION_USER_INFO'

export const setLoginPending = () => {
    return {
        type: LOGIN_PENDING,
        payload: true
    };
};

export const setLoginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
        payload: false
    };
};

export const setLoginError = (loginError) => {
    return {
        type: LOGIN_ERROR,
        payload: {
            isPending: false,
            err: loginError
        }
    };
};

export const setUserInfoIsPending = () => {
    return {
        type: USER_INFO_PENDING,
        payload: true
    }
}

export const setUserInfoError= (err) => {
    return {
        type: USER_INFO_ERROR,
        payload: {
            isPending: false,
            err: err
        }
    }
}

export const setUserInfo = (userData) => {
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export const login = (user) => {
    return (dispatch) => {
        dispatch(setLoginPending());
        api.login(user)
            .then(success => {
                console.log(success)
                dispatch(setLoginSuccess(success));
            })
            .catch(err => {
                console.log(err);
                dispatch(setLoginError(err));
            });
    };
};

export const getUserInfo = () => {
    return (dispatch) => {
        dispatch(setUserInfoIsPending())
        api.getUserInfo()
            .then(success => {
                dispatch(setUserInfo(success));
            })
            .catch(err => {
                console.log(err);
                dispatch(setUserInfoError(err))
            });
    };
}
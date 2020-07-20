import api from "../../service/api";

export const REGISTER_PENDING = 'ACTION_REGISTER_PENDING';
export const REGISTER_SUCCESS = 'ACTION_REGISTER_SUCCESS';
export const REGISTER_ERROR = 'ACTION_REGISTER_ERROR';
export const REGISTER_SUCCESS_CLEAR = 'ACTION_REGISTER_SUCCESS_CLEAR';


const register = () => {
    return {
        type: REGISTER_PENDING,
        payload: true,
    }
};

export const registerClear = () => {
    return {
        type: REGISTER_SUCCESS_CLEAR,
    }
};

const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS
    }
};

const registerError = (err) => {
    return {
        type: REGISTER_ERROR,
        payload: {
            isPending: false,
            error: err
        },
    }
};

export const registerUser = (user) => {
    return (dispatch) => {
        dispatch(register());
        api.registerUser(user)
            .then(() => {
                dispatch(registerSuccess());
            })
            .catch(err => {
                dispatch(registerError(err));
            })
    }
};
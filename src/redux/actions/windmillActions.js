import api from "../../service/api";

export const WINDMILLS_IS_PENDING = 'WINDMILLS_IS_PENDING';
export const WINDMILLS_IS_SUCCESS = 'WINDMILLS_IS_SUCCESS';
export const WINDMILLS_IS_ERROR = 'WINDMILLS_IS_ERROR';

export const setWindmillsPending = () => {
    return {
        type: WINDMILLS_IS_PENDING,
        payload: true
    };
};

export const setWindmillsSuccess = (windmills) => {
    return {
        type: WINDMILLS_IS_SUCCESS,
        payload: {
            isPending: false,
            windmills: windmills
        }
    };
};

export const setWindmillsError = (err) => {
    return {
        type: WINDMILLS_IS_ERROR,
        payload: {
            isPending: false,
            err: err
        }
    };
};

export const getWindmillsByUser = () => {
    return (dispatch) => {
        dispatch(setWindmillsPending());
        api.getWindmillsByUser()
            .then(success => {
                console.log(success)
                dispatch(setWindmillsSuccess(success));
            })
            .catch(err => {
                console.log(err);
                dispatch(setWindmillsError(err));
            });
    };
};
import api from "../../service/api";

export const WINDMILLS_IS_PENDING = 'WINDMILLS_IS_PENDING';
export const WINDMILLS_IS_SUCCESS = 'WINDMILLS_IS_SUCCESS';
export const WINDMILLS_IS_ERROR = 'WINDMILLS_IS_ERROR';
export const ALL_WINDMILLS_IS_PENDING = 'ALL_WINDMILLS_IS_PENDING';
export const ALL_WINDMILLS_IS_SUCCESS = 'ALL_WINDMILLS_IS_SUCCESS';
export const ALL_WINDMILLS_IS_ERROR = 'ALL_WINDMILLS_IS_ERROR';
export const WINDMILL_CURRENT_DATA_PENDING = 'WINDMILL_CURRENT_DATA_PENDING';
export const WINDMILL_CURRENT_DATA_SUCCESS = 'WINDMILL_CURRENT_DATA_SUCCESS';
export const WINDMILL_CURRENT_DATA_ERROR = 'WINDMILL_CURRENT_DATA_ERROR';
export const DELETE_WINDMILLS = 'DELETE_WINDMILLS';
export const ADD_WINDMILLS = 'ADD_WINDMILLS';

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

export const setAllWindmillsPending = () => {
    return {
        type: ALL_WINDMILLS_IS_PENDING,
        payload: true
    };
};

export const setAllWindmillsSuccess = (windmills) => {
    return {
        type: ALL_WINDMILLS_IS_SUCCESS,
        payload: {
            isPending: false,
            allWindmills: windmills
        }
    };
};

export const setAllWindmillsError = (err) => {
    return {
        type: ALL_WINDMILLS_IS_ERROR,
        payload: {
            isPending: false,
            err: err
        }
    };
};

export const deleteWindmill = (windmillId) => {
    console.log(windmillId)
    return {
        type: DELETE_WINDMILLS,
        payload: windmillId
    };
};

export const addWindmills = (windmills) => {
    return {
        type: ADD_WINDMILLS,
        payload: windmills
    }
};

export const setWindmillDataIsPending = () => {
    return {
        type: WINDMILL_CURRENT_DATA_PENDING,
        payload: true
    };
};

export const setWindmillDataError = (error) => {
    return {
        type: WINDMILL_CURRENT_DATA_ERROR,
        payload: error
    };
};

export const setWindmillData = (windmills) => {
    return {
        type: WINDMILL_CURRENT_DATA_SUCCESS,
        payload: windmills
    }
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

export const getAllWindmills = () => {
    return (dispatch) => {
        dispatch(setAllWindmillsPending());
        api.getAllWindmills()
            .then(success => {
                console.log(success)
                dispatch(setAllWindmillsSuccess(success));
            })
            .catch(err => {
                console.log(err);
                dispatch(setAllWindmillsError(err));
            });
    };
};

export const getWindmillData = () => {
    return (dispatch) => {
        dispatch(setWindmillDataIsPending());
        api.getCurrentWindmillData()
            .then(success => {
                console.log(success)
                dispatch(setWindmillData(success));
            })
            .catch(err => {
                console.log(err);
                dispatch(setWindmillDataError(err));
            });
    };
};

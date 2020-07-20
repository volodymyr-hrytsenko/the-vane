import api from "../../service/api";

export const DEVICES_IS_PENDING = 'DEVICES_IS_PENDING';
export const DEVICES_IS_SUCCESS = 'DEVICES_IS_SUCCESS';
export const DEVICES_IS_ERROR = 'DEVICES_IS_ERROR';
export const DELETE_DEVICE = 'DELETE_DEVICE';
export const ADD_DEVICE = 'ADD_DEVICE';

export const setDevicesPending = () => {
    return {
        type: DEVICES_IS_PENDING,
        payload: true
    };
};

export const setDevicesSuccess = (devices) => {
    return {
        type: DEVICES_IS_SUCCESS,
        payload: {
            isPending: false,
            devices: devices
        }
    };
};

export const setDevicesError = (error) => {
    return {
        type: DEVICES_IS_ERROR,
        payload: {
            isPending: false,
            error: error
        }
    };
};

export const addDevice = () => {
    return {
        type: ADD_DEVICE,
        payload: true
    };
};

export const deleteDevice = (token) => {
    return {
        type: DELETE_DEVICE,
        payload: {
            isPending: false,
            token: token
        }
    };
};

export const getUserDevices = () => {
    return (dispatch) => {
        dispatch(setDevicesPending());
        api.getUserDevices()
            .then((success) => {
                dispatch(setDevicesSuccess(success));
            })
            .catch(err => {
                dispatch(setDevicesError(err));
            })
    }
};
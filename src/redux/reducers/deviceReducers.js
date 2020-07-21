import {DELETE_DEVICE,
        DEVICES_IS_ERROR,
        DEVICES_IS_PENDING,
        DEVICES_IS_SUCCESS
} from "../actions/deviceActions";


const initialState = {
    devices: [],
    isPending: false,
    error: null
};

export const devicesReducer = (state=initialState, action) => {
    switch (action.type) {
        case DEVICES_IS_PENDING:
            return {
                ...state,
                isPending: action.payload,
                error: null
            };
        case DEVICES_IS_SUCCESS:
            return {
                ...state,
                isPending: action.payload.isPending,
                devices: action.payload.devices
            };
        case DEVICES_IS_ERROR:
            return {
                ...state,
                isPending: action.payload.isPending,
                error: action.payload.error
            };
        case DELETE_DEVICE:
            return {
                ...state,
                devices: state.devices.filter(device => device.token !== action.payload.token)
            };
        default:
            return state;
    }
};
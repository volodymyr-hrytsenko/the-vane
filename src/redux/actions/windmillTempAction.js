export const ADD_WINDMILL_TO_TEMP = 'ADD_WINDMILL_TO_TEMP';
export const DELETE_WINDMILL_FROM_TEMP = 'DELETE_WINDMILL_FROM_TEMP';
export const CLEAR_TEMP = 'CLEAR_TEMP';
export const SET_ACTIVE_WINDMILL = 'SET_ACTIVE_WINDMILL';


export const addWindmillToTemporary = (windmill) => {
    return {
        type: ADD_WINDMILL_TO_TEMP,
        payload: windmill
    };
};

export const deleteWindmillFromTemporary = (windmillId) => {
    return {
        type: DELETE_WINDMILL_FROM_TEMP,
        payload: windmillId
    };
};

export const clearTemp = () => {
    return {
        type: CLEAR_TEMP,
    };
};

export const setActiveWindmill = (id) => {
    return {
        type: SET_ACTIVE_WINDMILL,
        payload: id
    };
};

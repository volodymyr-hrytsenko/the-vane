import api from "../../service/api";

export const GET_DIAGRAM_DATA_PENDING = 'GET_DIAGRAM_DATA_PENDING';
export const GET_DIAGRAM_DATA_SUCCESS = 'GET_DIAGRAM_DATA_SUCCESS';
export const GET_DIAGRAM_DATA_ERROR = 'GET_DIAGRAM_DATA_ERROR';

export const getDiagramsDataPending = () => {
    return {
        type: GET_DIAGRAM_DATA_PENDING,
        payload: true
    };
};

export const getDiagramsDataSuccess = (data) => {
    return {
        type: GET_DIAGRAM_DATA_SUCCESS,
        payload: {
            isPending: false,
            diagramsData: data
        }
    };
};

export const getDiagramsDataError = (error) => {
    return {
        type: GET_DIAGRAM_DATA_ERROR,
        payload: {
            isPending: false,
            error: error
        }
    };
};

export const getDiagramsData = () => {
    return (dispatch) => {
        dispatch(getDiagramsDataPending());
        api.getDiagramsData()
            .then((success) => {
                dispatch(getDiagramsDataSuccess(success));
            })
            .catch(err => {
                dispatch(getDiagramsDataError(err));
            })
    }
};
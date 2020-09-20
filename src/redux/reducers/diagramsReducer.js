import {GET_DIAGRAM_DATA_ERROR, GET_DIAGRAM_DATA_PENDING, GET_DIAGRAM_DATA_SUCCESS} from "../actions/diagramsActions";

const initialState = {
    diagramsData: [],
    isPending: false,
    error: null
};

export const diagramsReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_DIAGRAM_DATA_PENDING:
            return {
                ...state,
                isPending: action.payload,
                error: null
            };
        case GET_DIAGRAM_DATA_SUCCESS:
            return {
                ...state,
                isPending: action.payload.isPending,
                diagramsData: action.payload.diagramsData
            };
        case GET_DIAGRAM_DATA_ERROR:
            return {
                ...state,
                isPending: action.payload.isPending,
                error: action.payload.error
            };
        default:
            return state;
    }
};
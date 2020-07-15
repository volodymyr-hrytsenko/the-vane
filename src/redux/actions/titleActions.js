export const SET_TITLE_TYPE = 'ACTION_SET_TITLE_TYPE'

export const setTitleType = (type) => {
    return {
        type: SET_TITLE_TYPE,
        payload: type
    }
}
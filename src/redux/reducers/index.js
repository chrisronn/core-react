
import C from "../actions/constants";
import initialState from "../reducers/initialState";

const rootReducer = (state = initialState, action) => {

    if (action.type === C.UPDATE_CONTENT_HEIGHT) {
        return {
            ...state,
            contentHeight: action.payload
        };
    }

    if (action.type === C.UPDATE_SIDEBAR_HEIGHT) {
        return {
            ...state,
            sidebarHeight: action.payload
        };
    }

    if (action.type === C.UPDATE_SIDEBAR_CLASS) {
        return {
            ...state,
            sidebarClass: action.payload
        };
    }

    if (action.type === C.UPDATE_CONTENT_RIGHT_TYPE) {
        return {
            ...state,
            contentRightType: action.payload
        };
    }

    if (action.type === C.UPDATE_CONTENT_RIGHT_OPEN) {
        return {
            ...state,
            contentRightOpen: action.payload
        };
    }

    if (action.type === C.GET_USER) {
        return {
            ...state,
            user: action.payload
        };
    }

    if (action.type === C.GET_CUSTOMERS) {
        return {
            ...state,
            customers: action.payload
        };
    }

    return state;
};

export default rootReducer;

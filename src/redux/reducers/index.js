
import C from "../actions/constants";
import initialState from "../reducers/initialState";

const rootReducer = (state = initialState, action) => {

    if (action.type === C.GET_CUSTOMERS) {
        return Object.assign({}, state, {
            customers: state.customers.concat(action.payload)
        });
    }

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

    if (action.type === C.GET_USER) {
        return {
            ...state,
            user: action.payload
        };
    }

    return state;
};

export default rootReducer;

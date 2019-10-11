
import C from "../actions/constants";
import initialState from "../reducers/initialState";

const rootReducer = (state = initialState, action) => {

    if (action.type === C.GET_CUSTOMERS) {
        return Object.assign({}, state, {
            customers: state.customers.concat(action.payload)
        });
    }

    if (action.type === C.UPDATE_LAYOUT_CONTENT_STYLE) {
        return {
            ...state,
            layoutContentStyle: action.payload
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



import { GET_CUSTOMERS } from "../actions/types";
import { GET_USER } from "../actions/types";
import { UPDATE_LAYOUT_CONTENT_STYLE } from "../actions/types";

const initialState = {
    customers: [],
    user: {},
    layoutContentStyle: {}
};

function rootReducer(state = initialState, action) {

    if (action.type === GET_CUSTOMERS) {
        return Object.assign({}, state, {
            customers: state.customers.concat(action.payload)
        });
    }

    if (action.type === UPDATE_LAYOUT_CONTENT_STYLE) {
        return {
            ...state,
            layoutContentStyle: action.payload
        };
    }

    if (action.type === GET_USER) {
        return {
            ...state,
            user: action.payload
        };
    }

    return state;
};

export default rootReducer;
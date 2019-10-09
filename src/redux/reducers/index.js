

import { GET_CUSTOMERS } from "../actions/types";
import { GET_USER } from "../actions/types";
import { GET_LAYOUT_CONTENT_STYLE } from "../actions/types";

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

    if (action.type === GET_LAYOUT_CONTENT_STYLE) {
        return Object.assign({}, state, {
            layoutContentStyle: state.layoutContentStyle.concat(action.payload)
        });
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
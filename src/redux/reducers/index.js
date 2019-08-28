

import { GET_CUSTOMERS } from "../actions/types";
import { GET_USER } from "../actions/types";

const initialState = {
    customers: [],
    user: {}
};

function rootReducer(state = initialState, action) {

    if (action.type === GET_CUSTOMERS) {
        return Object.assign({}, state, {
            articles: state.customers.concat(action.payload)
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
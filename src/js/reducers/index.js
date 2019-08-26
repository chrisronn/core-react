

import { GET_CUSTOMERS } from "../constants/action-types";
import { GET_USER } from "../constants/action-types";

const initialState = {
    customers: [],
    user: {firstname: "", lastname: ""}
};

function rootReducer(state = initialState, action) {

    if (action.type === GET_CUSTOMERS) {
        return Object.assign({}, state, {
            articles: state.customers.concat(action.payload)
        });
    } else if (action.type === GET_USER) {
        return Object.assign({}, state, {
            user: action.payload
        });
    }

    return state;
};

export default rootReducer;
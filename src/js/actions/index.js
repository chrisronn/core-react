

import { GET_CUSTOMERS } from "../constants/action-types";
import { GET_USER } from "../constants/action-types";

export function getCustomers(payload) {
    return { type: GET_CUSTOMERS, payload }
};

export function getUser(payload) {
    return { type: GET_USER, payload }
};


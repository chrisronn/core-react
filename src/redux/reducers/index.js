
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

    if (action.type === C.UPDATE_LOADER) {
        return {
            ...state,
            loader: action.payload
        };
    }

    if (action.type === C.GET_USER) {
        return {
            ...state,
            user: action.payload
        };
    }

    if (action.type === C.GET_CUSTOMER) {
        return {
            ...state,
            customer: action.payload
        };
    }

    if (action.type === C.GET_CUSTOMERS) {
        return {
            ...state,
            customers: action.payload,
            loader: false
        };
    }

    if (action.type === C.EDIT_CUSTOMER) {
        return {
            ...state,
            customer: action.payload
        };
    }

    if (action.type === C.CREATE_CUSTOMER) {
        return {
            ...state,
            customers: state.customers.concat(action.payload)
        };
    }

    if (action.type === C.RESET_CUSTOMER) {
        return {
            ...state,
            customer: action.payload
        };
    }

    if (action.type === C.GET_CONTACTS) {
        return {
            ...state,
            contacts: action.payload
        };
    }

    if (action.type === C.EDIT_CONTACT) {
        return {
            ...state,
            contact: action.payload
        };
    }

    if (action.type === C.GET_CONTACT) {
        return {
            ...state,
            contact: action.payload
        };
    }

    if (action.type === C.CREATE_CONTACT) {
        return {
            ...state,
            contacts: state.contacts.concat(action.payload)
        };
    }

    if (action.type === C.DELETE_CUSTOMER) {

        let customerList = state.customers.filter(function (e) {
            return e.id !== action.payload;
        });

        return {
            ...state,
            customers: customerList
        };
    }

    if (action.type === C.DELETE_CONTACT) {

        let contactList = state.contacts.filter(function (e) {
            return e.id !== action.payload;
        });

        return {
            ...state,
            contacts: contactList
        };
    }

    return state;
};

export default rootReducer;

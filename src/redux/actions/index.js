
import C from "../actions/constants";

import axios from 'axios';

export function getCustomers(payload) {
    return { type: C.GET_CUSTOMERS, payload }
};

export function updateLayoutContentStyle(payload) {
  return {
    type: C.UPDATE_LAYOUT_CONTENT_STYLE, payload 
  }
};

export function getUser() {
    return function(dispatch) {
      axios.get("/data/user.json")
      .then(res => {
          dispatch({ 
            type: C.GET_USER, 
            payload: res.data 
          });
        });
    };
  }

//export function getUser(payload) {
//    return function(dispatch) {
//        return { type: GET_USER, payload }
//    };
//};




  
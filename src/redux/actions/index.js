

import { GET_CUSTOMERS } from "./types";
import { GET_USER } from "./types";
import { GET_LAYOUT_CONTENT_STYLE } from "./types";

import axios from 'axios';

export function getCustomers(payload) {
    return { type: GET_CUSTOMERS, payload }
};

export function getLayoutContentStyle(payload) {
  return {
    type: GET_LAYOUT_CONTENT_STYLE, payload 
  }
};

export function getUser() {
    return function(dispatch) {
      axios.get("/data/user.json")
      .then(res => {
          dispatch({ 
            type: GET_USER, 
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




  
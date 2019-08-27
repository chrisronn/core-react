

import { GET_CUSTOMERS } from "../constants/action-types";
import { GET_USER } from "../constants/action-types";

import axios from 'axios';

export function getCustomers(payload) {
    return { type: GET_CUSTOMERS, payload }
};

export function getUser() {
    return function(dispatch) {
      return axios.get("/data/user.json")
      .then(res => {
          console.log("Users: " + res.data);
          dispatch({ type: GET_USER, payload: res.data });
        });
    };
  }

//export function getUser(payload) {
//    return function(dispatch) {
//        return { type: GET_USER, payload }
//    };
//};




  
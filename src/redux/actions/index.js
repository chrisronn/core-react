
import C from "../actions/constants";

import axios from 'axios';

export function getCustomers() {
  return {
    type: C.GET_CUSTOMERS,
    payload: []
  }
};

export function updateLayoutContentStyle(size) {
  return {
    type: C.UPDATE_LAYOUT_CONTENT_STYLE,
    payload: size 
  }
};

export function getUser() {

  return function (dispatch) {
      
      axios.get("/data/user.json")
      .then(res => {
          dispatch({ 
            type: C.GET_USER, 
            payload: res.data 
          });
        });
  }
  
};





  
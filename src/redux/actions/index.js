
import C from "../actions/constants";

import axios from 'axios';

export function getCustomers() {
  return {
    type: C.GET_CUSTOMERS,
    payload: []
  }
};

export function updateContentHeight(height) {
  return {
    type: C.UPDATE_CONTENT_HEIGHT,
    payload: height 
  }
};

export function updateSidebarHeight(height) {
  return {
    type: C.UPDATE_SIDEBAR_HEIGHT,
    payload: height 
  }
};

export function updateSidebarClass(className) {
  return {
    type: C.UPDATE_SIDEBAR_CLASS,
    payload: className 
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





  
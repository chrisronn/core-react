
import C from "../actions/constants";

import axios from 'axios';

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

export function updateContentRightType(type) {
  return {
    type: C.UPDATE_CONTENT_RIGHT_TYPE,
    payload: type 
  }
};

export function updateContentRightOpen(open) {
  return {
    type: C.UPDATE_CONTENT_RIGHT_OPEN,
    payload: open 
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

export function getCustomer(id) {

  return {
    type: C.GET_CUSTOMER,
    payload: id
  }
  
};

export function getCustomers() {

  return function (dispatch) {
      
    axios.get("/data/customers.json")
    .then(res => {
      dispatch({ 
        type: C.GET_CUSTOMERS, 
        payload: res.data 
      });
    });
  }
};





  
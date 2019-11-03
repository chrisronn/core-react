
import C from "../actions/constants";
import _ from 'lodash';
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

  return function (dispatch) {
        
    axios.get("/data/customers.json")
    .then(res => {
      if(res.data.length > 0) {
        var cust = res.data.find(function (el) {
            return el.id===id;
        });
        dispatch({ 
          type: C.GET_CUSTOMER, 
          payload: cust
        });
      }
    });
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

export function editCustomer(customer) {

  // TODO: this logic is for dev only. Add API-calls
  return {
    type: C.EDIT_CUSTOMER,
    payload: customer 
  }
};

export function createCustomer(inputs) {
  
  // TODO: this logic is for dev only. Add API-calls
  let cust = {};
  let custId = (Math.floor(Math.random() * 10000) + 2000).toString();
  cust.id = custId.toString();
  cust.name = inputs.name;
  cust.address = inputs.address;
  cust.zipcode = inputs.zipcode;
  cust.city = inputs.city;

  let cont = {};
  cont.custid = custId;
  cont.firstname = inputs.firstname;
  cont.lastname = inputs.lastname;
  cont.phone = inputs.phone;
  cont.mobilephone = inputs.mobilephone;
  cont.email = inputs.email;

  return {
    type: C.CREATE_CUSTOMER,
    payload: cust 
  }
};

export function getContacts(custId) {

  // TODO: this logic is for dev only. Add API-calls
  return function (dispatch) {
      
    axios.get("/data/contacts.json")
      .then(res => {
        let conts = _.filter(res.data, { 'custid': custId });
        dispatch({ 
          type: C.GET_CONTACTS, 
          payload: conts 
        });
    });
  }
};

export function editContact(contact) {

  // TODO: this logic is for dev only. Add API-calls
  return {
    type: C.EDIT_CONTACT,
    payload: contact
  }
};

export function getContact(id) {

  // TODO: this logic is for dev only. Add API-calls
  return function (dispatch) {
        
    axios.get("/data/contacts.json")
    .then(res => {
      if(res.data.length > 0) {
        var cont = res.data.find(function (el) {
            return el.id===id;
        });
        dispatch({ 
          type: C.GET_CONTACT, 
          payload: cont
        });
      }
    });
  }  
};




  
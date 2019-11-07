import C from "../actions/constants";
import urls from "../../urls";
//import _ from 'lodash';
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

export function updateLoader(status) {
  return {
    type: C.UPDATE_LOADER,
    payload: status
  }
};

export function getUser() {

  return function (dispatch) {
      
    axios.get(urls.URL_DATA_USER_GET)
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
        
    let url = urls.URL_DATA_CUSTOMER_READ_ONE + id;

    axios.get(url)
      .then(res => {
        dispatch({ 
          type: C.GET_CUSTOMER, 
          payload: res.data 
        });
      })       
  }  
};

export function getCustomers() {

  return function (dispatch) {
      
    axios.get(urls.URL_DATA_CUSTOMER_READ)
    .then(res => {
      dispatch({ 
        type: C.GET_CUSTOMERS, 
        payload: res.data 
      });
    });
  }
};

export function editCustomer(cust) {

  var url = urls.URL_DATA_CUSTOMER_UPDATE + cust.id;

  var params = new URLSearchParams();
  params.append('_method', "PUT");
  params.append('name', cust.name);
  params.append('address', cust.address);
  params.append('zipcode', cust.zipcode);
  params.append('city', cust.city);

  return function (dispatch) {
      
    axios.post(url,params)
    .then(res => {
      console.log("updated: " + res);
      dispatch({ 
        type: C.EDIT_CUSTOMER,
        payload: cust 
      });
    });
  }
};

export function createCustomer(inputs) {
  
  let cust = {};
  cust.name = inputs.name;
  cust.address = inputs.address;
  cust.zipcode = inputs.zipcode;
  cust.city = inputs.city;

  let cont = {};
  cont.firstname = inputs.firstname;
  cont.lastname = inputs.lastname;
  cont.phone = inputs.phone;
  cont.mobilephone = inputs.mobilephone;
  cont.email = inputs.email;

  return function (dispatch) {
      
    let url = urls.URL_DATA_CUSTOMER_CREATE;

    var params = new URLSearchParams();
    params.append('name', cust.name);
    params.append('address', cust.address);
    params.append('zipcode', cust.zipcode);
    params.append('city', cust.city);

    // first add customer
    axios.post(url,params)
      .then(res => {

        cust.id = res.data.id;
        url = urls.URL_DATA_CONTACT_CREATE + res.data.id + urls.URL_DATA_CONTACT_CONTACT_KEY;

        params = new URLSearchParams();
        params.append('firstname', cont.firstname);
        params.append('lastname', cont.lastname);
        params.append('phone', cont.phone);
        params.append('mobilephone', cont.mobilephone);
        params.append('email', cont.email);

        // then add contact
        axios.post(url,params)
          .then(res => {
            console.log(res.data.id);

            dispatch({ 
              type: C.CREATE_CUSTOMER, 
              payload: cust 
            });
        });

      });
  };
};

export function resetCustomer() {
  
  let cust = {
    "id": "",
    "name": "",
    "address": "",
    "zipcode": "",
    "city": ""
  }

  return {
    type: C.RESET_CUSTOMER,
    payload: cust 
  }
};



export function getContacts(custId) {

  return function (dispatch) {
      
    let url = urls.URL_DATA_CONTACT_READ + custId + urls.URL_DATA_CONTACT_CONTACT_KEY;

    axios.get(url)
    .then(res => {
      dispatch({ 
        type: C.GET_CONTACTS, 
        payload: res.data 
      });
    });
  }
};

export function editContact(cont) {

  var url = urls.URL_DATA_CONTACT_UPDATE + cont.custid + urls.URL_DATA_CONTACT_CONTACT_KEY + cont.id;

  var params = new URLSearchParams();
  params.append('_method', "PUT");
  params.append('firstname', cont.firstname);
  params.append('lastname', cont.lastname);
  params.append('phone', cont.phone);
  params.append('mobilephone', cont.mobilephone);
  params.append('email', cont.email);

  return function (dispatch) {
      
    axios.post(url,params)
    .then(res => {
      console.log("updated: " + res);
      dispatch({ 
        type: C.EDIT_CONTACT,
        payload: cont 
      });
    });
  }
};

export function getContact(custid,contid) {

  return function (dispatch) {
        
    let url = urls.URL_DATA_CONTACT_READ_ONE + custid + urls.URL_DATA_CONTACT_CONTACT_KEY + contid;

    axios.get(url)
      .then(res => {
        dispatch({ 
          type: C.GET_CONTACT, 
          payload: res.data 
        });
      })       
  }  
};

export function createContact(cont) {
  
  let url = urls.URL_DATA_CONTACT_CREATE + cont.custid + urls.URL_DATA_CONTACT_CONTACT_KEY;

  var params = new URLSearchParams();

  params.append('firstname', cont.firstname);
  params.append('lastname', cont.lastname);
  params.append('phone', cont.phone);
  params.append('mobilephone', cont.mobilephone);
  params.append('email', cont.email);

  return function (dispatch) {
      
    axios.post(url,params)
      .then(res => {

        cont.id = res.data.id;
        
        dispatch({ 
          type: C.CREATE_CONTACT, 
          payload: cont
        });
    });
  }
};

export function deleteContact(cont) {
  
  let url = urls.URL_DATA_CONTACT_DELETE + cont.custid + urls.URL_DATA_CONTACT_CONTACT_KEY + cont.id;

  var params = new URLSearchParams();
  params.append('_method', "DELETE");

  return function (dispatch) {
      
    axios.post(url,params)
      .then(res => {

        console.log("deleted: " + res);
        
        dispatch({ 
          type: C.DELETE_CONTACT,
          payload: cont.id
        });
    });
  }
};

export function deleteCustomer(cust) {
  
  let url = urls.URL_DATA_CUSTOMER_DELETE + cust.id;

  var params = new URLSearchParams();
  params.append('_method', "DELETE");

  return function (dispatch) {
      
    axios.post(url,params)
      .then(res => {

        console.log("deleted: " + res);
        
        dispatch({ 
          type: C.DELETE_CUSTOMER,
          payload: cust.id
        });
    });
  }
};





  
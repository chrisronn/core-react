
import C from "../actions/constants";
import _ from 'lodash';
import axios from 'axios';

//const URL_ROOT="/dev/corereact.nsf/";
//const URL_HOME="/dev/corereact.nsf/index.html";

const URL_DATA_USER_GET="/dev/corereact.nsf/xsp/user/";

const URL_DATA_CUSTOMER_CREATE="/dev/corereact.nsf/xsp/customer/";
const URL_DATA_CUSTOMER_READ="/dev/corereact.nsf/xsp/customer/";
const URL_DATA_CUSTOMER_READ_ONE="/dev/corereact.nsf/xsp/customer/";
//const URL_DATA_CUSTOMER_UPDATE="/dev/corereact.nsf/xsp/customer/";
//const URL_DATA_CUSTOMER_DELETE="/dev/corereact.nsf/xsp/customer/";

const URL_DATA_CONTACT_CONTACT_KEY="/contact/";
const URL_DATA_CONTACT_CREATE="/dev/corereact.nsf/xsp/customer/";
const URL_DATA_CONTACT_READ="/dev/corereact.nsf/xsp/customer/";
//const URL_DATA_CONTACT_READ_ONE="/dev/corereact.nsf/xsp/customer/";
//const URL_DATA_CONTACT_UPDATE="/dev/corereact.nsf/xsp/customer/";
//const URL_DATA_CONTACT_DELETE="/dev/corereact.nsf/xsp/customer/";


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
      
    axios.get(URL_DATA_USER_GET)
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
        
    let url = URL_DATA_CUSTOMER_READ_ONE + id;

    axios.get(url)
      .then(res => {

        console.log("got customer " + res.data.id);
        
        dispatch({ 
          type: C.GET_USER, 
          payload: res.data 
        });
      })       
  }  
};

export function getCustomers() {

  return function (dispatch) {
      
    axios.get(URL_DATA_CUSTOMER_READ)
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
      
    let url = URL_DATA_CUSTOMER_CREATE;

    var params = new URLSearchParams();
    params.append('name', cust.name);
    params.append('address', cust.address);
    params.append('zipcode', cust.zipcode);
    params.append('city', cust.city);

    // first add customer
    axios.post(url,params)
      .then(res => {

        cust.id = res.data.id;
        url = URL_DATA_CONTACT_CREATE + res.data.id + URL_DATA_CONTACT_CONTACT_KEY;

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
      
    let url = URL_DATA_CONTACT_READ + custId + URL_DATA_CONTACT_CONTACT_KEY;

    axios.get(url)
    .then(res => {
      dispatch({ 
        type: C.GET_CONTACTS, 
        payload: res.data 
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
        if (res.data.length > 0) {
          var cont = res.data.find(function (el) {
            return el.id === id;
          });
          dispatch({
            type: C.GET_CONTACT,
            payload: cont
          });
        }
      });
  }
};

export function createContact(cont) {
  
  let url = URL_DATA_CONTACT_CREATE + cont.custid + URL_DATA_CONTACT_CONTACT_KEY;

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





  
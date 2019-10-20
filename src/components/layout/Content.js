import React from 'react';
import { Route, Switch } from "react-router-dom";

//import Customer from "../page/Customer";
import CustomerList from "../page/CustomerList";
import CustomerCreate from "../page/CustomerCreate";
//import CustomerCard from "../page/CustomerCard";
//import CustomerEdit from "../page/CustomerEdit";
//import CustomerContactList from "../page/CustomerContactList";
//import CustomerContact from "..page/CustomerContact";

const Content = () => (

  <div>
    <Switch>
      <Route exact path="/" component={CustomerList} />
      <Route exact path="/start" component={CustomerList} />
      <Route exact path="/customer/list" component={CustomerList} />
      <Route exact path="/customer/create" component={CustomerCreate} />
    </Switch>
      
  </div>
);

export default Content;
import React from 'react';
import { Route, Switch } from "react-router-dom";

import Customer from "../page/Customer";
import CustomerList from "../page/CustomerList";
import CustomerCreate from "../page/CustomerCreate";

const Content = () => (

  <div>
    <Switch>
      <Route exact path="/start" component={CustomerList} />      
      <Route exact path="/customer/list" component={CustomerList} />
      <Route exact path="/customer/create" component={CustomerCreate} />
      <Route path="/customer/:id" component={Customer} />
      <Route path="*" component={CustomerList} />
    </Switch>
      
  </div>
);

export default Content;
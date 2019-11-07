import React, { useEffect } from 'react';
import { useParams } from "react-router";
import { Route, Switch } from "react-router-dom";
import { getContact } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import ContactEdit from "./ContactEdit";

const Contact = ({ match }) => {
    
    const contact = useSelector(state => state.contact); 
    const customer = useSelector(state => state.customer); 

    let { contid } = useParams();

    const dispatch = useDispatch();  

    useEffect(() => {
      if(!contact.id || (contact.id && (contid !== contact.id))) { 
        dispatch(getContact(customer.id, contid));       
      }     
    }, [dispatch, contact.id, customer.id, contid]);    
    
    if(contid === contact.id) {

      return (
        
            <Switch>
              <Route path={match.url + '/edit'} component={ContactEdit} />
              <Route path={match.url} component={ContactEdit} />
            </Switch>
      );
      
    } else {

      return ("");

    }
};

export default Contact;
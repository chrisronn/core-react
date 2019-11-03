import React from 'react';
import { useParams } from "react-router";
import { Route, Switch } from "react-router-dom";
import { getContact } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import CustomerContact from "../page/CustomerContact";

const Contact = () => {
    
    let { contid } = useParams();

    console.log("contid: " + contid);
    const dispatch = useDispatch();

    const contact = useSelector(state => state.contact);

    if (!contact.id) {
        console.log("so dispatch...")
        dispatch(getContact(contid));
    }

    console.log("contact: " + contact.fullname);
    return (
    
          <Switch>
              <Route path={'/customer/:id/contact/:contid'} component={CustomerContact}/>
          </Switch>

    );
};

export default Contact;
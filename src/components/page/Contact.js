import React,{useEffect} from 'react';
import { useParams } from "react-router";
import { Route, Switch } from "react-router-dom";
import { getContact } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import CustomerContact from "../page/CustomerContact";

const Contact = ({ match }) => {
    
    let { contid } = useParams();

    console.log("contid: " + contid);
    const dispatch = useDispatch();

    const contact = useSelector(state => state.contact);

    useEffect(() => {
        dispatch(getContact(contid));            
    }, [dispatch,contid]);

    console.log("contact: " + contact.fullname);
    
    return (
    
          <Switch>
              <Route path={match.url + '/edit'} component={CustomerContact}/>
          </Switch>

    );
};

export default Contact;
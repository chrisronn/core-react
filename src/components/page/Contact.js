import React from 'react';
import { useParams } from "react-router";
import { Route, Switch } from "react-router-dom";
import { getContact } from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import ContactEdit from "./ContactEdit";

const Contact = ({ match }) => {
    
    let { contid } = useParams();

    const dispatch = useDispatch();    

    dispatch(getContact(contid));
    
    return (
    
          <Switch>
            <Route path={match.url + '/edit'} component={ContactEdit} />
            <Route path={match.url} component={ContactEdit} />
          </Switch>

    );
};

export default Contact;
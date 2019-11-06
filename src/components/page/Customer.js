import React, { useEffect } from 'react';
import { useParams } from "react-router";
import { Route, Switch, Link } from "react-router-dom";
import { updateSidebarClass, getCustomer } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import ContentLeft from "../layout/ContentLeft";
import CustomerCard from "../page/CustomerCard";
import CustomerEdit from "../page/CustomerEdit";
import CustomerContactCreate from "../page/CustomerContactCreate";
import CustomerContactList from "../page/CustomerContactList";
import Contact from "../page/Contact";

const Customer = ({ match }) => {

    const customer = useSelector(state => state.customer);
    let { id } = useParams();

    const dispatch = useDispatch();
    dispatch(updateSidebarClass("hold-transition sidebar-mini sidebar-collapse"));

    useEffect(() => {

      console.log("custid before dispatching: " + customer.id);
      if(!customer.id || (customer.id && (id !== customer.id))) { 
          dispatch(getCustomer(id));
      };  
    }, [dispatch]);

    return (
        <div>

        <ContentLeft/>    
    
        <div className="cardpage-top border-bottom">
    
          <button className="btn btn-sm btn-default main-sidebar-toggler">
            <i className="fas fa-ellipsis-h"></i>
          </button>
    
            <div className="top-name">
                    <Link to={'/customer/' + id + '/card'}>{customer.name}</Link>
            </div>			
        
        </div>
    
        <section className="content">
    
          <div className="container-fluid">
    
            <Switch>
              <Route path={match.url + '/contacts'} component={CustomerContactList}/>
              <Route path={match.url + '/edit'} component={CustomerEdit}/>
              <Route path={match.url + '/card'} component={CustomerCard} />
              <Route path={match.url + '/contact/create'} component={CustomerContactCreate} />
              <Route path={match.url + '/contact/:contid'} component={Contact} />
              <Route path={match.url} component={CustomerCard} />
            </Switch>              
    
          </div>
        </section>
      </div>
    );
};

export default Customer;
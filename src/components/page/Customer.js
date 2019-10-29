import React from 'react';
import { useParams } from "react-router";
import { Route, Switch, Link } from "react-router-dom";
import { updateSidebarClass, getCustomer } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import ContentLeft from "../layout/ContentLeft";
import CustomerCard from "../page/CustomerCard";
import CustomerEdit from "../page/CustomerEdit";

const Customer = () => {

    const customer = useSelector(state => state.customer);
    let { id } = useParams();

    const dispatch = useDispatch();
    dispatch(updateSidebarClass("hold-transition sidebar-mini sidebar-collapse"));

    if(!customer.id || (customer.id && (id !== customer.id))) { 
        dispatch(getCustomer(id));
    };

    return (
        <div>

        <ContentLeft/>    
    
        <div className="cardpage-top border-bottom">
    
          <button className="btn btn-sm btn-default main-sidebar-toggler">
            <i className="fas fa-ellipsis-h"></i>
          </button>
    
            <div className="top-name">
                    <Link to={'/customer/' + id}>{customer.name}</Link>
            </div>			
        
        </div>
    
        <section className="content">
    
          <div className="container-fluid">
    
          <Switch>
              <Route path="/customer/:id" component={CustomerCard} />
              <Route path="/customer/:id/edit" component={CustomerEdit} />
          </Switch>              
    
          </div>
        </section>
      </div>
    );
};

export default Customer;
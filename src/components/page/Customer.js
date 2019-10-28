import React from 'react';
import { useParams } from "react-router";
import { Route, Switch, Link } from "react-router-dom";

import ContentLeft from "../layout/ContentLeft";
import CustomerCard from "../page/CustomerCard";

const Customer = () => {

    let { id } = useParams();

    return (
        <div>

        <ContentLeft/>    
    
        <div className="cardpage-top border-bottom">
    
          <button className="btn btn-sm btn-default main-sidebar-toggler">
            <i className="fas fa-ellipsis-h"></i>
          </button>
    
            <div className="top-name">
                    <Link to={'/customer/' + id}>{id}</Link>
            </div>			
        
        </div>
    
        <section class="content">
    
          <div class="container-fluid">
    
          <Switch>
            <Route path="/customer/:id" component={CustomerCard} />
        </Switch>              
    
          </div>
        </section>
      </div>
    );
};

export default Customer;
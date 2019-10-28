import React from 'react';

import { useDispatch} from "react-redux";
import { updateSidebarClass } from "../../redux/actions/index";

const CustomerCreate = () => {

    const dispatch = useDispatch();
    dispatch(updateSidebarClass("noSideMenu"));

    return (
        <section className="content">
            <div className="container-fluid">

                <h3 className="m-0 mb-3">Ny kund</h3>
      
                <div className="card card-primary card-outline">
                    <div className="card-body">
          
                    </div>
                </div>
      
            </div>
        </section>
    );
};

export default CustomerCreate;
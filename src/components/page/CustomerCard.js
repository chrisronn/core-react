import React from 'react';
import { useParams} from "react-router";

const CustomerCard = () => {

    let { id } = useParams();

    return (
        <section className="content">
            <div className="container-fluid">

                <h3 className="m-0 mb-3">KundY {id}</h3>
      
                <div className="card card-primary card-outline">
                    <div className="card-body">
          
                    </div>
                </div>
      
            </div>
        </section>
    );
};

export default CustomerCard;
import React, { useEffect } from 'react';
import { useDispatch,  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCustomers, updateSidebarClass, updateLoader } from "../../redux/actions/index";
import BootstrapTable from 'react-bootstrap-table-next';

const CustomerList = () => {

    const customers = useSelector(state => state.customers);
    const dispatch = useDispatch();

    dispatch(updateSidebarClass("noSideMenu"));
    dispatch(updateLoader(false));

    useEffect(() => {
        dispatch(getCustomers());            
    }, [dispatch]);

    const colFormatter = (cell, row) => {
        let id = row.id;
        return (
          <Link to={'/customer/'+id+'/card'}>
            {cell}
          </Link>
        )
    }

    const columns = [{
        dataField: 'id',
        text: 'ID',
        sort: true
      }, {
        dataField: 'name',
        formatter: colFormatter,
        text: 'Kund',
        sort: true
      }, {
        dataField: 'address',
        text: 'Adress',
        sort: true
      }, {
        dataField: 'city',
        text: 'City',
        sort: true
      }];
      
      const defaultSorted = [{
        dataField: 'id',
        order: 'asc'
      }];



    return (
        <section className="content">
            <div className="container-fluid">

                <h3 className="m-0 mb-3">Kunder</h3>
      
                <div className="card card-primary card-outline">
                    <div className="card-body">
          
                    <BootstrapTable
                        bootstrap4
                        keyField="id"
                        data={ customers }
                        columns={ columns }
                        defaultSorted={ defaultSorted } 
 
                    />

                    </div>
                </div>
      
            </div>
        </section>
    );
};

export default CustomerList;
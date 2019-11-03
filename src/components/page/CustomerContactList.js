import React, { useEffect } from 'react';
import { useDispatch,  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getContacts } from "../../redux/actions/index";
import BootstrapTable from 'react-bootstrap-table-next';

const CustomerContactList = () => {

    const customer = useSelector(state => state.customer);
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts(customer.id));            
    }, [dispatch,customer.id]);

    const colFormatter = (cell, row) => {
        let id = row.id;
        return (
          <Link to={'/customer/'+customer.id+'/contact/' + id}>
            {cell}
          </Link>
        )
    }

    const columns = [{
        dataField: 'id',
        text: 'ID',
        sort: true
      }, {
        dataField: 'fullname',
        formatter: colFormatter,
        text: 'Kontakt',
        sort: true
      }, {
        dataField: 'mobilephone',
        text: 'Mobilnr.',
        sort: true
      }, {
        dataField: 'email',
        text: 'E-post',
        sort: true
      }];
      
      const defaultSorted = [{
        dataField: 'id',
        order: 'asc'
      }];

  return (
    <section className="content">
        <div className="container-fluid">

            <h3 className="m-0 mb-3">Kontakter</h3>

            <div className="card card-primary card-outline">
                <div className="card-body">
    
                    <BootstrapTable
                        bootstrap4
                        keyField="id"
                        data={ contacts }
                        columns={ columns }
                        defaultSorted={ defaultSorted } 
                    />

                </div>
            </div>

        </div>
    </section>
  );
};

export default CustomerContactList;
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/actions/index";

const CustomerCard = () => {

    const customer = useSelector(state => state.customer);
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts(customer.id));            
    }, [dispatch, customer.id]);
  
    return (
        <div>
    <div className="row">
      <section
        id="column1"
        className="col-xl-3 col-lg-4 col-sm-6 box-column connectedSortable ui-sortable"
      >
        <div id="info" className="card card-primary card-outline">
          <div className="card-header dragable ui-sortable-handle" style={{cursor: 'move'}}>
            <h3 className="card-title">
              <i className="fas fa-info-circle fa-fw"></i> Information
            </h3>
            <div className="card-tools">
              <Link to={'/customer/' + customer.id + '/edit'}>
                <i className="fas fa-pencil-alt"></i>
              </Link>
              <button className="btn btn-tool box-toggle" title="Ta bort" data-toggle="modal" data-target="#genericModal">
                <i className="fas fa-chevron-up"></i>
              </button>
              <button className="btn btn-tool box-remove" title="Ta bort" data-toggle="modal" data-target="#genericModal">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
          <div className="card-body no-padding">
            <table className="table">
              <tbody>
                <tr>
                  <td className="cell-label">KundID:</td>
                  <td>{customer.id}</td>
                </tr>
                <tr>
                  <td className="cell-label">Kund:</td>
                  <td>{customer.name}</td>
                </tr>
                <tr>
                  <td className="cell-label">Adress:</td>
                  <td>{customer.address}</td>
                </tr>
                <tr>
                  <td className="cell-label">Postadress:</td>
                  <td>{customer.zipcode} {customer.city}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section
        id="column2"
        className="col-xl-3 col-lg-4 col-sm-6 box-column connectedSortable ui-sortable"
      ></section>
      <section
        id="column3"
        className="col-xl-3 col-lg-4 col-sm-6 box-column connectedSortable ui-sortable"
      >
        <div id="contacts" className="card card-primary card-outline">
          <div className="card-header dragable ui-sortable-handle" style={{cursor: 'move'}}>
            <h3 className="card-title">
              <i className="fas fa-user fa-fw"></i> Kontakter
            </h3>
            <div className="card-tools">
                <Link to={'/customer/' + customer.id + '/contact/create'}>
                    <i className="fas fa-plus"></i>
                </Link>
                <Link to={'/customer/' + customer.id + '/contacts'} className='ml-2'>
                 <i className="fas fa-folder-open"></i>
                </Link>
              <button className="btn btn-tool box-toggle" title="Ta bort" data-toggle="modal" data-target="#genericModal">
                <i className="fas fa-chevron-up"></i>
              </button>
              <button className="btn btn-tool box-remove" title="Ta bort" data-toggle="modal" data-target="#genericModal">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
          <div className="card-body no-padding" style={{display: 'block'}}>
            <table className="table">
              <tbody>                    
                {contacts.map(function(contact, index){
                  return (            
                    <tr key={ index }>
                      <td className="cell-icon"><i className="far fa-user"></i></td>
                      <td><Link to={'/customer/' + contact.custid + '/contact/'+contact.id} className='ml-2'>{contact.fullname}</Link></td>
                    </tr>
                  )
                })}     
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section id="column4" className="col-xl-3 col-lg-4 col-sm-6 box-column connectedSortable ui-sortable"></section>
    </div>
  </div>
    );
};

export default CustomerCard;
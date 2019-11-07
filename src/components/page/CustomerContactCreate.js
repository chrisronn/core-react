import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import useGenericForm from '../hooks/GenericForm';
import { createContact } from "../../redux/actions/index";
import { useHistory } from "react-router-dom";

const CustomerContactCreate = () => {

    let history = useHistory();
    
    const customer = useSelector(state => state.customer);

    const initialState = {
        "custid": customer.id,
        "firstname": "",
        "lastname": "",
        "phone": "",
        "mobilephone": "",
        "email": ""
    }
  
    const dispatch = useDispatch();

    const create = () => {    
      dispatch(createContact(inputs));
      history.push("/customer/" + customer.id + "/card");
    }
    
    //custom hook
    const {inputs, handleInputChange, handleSubmit} = useGenericForm(create,initialState);
    
  return (
      <div>
  
      <h3 className="m-0 mb-3">{inputs.fullname}</h3>
  
      <div className="card card-primary card-outline">
  
        <form name="form" onSubmit={handleSubmit}>
  
          <div className="card-header clearfix">
            <div className="float-left mb-1 mb-sm-0">
              <button type="submit" className="btn btn-success mr-2">
                <i className="fas fa-save mr-1"></i> Spara
              </button>
            </div>
            <div className="float-right mb-1 mb-sm-0">
              <button type="button" className="btn btn-default ml-2" title="Ta bort">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">            
  
                <div className="form-group row">
                  <label className="col-sm-5 col-md-4 col-lg-3 col-form-label">Förnamn:<span className="required-icon">*</span></label>
                  <div className="col-sm-7 col-md-8 col-lg-9">
                    <input type="text" name="firstname" className="form-control" value={inputs.firstname} onChange={handleInputChange} required/>
                  </div>
                </div>
    
                <div className="form-group row">
                  <label className="col-sm-5 col-md-4 col-lg-3 col-form-label">Efternamn:<span className="required-icon">*</span></label>
                  <div className="col-sm-7 col-md-8 col-lg-9">
                    <input type="text" name="lastname" className="form-control" value={inputs.lastname} onChange={handleInputChange} required/>
                  </div>
                </div>
                        
                <div className="form-group row">
                  <label className="col-sm-5 col-md-4 col-lg-3 col-form-label">Telefon:</label>
                  <div className="col-sm-7 col-md-8 col-lg-9">
                    <input type="text" name="phone" className="form-control" value={inputs.phone} onChange={handleInputChange}/>
                  </div>
                </div>
  
                <div className="form-group row">
                  <label className="col-sm-5 col-md-4 col-lg-3 col-form-label">Mobiltelefon:<span className="required-icon">*</span></label>
                  <div className="col-sm-7 col-md-8 col-lg-9">
                    <input type="text" name="mobilephone" className="form-control" value={inputs.mobilephone} onChange={handleInputChange} required/>
                  </div>
                </div>
                
                <div className="form-group row">
                  <label className="col-sm-5 col-md-4 col-lg-3 col-form-label">E-post:<span className="required-icon">*</span></label>
                  <div className="col-sm-7 col-md-8 col-lg-9">
                    <input type="text" name="email" className="form-control" value={inputs.email} onChange={handleInputChange} required/>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </form>
      </div>          
  
    </div>
  );
};

export default CustomerContactCreate;
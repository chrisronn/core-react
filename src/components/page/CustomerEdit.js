import React from 'react';

import { useSelector } from "react-redux";

const CustomerEdit = () => {

    const customer = useSelector(state => state.customer);
  
    return (
        <div>
    
        <h3 className="m-0 mb-3">Information</h3>
    
        <div className="card card-primary card-outline">
    
          <form name="form">
    
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
                    <label className="col-sm-5 col-md-4 col-lg-3 col-form-label">ID:</label>
                    <div className="col-sm-7 col-md-8 col-lg-9 form-control-plaintext">{customer.id}</div>
                  </div>
    
                  <div className="form-group row">
                    <label className="col-sm-5 col-md-4 col-lg-3 col-form-label">Kundnamn:<span className="required-icon">*</span></label>
                    <div className="col-sm-7 col-md-8 col-lg-9">
                      <input type="text" name="name" className="form-control" required/>
                    </div>
                  </div>
    
                  <div className="form-group row">
                    <label className="col-sm-5 col-md-4 col-lg-3 col-form-label">Adress:</label>
                    <div className="col-sm-7 col-md-8 col-lg-9">
                      <input type="text" name="address" className="form-control"/>
                    </div>
                  </div>
    
                  <div className="form-group row">
                    <label className="col-sm-5 col-md-4 col-lg-3 col-form-label">Postnr:</label>
                    <div className="col-sm-7 col-md-8 col-lg-9">
                      <input type="text" name="zipcode" className="form-control"/>
                    </div>
                  </div>
    
                  <div className="form-group row">
                    <label className="col-sm-5 col-md-4 col-lg-3 col-form-label">Ort:<span className="required-icon">*</span></label>
                    <div className="col-sm-7 col-md-8 col-lg-9">
                      <input type="text" name="city" className="form-control" required/>
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

export default CustomerEdit;
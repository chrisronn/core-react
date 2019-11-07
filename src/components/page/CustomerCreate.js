import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch} from "react-redux";
import { updateSidebarClass, createCustomer } from "../../redux/actions/index";
import useGenericForm from '../hooks/GenericForm';

const CustomerCreate = () => {

    let history = useHistory();

    const dispatch = useDispatch();
    dispatch(updateSidebarClass("noSideMenu"));

    const initialState = {
        "name": "",
        "address": "",
        "zipcode": "",
        "city": "",
        "firstname": "",
        "lastname": "",
        "phone": "",
        "mobilephone": "",
        "email": ""
    }

    const create = () => {    
        dispatch(createCustomer(inputs));
        history.push("/customer/list");
    }
    
    const { inputs, handleInputChange, handleSubmit } = useGenericForm(create,initialState);

    return (
        <section className="content">
            <div className="container-fluid">
        
                <h3 className="m-0 mb-3">Ny kund</h3>
        
                <div className="card card-primary card-outline">
        
                    <form name="form" onSubmit={handleSubmit}>
        
                        <div className="card-header clearfix">
                            <div className="float-left mb-1 mb-sm-0">
                            <button type="submit" className="btn btn-success mr-2">
                                <i className="fas fa-save mr-1"></i> Spara
                            </button>
                            </div>
                        </div>
                        <div className="card-body">                
        
                            <div className="row">
        
                                <div className="col-sm-6">
        
                                    <legend>Kunduppgifter</legend>
        
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-md-4 col-lg-3 col-form-label">Kundnamn:<span className="required-icon">*</span></label>
                                        <div className="col-sm-7 col-md-8 col-lg-9">
                                        <input type="text" name="name" className="form-control" value={inputs.name} onChange={handleInputChange} required/>
                                        </div>
                                    </div>
        
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-md-4 col-lg-3 col-form-label">Adress:</label>
                                        <div className="col-sm-7 col-md-8 col-lg-9">
                                        <input type="text" name="address" className="form-control" value={inputs.address} onChange={handleInputChange}/>
                                        </div>
                                    </div>
        
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-md-4 col-lg-3 col-form-label">Postnr:</label>
                                        <div className="col-sm-7 col-md-8 col-lg-9">
                                        <input type="text" name="zipcode" className="form-control" value={inputs.zipcode} onChange={handleInputChange}/>
                                        </div>
                                    </div>
        
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-md-4 col-lg-3 col-form-label">Ort:<span className="required-icon">*</span></label>
                                        <div className="col-sm-7 col-md-8 col-lg-9">
                                        <input type="text" name="city" className="form-control" value={inputs.city} onChange={handleInputChange} required/>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col-sm-6">
        
                                    <legend>Kontakt</legend>
        
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
                                        <label className="col-sm-5 col-md-4 col-lg-3 col-form-label">Mobilnr:<span className="required-icon">*</span></label>
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
        </section>
    );
};

export default CustomerCreate;
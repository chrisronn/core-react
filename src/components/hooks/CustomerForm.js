
//import { useSelector } from "react-redux";
import {useState} from 'react';

const useCustomerForm = (callback, initial) => {

  //const customer = useSelector(state => state.customer);
  
  const [inputs, setInputs] = useState(initial);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  }

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export default useCustomerForm;
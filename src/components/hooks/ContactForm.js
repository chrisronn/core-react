
import { useState } from 'react';
import { useSelector } from "react-redux";

const useContactForm = (callback) => {
    
  const contact = useSelector(state => state.contact);

  const [inputs, setInputs] = useState(contact);

  console.log("contactID in form: " + contact.id);

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

export default useContactForm;
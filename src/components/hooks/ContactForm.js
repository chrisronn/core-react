
import { useSelector } from "react-redux";
import {useState} from 'react';

const useContactForm = (callback) => {

  const contact = useSelector(state => state.contact);
  
  const [inputsContact, setInputsContact] = useState(contact);

  const handleSubmitContact = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  }

  const handleInputChangeContact = (event) => {
    event.persist();
    setInputsContact(inputsContact => ({...inputsContact, [event.target.name]: event.target.value}));
  }
  return {
    handleSubmitContact,
    handleInputChangeContact,
    inputsContact
  };
}

export default useContactForm;
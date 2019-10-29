
import { useSelector, useDispatch } from "react-redux";
import { editCustomer } from "../../redux/actions/index";

const useCustomerForm = (callback) => {

    const customer = useSelector(state => state.customer);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        if (event) {
          event.preventDefault();
        }
        callback();
    }

    const handleInputChange = (event) => {
        event.persist();
        dispatch(editCustomer({...customer, [event.target.name]: event.target.value}));
        //setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }

    return {
        handleSubmit,
        handleInputChange,
        customer
      };
}

export default useCustomerForm;
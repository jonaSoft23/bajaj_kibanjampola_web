import React, {useReducer} from "react";
import * as Yup from "yup";

const validate = Yup.object({
    first_name: Yup.string()
      .required("required"),      
    last_name: Yup.string()
      .required("required"),
    nin_number: Yup.string()
      .required("required")
      .min(14, "NIN number must be 14 characters")   
      .max(14, "NIN number must be 14 characters"),   
    initial_charge: Yup.string()
      .required("required"),   
    initial_deposit: Yup.string()
      .required("required"),   
    phone_number: Yup.string()
      .required("required")
      .min(10, "Phone number must be 10 characters")   
      .max(10, "Phone number must be 10 characters"),  
})

const AddTransactions = () => (
    <h1>Add a new Transaction</h1>

);

export default AddTransactions;
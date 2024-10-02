import React, { useState, useRef } from "react";
import { addCustomer } from "./slices/customerSlice";
import { useDispatch } from "react-redux";

const Customer = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  // const [customers, setCustomers] = useState([]);
  

  const customerFun = () => {
    if (input) {
      // setCustomers((pre) => [...pre, input])
      dispatch(addCustomer(input))  
      setInput('')
      console.log(input);
    }
  };

  return (
    <>
      <div>
        <h3>Add new customer</h3>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={customerFun}>add</button>
      </div>
    </>
  );
};

export default Customer;

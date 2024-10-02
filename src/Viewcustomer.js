import React from "react";
import { useSelector } from "react-redux";
// import { deleteCustomer } from "./slices/customerSlice";
// import { useDispatch } from "react-redux";


const Viewcustomer = () => {
    const asd = useSelector((state) => state.customers)
    // const dispatch = useDispatch();

    // const deleteFun = (index) => {
    //     dispatch(deleteCustomer(index))
    //     }
      
    return (
        <div>
            <h3>customer list</h3>
            <ul style={{listStyle:'none'}}>
                {
                    asd.map((data, index) => <li>{data}</li>)
                }
            </ul>
        </div>
    )
}

export default Viewcustomer;
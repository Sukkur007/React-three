import logo from "./logo.svg";
import React, { useState, useRef } from "react";
import "./App.css";
import Router from "./Router"
import Customer from "./Customer";
import Viewcustomer from "./Viewcustomer";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {

  



  return (
    // <Provider store={store}>
    //   <div className="App">
    //     <h1>simple Redux example</h1>
    //     <Customer />
    //     <Viewcustomer/>
    //   </div>
    //  </Provider>


    <Router/>
  );
}

export default App;

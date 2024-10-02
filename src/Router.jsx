import logo from "./logo.svg";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './main/Home'
import About from "./main/About";
import Contact from "./main/Contact";
import Person from "./main/Person";
import "./App.css";
import Navbar from "./Nav/Navbar";
// import Customer from "./Customer";
// import Viewcustomer from "./Viewcustomer";
// import { Provider } from "react-redux";
// import { store } from "./store";

function Router() {
  return (
    // <Provider store={store}>
    //   <div className="App">
    //     <h1>simple Redux example</h1>
    //     <Customer />
    //     <Viewcustomer />
    //   </div>
    // </Provider>


    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/person' element={<Person/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

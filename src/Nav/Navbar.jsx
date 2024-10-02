import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return(
        <>
            <h1>Grony</h1>
            <ul className="flex_wrap">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/person">Person</Link>
            </ul>
        </>
    )
}

export default Navbar;
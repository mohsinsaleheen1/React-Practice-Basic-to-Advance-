import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </nav>
    </>
  );
};

export default Navbar;

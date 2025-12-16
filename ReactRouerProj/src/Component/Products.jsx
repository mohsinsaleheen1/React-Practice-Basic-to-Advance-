import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Products = () => {
  return (
    <>
      <div>
        <h1>All Products are Available</h1>
        <NavLink to="jeans">Jeans</NavLink>
        <NavLink to="shirts">Shirts</NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Products;

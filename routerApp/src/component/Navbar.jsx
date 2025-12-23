import React from "react";
import { NavLink, Outlet } from "react-router";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center py-6 px-10 bg-blue-400">
        <h1 className="text-3xl font-semibold text-white">ROUTER</h1>
        <nav className="flex gap-4">
          <NavLink
            to="home"
            className={({ isActive }) =>
              `uppercase text-[18px] ${
                isActive ? "text-blue-900" : "text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              `uppercase text-[18px] ${
                isActive ? "text-blue-900" : "text-white"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) =>
              `uppercase text-[18px] ${
                isActive ? "text-blue-900" : "text-white"
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              `uppercase text-[18px] ${
                isActive ? "text-blue-900" : "text-white"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

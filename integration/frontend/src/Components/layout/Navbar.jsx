import React from "react";
import { Link, Outlet, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");
  if(!token){
     navigate("/login");
  }
  const logout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };
  return (
    <>
      <div className="flex justify-between items-center bg-blue-100 py-3 px-6 shadow-md">
        <h1 className="text-3xl font-bold text-blue-700">ASSIGNMENT</h1>
        <div className="flex gap-5">
          <Link to="home" className="text-[18px] text-blue-700">
            Home
          </Link>
          <Link to="about" className="text-[18px] text-blue-700">
            About
          </Link>
          <Link to="contact" className="text-[18px] text-blue-700">
            Contact
          </Link>
        </div>
        <button
          className="bg-blue-800 hover:bg-blue-700 cursor-pointer py-2 px-4 border-0 rounded-md text-white"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

import React from "react";
import { Outlet } from "react-router";
import ResponsiveAppBar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Outlet />
    </div>
  );
};

export default Home;

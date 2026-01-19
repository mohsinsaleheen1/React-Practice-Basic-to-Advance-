import React from "react";
import RealTimeDB from "./RealTimeDB";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-center flex-col items-center w-[100%] h-[100vh]">
        <h1>Wellcome To Our Dashboard</h1>
        <br />
        <button
          onClick={logout}
          className="bg-blue-800 py-1 px-12 rounded-md text-white mt-4 cursor-pointer"
        >
          Logout
        </button>
        {/* <RealTimeDB /> */}
      </div>
    </>
  );
};

export default Home;

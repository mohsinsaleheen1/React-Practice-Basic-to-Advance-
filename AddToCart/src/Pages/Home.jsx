import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const heroButton = () => {
    navigate("/product");
  };
  return (
    <div>
      <div className="flex justify-center flex-col gap-3 items-center bg-amber-50 py-32">
        <h1 className="text-2xl">This is Home Component</h1>
        <button
          className="bg-amber-700 text-white rounded-md py-2 px-3 cursor-pointer"
          onClick={heroButton}
        >
          Go To Products
        </button>
      </div>
    </div>
  );
};

export default Home;

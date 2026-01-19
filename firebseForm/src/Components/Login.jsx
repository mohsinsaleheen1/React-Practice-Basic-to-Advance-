import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginForm = () => {
    navigate("/home");
  };
  return (
    <>
      <div className="flex justify-center items-center w-[100%] h-[100vh]">
        <div className="flex flex-col w-[400px] rounded-md shadow-md px-7 py-5">
          <h1 className="text-2xl text-center text-blue-600">LOGIN FORM</h1>
          <input
            className="py-1 px-1 my-3 bg-gray-100 rounded-sm"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
          />
          <input
            type="password"
            className="py-1 px-1 my-3 bg-gray-100 rounded-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          <button
            onClick={loginForm}
            className="bg-blue-800 py-1 rounded-md text-white mt-4 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;

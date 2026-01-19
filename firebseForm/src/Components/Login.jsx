import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginForm = () => {
    if (!email || !password) {
      alert("Please fill all fields");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((value) => {
          const user = value.user;
          console.log(user);
          navigate("/home");
        })
        .catch((err) => {
          alert(err);
          console.log(err);
        });
    }
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
          <p className="text-center text-sm pt-5">
            Don't have any account{" "}
            <Link to="/" className="text-blue-700">
              Signup here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

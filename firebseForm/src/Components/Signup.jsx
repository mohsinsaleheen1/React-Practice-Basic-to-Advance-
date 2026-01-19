import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
const auth = getAuth(app);
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const signupForm = () => {
    if (!firstName || !lastName || !email || !password) {
      alert("Please Fill All Field");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((value) => {
          console.log(value);
          navigate("/login");
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
          <h1 className="text-2xl text-center text-blue-600">SINGUP FORM</h1>
          <input
            className="py-1 px-1 my-3 bg-gray-100 rounded-sm"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
          <input
            className="py-1 px-1 my-3 bg-gray-100 rounded-sm"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
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
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-800 py-1 rounded-md text-white mt-4 cursor-pointer"
            onClick={signupForm}
          >
            Submit
          </button>
          <p className="text-center text-sm pt-5">
            Already have account{" "}
            <Link to="/login" className="text-blue-700">
              login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;

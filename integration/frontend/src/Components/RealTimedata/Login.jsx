import { useEffect, useState } from "react";
import { signin } from "../../services/auth/auth";
import React from "react";
import { Link, useNavigate } from "react-router";
const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shouldLogin, setShouldLogin] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!shouldLogin) return;
    const handleLogin = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const userData = await signin(userEmail, userPassword);
        console.log(userData);
        if (userData.status == 200) {
          navigate("/navbar/home");
        } else {
          navigate("/login");
        }
      } catch (error) {
        setError(error.message || "Login failed");
      } finally {
        setIsLoading(false);
        setShouldLogin(false);
      }
    };
    handleLogin();
  }, [shouldLogin, userEmail, userPassword]);
  return (
    <>
      <div className="flex justify-center items-center w-[100%] h-[100vh]">
        <div className="flex flex-col border border-[1px] w-[400px] px-5 py-5 border-gray-400  rounded-md shadow-md">
          <h1 className="text-center text-2xl font-bold text-gray-600 pb-7">
            LOGIN FORM
          </h1>
          <input
            type="email"
            placeholder="Email"
            className="border border-[1px] py-1 px-1 my-2 w-[100%] outline-0 rounded-[4px] border-gray-300"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-[1px] py-1 px-1 my-2 w-[100%] outline-0 rounded-[4px] border-gray-300"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <br />
          <button
            className="bg-blue-500 rounded-md py-[4px] uppercase text-white cursor-pointer"
            onClick={() => setShouldLogin(true)}
            disabled={isLoading || !userEmail || !userPassword}
          >
            {isLoading ? "Login in...." : "Login"}
          </button>
          <p className="text-[14px] py-3 text-center">
            Don't Have Account ?{" "}
            <Link to="/" className="font-bold">
              Create Account
            </Link>
          </p>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Login;

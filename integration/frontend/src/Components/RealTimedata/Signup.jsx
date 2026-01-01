import { useEffect, useState } from "react";
import { Signup } from "../../services/auth/auth";
import { Link, useNavigate } from "react-router";

const SignupForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [shouldSignup, setShouldSignup] = useState(false);
  console.log("User Name is", user);

  useEffect(() => {
    if (!shouldSignup) return;
    const handleSignup = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const userData = await Signup(userName, userEmail, userPassword);
        setUser(userData);
        navigate("/login");
      } catch (err) {
        setError(err.message || "Signup failed");
        setUser(null);
      } finally {
        setIsLoading(false);
        setShouldSignup(false); // reset trigger
      }
    };

    handleSignup();
  }, [shouldSignup, userEmail, userPassword, userName]);

  return (
    <>
      <div className="flex justify-center items-center w-[100%] h-[100vh]">
        <div className="flex flex-col border border-[1px] w-[400px] px-5 py-5 border-gray-400  rounded-md shadow-md">
          <h1 className="text-center text-2xl font-bold text-gray-600 pb-7">
            SIGNUP FORM
          </h1>
          <input
            type="email"
            placeholder="Email"
            className="border border-[1px] py-1 px-1 my-2 w-[100%] outline-0 rounded-[4px] border-gray-300"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            type="fname"
            placeholder="first name"
            className="border border-[1px] py-1 px-1 my-2 w-[100%] outline-0 rounded-[4px] border-gray-300"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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
            onClick={() => setShouldSignup(true)}
            disabled={isLoading || !userEmail || !userPassword || !userName}
          >
            {isLoading ? "Signup in..." : "Signup"}
          </button>
          <p className="text-[14px] py-3 text-center">
            Already Have Account ?{" "}
            <Link to="/login" className="font-bold">
              Login here
            </Link>
          </p>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {user && <h2>Welcome, {user.user.userName}</h2>}
        </div>
      </div>
    </>
  );
};

export default SignupForm;

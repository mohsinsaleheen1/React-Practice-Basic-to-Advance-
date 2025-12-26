import { useEffect, useState } from "react";
import { Signup } from "../../services/auth/auth";
const SignupForm = () => {
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
    <div>
      <input
        type="email"
        placeholder="Email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        type="fname"
        placeholder="first name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <br />
      <button
        onClick={() => setShouldSignup(true)}
        disabled={isLoading || !userEmail || !userPassword || !userName}
      >
        {isLoading ? "Signup in..." : "Signup"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && <h2>Welcome, {user.user.userName}</h2>}
    </div>
  );
};

export default SignupForm;

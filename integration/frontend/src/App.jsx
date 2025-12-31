import SignupForm from "./Components/RealTimedata/Signup";
import { Routes, Route } from "react-router";
import { Signup } from "./services/auth/auth";
import Login from "./Components/RealTimedata/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     
    </>
  );
}

export default App;

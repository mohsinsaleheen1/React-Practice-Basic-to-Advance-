import { Route, Routes } from "react-router";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { UserProvider } from "./Contexts/AuthContext";
import Profile from "./Pages/Profile";
import SignupForm from "./Pages/Signup";
import ProtectedRoute from "./Pages/ProtectedRoute";

function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="signup" element={<SignupForm />} />
            <Route path="login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;

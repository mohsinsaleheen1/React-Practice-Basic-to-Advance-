import SignupForm from "./Components/RealTimedata/Signup";
import { Routes, Route } from "react-router";
import Login from "./Components/RealTimedata/Login";
import Navbar from "./Components/layout/Navbar";
import Dashboard from "./Components/RealTimedata/Dashboard";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

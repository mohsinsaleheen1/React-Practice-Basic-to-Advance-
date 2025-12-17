import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";
import PageNotFound from "./Component/PageNotFound";
import Products from "./Component/Products";
import Shirts from "./Component/Shirts";
import Jeans from "./Component/Jeans";
import Users from "./Component/Users";
import UserDetail from "./Component/UserDetail";
import Search from "./Component/Search";
function App() {
  // const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products" element={<Products />}>
          <Route path="shirts" element={<Shirts />} />
          <Route path="jeans" element={<Jeans />} />
        </Route>
        <Route path="/user" element={<Users />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/contact")}>Contact</button> */}
    </>
  );
}

export default App;

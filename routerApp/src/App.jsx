import { Route, Routes } from "react-router";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Contact from "./component/Contact";
import Products from "./component/Products";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

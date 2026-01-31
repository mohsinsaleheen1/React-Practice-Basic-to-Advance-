import { Route, Routes } from "react-router";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import MultipleProduct from "./Pages/MultipleProduct";
import CardProvider from "./Context/CardContext";
import AddToCartList from "./Pages/AddToCartList";
import SingleProduct from "./Pages/SingleProduct";

function App() {
  return (
    <>
      <CardProvider>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="product" element={<MultipleProduct />} />
            <Route path="addtocardpro" element={<AddToCartList />} />
            <Route path="singleproduct/:id" element={<SingleProduct />} />
          </Route>
        </Routes>
      </CardProvider>
    </>
  );
}

export default App;

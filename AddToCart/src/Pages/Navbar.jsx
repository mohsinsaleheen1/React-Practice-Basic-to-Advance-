import { Link, Outlet, useNavigate } from "react-router";
import { FaShoppingBag } from "react-icons/fa";
import { useCardContext } from "../Context/CardContext";
const Navbar = () => {
  const naviagte = useNavigate();
  const { count } = useCardContext();
  const addTocart = () => {
    naviagte("/addtocardpro");
  };
  return (
    <>
      <div className="flex justify-between items-center py-6 px-6 bg-gray-50 shadow-md">
        <div>
          <h1 className="text-2xl text-amber-700 font-bold">ADD TO CART</h1>
        </div>
        <div className="flex gap-5 items-center">
          <Link to="">Home</Link>
          <Link to="product">Products</Link>
          <button
            className="border border-[1px] border-gray-600 rounded-md px-2 py-2 flex items-center gap-1 cursor-pointer"
            onClick={addTocart}
          >
            <FaShoppingBag />
            <span className="text-amber-700">{count}</span>
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

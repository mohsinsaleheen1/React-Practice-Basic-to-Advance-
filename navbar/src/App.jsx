import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
function App() {
  const [iconBar, setIconBar] = useState(false);
  return (
    <>
      <nav className="py-6 px-10 flex justify-between items-center bg-gradient-to-r from-blue-400 to-blue-900">
        <h1 className="text-3xl font-medium text-white">NAVBAR</h1>
        <ul className="list-none hidden md:flex gap-6">
          <li>
            <a href="#" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={() => setIconBar(!iconBar)}
          className="flex justify-center border rounded-md p-2 border-white md:hidden"
        >
          {iconBar ? (
            <IoClose className="text-white" />
          ) : (
            <FaBarsStaggered className="text-white" />
          )}
        </button>
      </nav>
      {/* Mobile Menu */}
      {iconBar && (
        <ul className="md:hidden bg-gradient-to-b from-blue-900 to-blue-600 text-center py-6 space-y-4 transition-all duration-300">
          <li>
            <a href="#" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      )}
    </>
  );
}

export default App;

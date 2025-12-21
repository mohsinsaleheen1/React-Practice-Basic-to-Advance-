import React from "react";
import { MdOutlineCancel } from "react-icons/md";
const Expenseitem = ({ item, onDelete }) => {
  console.log(item);
  return (
    <>
      <div className="bg-gray-100 py-3 px-3 my-2 flex justify-between items-center">
        <p className="text-gray-700">{item.title}</p>
        <p className="text-gray-700">$ {item.amount}</p>
        <button
          className="text-indigo-900 cursor-pointer"
          onClick={() => onDelete(item.id)}
        >
          <MdOutlineCancel />
        </button>
      </div>
    </>
  );
};

export default Expenseitem;

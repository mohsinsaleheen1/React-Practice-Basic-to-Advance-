import React from "react";
import { useCardContext } from "../Context/CardContext";
import { useNavigate } from "react-router";
const AddToCartList = () => {
  const { items } = useCardContext();
  const navigate = useNavigate();
  const viewSingleProduct = (id) => {
    navigate(`/singleproduct/${id}`);
  };
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Product Name
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Category
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              QTY
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Price
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Total Price
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {items.map((pro) => (
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">
                {pro.title}
              </td>
              <td className="px-6 py-4">{pro.category}</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  01
                </span>
              </td>
              <td className="px-6 py-4">${pro.price}</td>
              <td className="px-6 py-4 font-bold text-gray-700">
                ${pro.price}
              </td>
              <td className="px-6 py-4">
                <button
                  className="border px-2 py-1 rounded-md border-[1px] border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white transition-all duration-300 cursor-pointer"
                  onClick={() => viewSingleProduct(pro.id)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddToCartList;

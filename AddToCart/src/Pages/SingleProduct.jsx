import React from "react";
import { useCardContext } from "../Context/CardContext";
import { useParams } from "react-router";
const SingleProduct = () => {
  const { id } = useParams();
  const { items } = useCardContext();
  const product = items.find((item) => item.id === parseInt(id));
  return (
    <div className="max-w-6xl mx-auto m-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="flex flex-col md:flex-row">
        {/* Left Side: Image Section */}
        <div className="md:w-1/2 bg-gray-50 p-8 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-96 object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side: Content Section */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <span className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-2">
            {product.category}
          </span>

          <h1 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
            {product.title}
          </h1>

          <div className="flex items-center mb-6">
            <span className="text-4xl font-light text-gray-900">
              ${product.price}
            </span>
            <span className="ml-4 px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
              IN STOCK
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8 border-l-4 border-gray-200 pl-4 italic">
            {product.description}
          </p>

          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2 bg-amber-50 px-3 py-2 rounded-lg border border-amber-100">
              <div className="flex text-amber-400">
                {/* Aik chota sa logic 5 stars dikhane ke liye */}
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < Math.round(product.rating.rate)
                        ? "text-amber-400"
                        : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="font-bold text-amber-900">
                {product.rating.rate}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-500">
              <span className="text-gray-900 font-bold">
                {product.rating.count}
              </span>{" "}
              Happy Customers
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 flex gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="font-medium">Free Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

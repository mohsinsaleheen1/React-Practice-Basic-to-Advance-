import React, { useEffect, useState } from "react";
import { useCardContext } from "../../Context/CardContext";
import axios from "axios";
const Card = () => {
  const { addToCartItem } = useCardContext();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {products.map((item) => (
        <div
          key={item.key}
          className="w-[300px] min-h-[370px] rounded-md shadow-md px-5 pb-3 mt-3"
        >
          <div className="w-full h-[240px]">
            <img src={item.image} alt="" className="w-full h-full" />
          </div>
          <h1 className="text-[18px] pt-2 font-semibold">
            {item.title.split(" ").slice(0, 4).join(" ")}
          </h1>
          <p className="text-sm py-3 text-gray-700">
            {item.description.split(" ").slice(0, 30).join(" ")}
          </p>
          <button
            className="bg-amber-600 text-white rounded-md py-2 px-3 w-full cursor-pointer hover:bg-amber-700"
            onClick={() => addToCartItem(item)}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </>
  );
};

export default Card;

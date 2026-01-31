import React, { createContext, useContext, useState } from "react";
const UseCard = createContext(null);
const CardProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const addToCartItem = (product) => {
    setItems((prevItems) => {
      const isItemInCart = prevItems.find((item) => item.id === product.id);
      if (isItemInCart) {
        alert(
          "This Item is already add to cart please click on the cart button and increase this product Quantity",
        );
        return prevItems;
      } else {
        setCount(count + 1);
        return [...prevItems, product];
      }
    });
  };
  console.log(items);
  return (
    <>
      <UseCard.Provider value={{ count, setCount, addToCartItem, items }}>
        {children}
      </UseCard.Provider>
    </>
  );
};
export const useCardContext = () => useContext(UseCard);
export default CardProvider;

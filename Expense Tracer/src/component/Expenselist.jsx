import React from "react";
import Expenseitem from "./Expenseitem";
const Expenselist = ({ expenses, onDelete }) => {
  if (expenses.length === 0) {
    return (
      <p className="text-center text-sm py-3.5 uppercase text-gray-500">
        No Expense Yet
      </p>
    );
  }
  return (
    <>
      {expenses.map((item) => (
        <Expenseitem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Expenselist;

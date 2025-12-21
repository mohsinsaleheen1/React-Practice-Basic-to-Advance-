import React, { useState } from "react";
import { useRef } from "react";

const Expenseform = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const titleRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return alert("Please fill all fields!");
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
    };
    onAddExpense(newExpense);
    setTitle("");
    setAmount("");
    titleRef.current.focus();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[400px]">
        <input
          type="text"
          className="bg-gray-100 outline-none py-2 px-1 rounded-md"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ref={titleRef}
        />
        <input
          type="number"
          className="bg-gray-100 outline-none py-2 px-1 rounded-md"
          placeholder="Amount $"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          type="submit"
          className="bg-gradient-to-r cursor-pointer from-indigo-400 to-indigo-900 text-white uppercase text-sm py-1 border rounded-md"
        >
          Add Expense
        </button>
      </form>
    </>
  );
};

export default Expenseform;

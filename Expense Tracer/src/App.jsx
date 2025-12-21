import { useEffect, useState } from "react";
import Expenseform from "./component/Expenseform";
import Expenselist from "./component/Expenselist";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });
  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id != id));
  };
  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
  return (
    <>
      <div className="flex justify-center items-center w-full h-[100vh]">
        <div className="border rounded-md px-3 py-3">
          <h1 className="text-center text-2xl font-semibold text-gray-500 pb-3">
            Expense Tracker
          </h1>
          <Expenseform onAddExpense={addExpense} />
          <h3 className="text-sm py-3.5 uppercase text-gray-500">
            Total Expense: $ {totalExpenses.toFixed(2)}
          </h3>
          <Expenselist expenses={expenses} onDelete={deleteExpense} />
        </div>
      </div>
    </>
  );
}

export default App;

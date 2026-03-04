import React, { useState, useMemo } from "react";

const WithOutmemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const expenseCalculation = () => {
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total += i;
    }
    return total;
  };
  //   const result = expenseCalculation();
  const result = useMemo(() => expenseCalculation(), []);
  console.log(result);
  return (
    <>
      <h1>Results:{result}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h3>{count}</h3>
    </>
  );
};

export default WithOutmemo;

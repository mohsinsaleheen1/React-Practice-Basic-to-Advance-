import React, { useEffect, useState } from "react";

const UseEffectPrac = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Hello I am A Effect");
  });
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Update State</button>
    </div>
  );
};

export default UseEffectPrac;

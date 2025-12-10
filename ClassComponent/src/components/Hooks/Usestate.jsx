import React, { useState } from "react";

function Usestate() {
  const [count, setCount] = useState(0);
  const Increament = () => {
    setCount(count + 1);
  };
  const Decreament = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      return count;
    }
  };
  const Reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increament}>Increment</button>
      <button onClick={Decreament}>Deccrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default Usestate;

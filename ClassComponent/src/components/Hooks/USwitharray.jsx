import React, { useState } from "react";
// import Usestate from "./Usestate";

const USwitharray = () => {
  const num = [22, 12, 32, 34, 42];
  const [number, setNumber] = useState(num);
  const changelist = () => {
    setNumber([89, 98, 77, 44, 11]);
  };
  return (
    <div>
      <ul>
        {number.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      <button onClick={changelist}>Change</button>
    </div>
  );
};

export default USwitharray;

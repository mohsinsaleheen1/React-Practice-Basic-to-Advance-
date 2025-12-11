import { useState } from "react";
import "./App.css";
export default function Square({ value, onSquareClick }) {
  // const [value, setValue] = useState(null);
  // function handleClick() {
  //   setValue("X")
  // }
  // onClick={handleClick}
  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}

import React, { useReducer } from "react";

const Reducer = () => {
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decreament":
        return state == 0 ? state = 0 : (state - 1);
      case "reset":
        return intialState;
      default:
        return state;
    }
  };
  const intialState = 0;
  const [count, dispatch] = useReducer(reducer, intialState);

  return (
    <>
      <h1>{count}</h1>
      <br />
      <button onClick={() => dispatch("increment")}>Increament</button>
      <button onClick={() => dispatch("decreament")}>Decreament</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </>
  );
};

export default Reducer;

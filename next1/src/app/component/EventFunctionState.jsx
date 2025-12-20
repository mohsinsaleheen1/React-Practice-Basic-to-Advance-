import React, { useState } from "react";

const EventFunctionState = () => {
  const [firstName, setFirstName] = useState("Hassan");
  //   const sayHello = (e) => {
  //     alert(`Kaisay hun ${e}`);
  //   };
  const changeName = () => {
    setFirstName("Hussain");
  };
  return (
    <>
      {/* <h2>Events Functions & State</h2> */}
      {/* <button onClick={() => alert("Hello world")}>Click</button> */}
      {/* <button onClick={() => sayHello("Mohsin")}>Click</button> */}
      <p>My name is {firstName}</p>
      <button onClick={changeName}>click me</button>
    </>
  );
};

export default EventFunctionState;

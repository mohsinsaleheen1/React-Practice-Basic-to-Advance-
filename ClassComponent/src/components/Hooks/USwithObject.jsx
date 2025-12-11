import React, { useState } from "react";

const USwithObject = () => {
  const Obj = {
    name: "Mohsin",
    age: 23,
    height: 5.0,
    isYoung: true,
  };
  const [person, setPerson] = useState(Obj);
  const changeState = () => {
    setPerson(prevstate =>{
        return{
            ...prevstate,
            name:"Muneeb"
    }
    })
    // setPerson({
    //   name: "Muneeb",
    //   age: 20,
    //   height: 5.0,
    //   isYoung: true,
    // });
  };
  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.height}</h1>
      <h1>{person.isYoung}</h1>
      <button onClick={changeState}>Click</button>
    </div>
  );
};

export default USwithObject;

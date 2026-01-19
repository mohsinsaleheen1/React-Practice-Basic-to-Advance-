import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
const db = getDatabase(app);
const RealTimeDB = () => {
  const putData = () => {
    set(ref(db, "user/mohsin"), {
      id: "1",
      name: "Mohsin",
      age: "22",
    });
  };
  return (
    <>
      <div>
        <h1>Real Time DataBase</h1>
        <button onClick={putData} className="bg-blue-500 w-40 py-1 text-white">Put Data</button>
      </div>
    </>
  );
};

export default RealTimeDB;

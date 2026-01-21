import React, { useContext } from "react";
import "../App.css";
import { ThemeContext } from "../Context/ThemeContext";

const Home = () => {
  //   const { theme, lightTheme } = useContext(ThemeContext);
  const { count, Decreament, increament } = useContext(ThemeContext);
  return (
    <>
      <div className="counter">
        <button onClick={Decreament}>-</button>
        <p>{count}</p>
        <button onClick={increament}>+</button>
      </div>
    </>

    // <div>
    //   <p>{theme}</p>
    //   <button onClick={lightTheme}>change Theme</button>
    // </div>
  );
};

export default Home;

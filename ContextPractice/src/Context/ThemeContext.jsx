import React, { createContext, useState } from "react";
export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  //   const [theme, setTheme] = useState("light");
  //   const lightTheme = () => {
  //     setTheme((prev) => (prev === "light" ? "dark" : "light"));
  //   };
  const [count, setCount] = useState(0);
  const Decreament = () => {
    setCount((cnt) => (cnt !== 0 ? count - 1 : 0));
  };
  const increament = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <ThemeContext.Provider value={{ count, Decreament, increament }}>
        {children}
      </ThemeContext.Provider>
      {/* <ThemeContext.Provider value={{ theme, lightTheme }}>
        {children}
      </ThemeContext.Provider> */}
    </div>
  );
};

export default ThemeProvider;

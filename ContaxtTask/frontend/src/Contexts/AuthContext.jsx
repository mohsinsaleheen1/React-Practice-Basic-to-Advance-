import { createContext, useState, useContext } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("AuthData");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("AuthData", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("AuthData");
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export const userContextData = () => useContext(UserContext);

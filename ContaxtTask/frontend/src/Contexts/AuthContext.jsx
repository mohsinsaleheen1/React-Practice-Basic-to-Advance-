import { createContext, useState, useContext, useEffect } from "react";
import { apiRequest } from "../Services/ApiServices";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const initAuth = async () => {
      try {
        const data = await apiRequest("/home");
        console.log("REFRSH HONE PAR DATA:", data);
        if (data.user) {
          setUser(data.user);
        }
      } catch (err) {
        console.log("No active session found", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, []);
  const login = (userData) => {
    console.log("Context Wala Data", userData);
    setUser(userData);
  };
  const logout = async () => {
    try {
      await apiRequest("/logout", { method: "POST" });
      setUser(null);
    } catch (err) {
      console.error("Logout fail hua", err);
    }
  };
  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};
export const userContextData = () => useContext(UserContext);

import React, { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { loginUser, setAuthToken } from "../Services/apiService";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token");
  });

  const login = async (username, password) => {
    try {
      const data = await loginUser(username, password);
      const { token } = data;
      setToken(token);
      localStorage.setItem("token", token);
      setAuthToken(token);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    setAuthToken(null);
  };
  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

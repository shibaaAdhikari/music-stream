// // AuthProvider.js (context for managing authentication)
// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   const login = (token) => {
//     localStorage.setItem("token", token);
//     setToken(token);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//   };

//   return (
//     <AuthContext.Provider value={{ token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// auth.js
export const setAuthToken = (token) => {
  localStorage.setItem("token", token);
};

export const getAuthToken = () => {
  return localStorage.getItem("token");
};

export const setUsername = (username) => {
  localStorage.setItem("username", username);
};

export const getUsername = () => {
  return localStorage.getItem("username");
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
};


import React, { createContext, useContext, useState } from "react";

// Create a new context
const UserContext = createContext();

// Create a custom hook to use the user context
export function useUserContext() {
  return useContext(UserContext);
}

// Create a UserProvider component to manage user state
export function UserProvider({ children }) {
  // State to store user information, including role
  const [user, setUser] = useState({
    role: "", // Initialize with an empty role
  });

  // Function to set the user's role
  function setUserRole(role) {
    setUser({ ...user, role });
  }

  return (
    <UserContext.Provider value={{ user, setUserRole }}>
      {children}
    </UserContext.Provider>
  );
}

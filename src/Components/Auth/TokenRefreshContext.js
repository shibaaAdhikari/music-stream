// TokenRefreshContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context
const TokenRefreshContext = createContext();

// Provider component to wrap your application
export function TokenRefreshProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  // Implement token refresh logic here
  const refreshAccessToken = async () => {
    try {
      // Send a request to your backend to refresh the token
      const response = await fetch("http://your-api-url/refresh-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${refreshToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAccessToken(data.accessToken);
        // Update the refresh token if it's rotated
        if (data.refreshToken) {
          setRefreshToken(data.refreshToken);
        }
      } else {
        // Handle token refresh failure (e.g., logout the user).
        // You may want to clear tokens and redirect to the login page.
      }
    } catch (error) {
      // Handle network errors or other issues.
    }
  };

  // Check if the access token is expired
  const isAccessTokenExpired = () => {
    if (!accessToken) {
      return true;
    }
    const tokenData = JSON.parse(atob(accessToken.split(".")[1]));
    return tokenData.exp * 1000 < Date.now(); // Convert exp to milliseconds
  };

  useEffect(() => {
    // Check for token expiration and refresh if needed
    if (isAccessTokenExpired()) {
      refreshAccessToken();
    }
  }, [accessToken]);

  return (
    <TokenRefreshContext.Provider value={{ accessToken, refreshToken }}>
      {children}
    </TokenRefreshContext.Provider>
  );
}

// Custom hook to consume the context
export function useTokenRefresh() {
  const context = useContext(TokenRefreshContext);
  if (!context) {
    throw new Error("useTokenRefresh must be used within a TokenRefreshProvider");
  }
  return context;
}

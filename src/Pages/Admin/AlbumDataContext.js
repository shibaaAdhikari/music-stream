import React, { createContext, useContext, useState } from "react";

// Create a context
const AlbumDataContext = createContext();

export const useAlbumData = () => {
  return useContext(AlbumDataContext);
};

export const AlbumAdminDataProvider = ({ children }) => {
  const [albumData, setAlbumData] = useState({
    title: "",
    artist: "",
    year: "",
    type: "",
    coverImage: null,
    songs: [],
  });

  return (
    <AlbumDataContext.Provider value={{ albumData, setAlbumData }}>
      {children}
    </AlbumDataContext.Provider>
  );
};

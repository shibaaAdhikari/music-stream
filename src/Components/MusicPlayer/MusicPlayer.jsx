// AlbumDataContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AlbumDataContext = createContext();

export function useAlbumData() {
  return useContext(AlbumDataContext);
}

export function AlbumDataProvider({ children }) {
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/albums/all`
        );
        setAlbum(response.data);
      } catch (error) {
        console.error("Error fetching album:", error);
      }
    };

    fetchAlbum();
  }, []);

  return (
    <AlbumDataContext.Provider value={album}>
      {children}
    </AlbumDataContext.Provider>
  );
}

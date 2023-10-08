// TrendingSongsContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const TrendingSongsContext = createContext();

export function useTrendingSongsData() {
  return useContext(TrendingSongsContext);
}

export function TrendingSongsProvider({ children }) {
  const [trendingSongs, setTrendingSongs] = useState(null);

  useEffect(() => {
    const fetchTrendingSongs = async () => {
      try {
        const response = await axios.get(
          'http://127.0.0.1:3000/api/playcounts/trending-songs'
        );
        setTrendingSongs(response.data);
      } catch (error) {
        console.error('Error fetching trending songs:', error);
      }
    };

    fetchTrendingSongs();
  }, []);

  return (
    <TrendingSongsContext.Provider value={trendingSongs}>
      {children}
    </TrendingSongsContext.Provider>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";

const Album = ({ albumId }) => {
  const [album, setAlbum] = useState(null);
  console.log(albumId);

  useEffect(() => {
    // Fetch album data by its ID when the component mounts or when albumId changes
    const fetchAlbum = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/albums/${albumId}`
        );
        setAlbum(response.data);
      } catch (error) {
        console.error("Error fetching album:", error);
      }
    };

    fetchAlbum();
  }, [albumId]);

  if (!album) {
    return <div>Loading...</div>;
  }

  // Extract image and audio filenames from the URLs  
  const imageFileName = album.image.split("/").pop();
  const audioFileName = album.audio.split("/").pop();

  return (
    <div>
      <h2>{album.title}</h2>
      <p>Artist: {album.artist}</p>
      <p>Year: {album.year}</p>
      <h3>Songs:</h3>
      <ul>
        {album.songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <img
        src={`http://localhost:3000/songs/image/${imageFileName}`}
        alt="Album Cover"
      />
      <audio controls>
        <source
          src={`http://localhost:3000/songs/audio/${audioFileName}`}
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      console.log(success)
    </div>
  );
};

export default Album;

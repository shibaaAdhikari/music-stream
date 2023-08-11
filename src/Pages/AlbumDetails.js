import React, { useEffect, useState } from "react";
import axios from "axios";

const Album = ({ albumId }) => {
  const [album, setAlbum] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false); // Track whether audio is playing

  useEffect(() => {
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

  const handlePlayPause = () => {
    const audioElement = document.getElementById("audioPlayer");

    if (!isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }

    setIsPlaying(!isPlaying);
  };

  if (!album) {
    return <div style={{ color: "white" }}>Loading...</div>;
  }

  const imageFileName = album.coverImage.split("/").pop();

  return (
    <div style={{ color: "white" }}>
      <h2>{album.title}</h2>
      <p>Artist: {album.artist}</p>
      <p>Year: {album.year}</p>
      <h3>Songs:</h3>

      <img
        src={`http://localhost:3000/songs/image/${imageFileName}`}
        alt={imageFileName}
        onError={(e) => {
          console.error("Error loading image:", e);
        }}
      />
      <audio
        id="audioPlayer"
        src={`http://localhost:3000/songs/audio/${
          album &&
          album.songs &&
          album.songs[0] &&
          album.songs[0].filePath.split("/").pop()
        }`}
      ></audio>
      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Album;

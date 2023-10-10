import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { Table, Button } from "reactstrap";

const LikedSongs = () => {
  const [likedSongs, setLikedSongs] = useState([]);

  // Function to fetch liked songs from the server
  const fetchLikedSongs = async () => {
    const username = localStorage.getItem("username"); // Assuming the username is stored in localStorage
  
    try {
      const response = await fetch("http://127.0.0.1:3000/api/favourites/displayfavourites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });
  
      if (response.ok) {
        const data = await response.json();
        setLikedSongs(data.data);
      } else {
        console.error("Failed to fetch liked songs.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  // Function to remove a liked song
  const removeLikedSong = async (songId) => {
    const username = localStorage.getItem("username");
  
    try {
      // Send a request to remove the song from the server
      const response = await fetch("http://127.0.0.1:3000/api/favourites/removefromfavourites", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, songId }),
      });
  
      if (response.ok) {
        // Remove the song from the likedSongs state
        const updatedLikedSongs = likedSongs.filter((song) => song.songId !== songId);
        setLikedSongs(updatedLikedSongs);
  
        // Remove the song from localStorage
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
        delete storedFavorites[songId];
        localStorage.setItem("favorites", JSON.stringify(storedFavorites));
  
        alert("Song removed from favorites successfully");
      } else {
        console.error("Failed to remove song from favorites.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  
  

  useEffect(() => {
    // Fetch liked songs when the component mounts
    fetchLikedSongs();
  }, []);

  return (
    <div className="liked-songs-container">
      <h2 style={{ color: "white", marginTop: "30px", marginBottom: "20px", marginLeft: "20px" }}>Liked Songs</h2>
      {likedSongs.length > 0 ? (
        <Table className="liked-songs-table" style={{ width: "80%", textAlign: "center", margin: "0 auto" }}>
          <thead>
            <tr>
              <th style={{ color: "white" }}>#</th>
              <th style={{ color: "white" }}>Song Name</th>
              <th style={{ color: "white" }}>Artist Name</th>
              <th style={{ color: "white" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {likedSongs.map((song, index) => (
              <tr key={song.songId}>
                <td style={{ color: "white" }}>{index + 1}</td>
                <td style={{ color: "white" }}>{song.songTitle}</td>
                <td style={{ color: "white" }}>{song.title}</td>
                <td>
                  <Button
                    color="link"
                    onClick={() => removeLikedSong(song.songId)} // Call removeLikedSong when clicked
                    className="heart-button"
                    style={{ color: "red" }}
                  >
                    <FaHeart />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p style={{ color: "white" }}>No liked songs yet.</p>
      )}
    </div>
  );
};

export default LikedSongs;

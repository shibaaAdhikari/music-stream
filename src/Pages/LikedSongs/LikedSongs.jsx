import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Table, Button } from "reactstrap";

const LikedSongs = () => {
  const [likedSongs, setLikedSongs] = useState([]);

  // Function to fetch liked songs from the server
  const fetchLikedSongs = async () => {
    const username = localStorage.getItem("username"); // Assuming the username is stored in localStorage
  
    try {
      const response = await fetch("http://127.0.0.1:3000/api/favourites/displayfavourites", {
        method: "POST", // Change the method to POST
        headers: {
          "Content-Type": "application/json", // Set the content type
        },
        body: JSON.stringify({ username }), // Send the username in the request body
      });
  
      if (response.ok) {
        const data = await response.json();
        setLikedSongs(data.data); // Update state with liked songs data
      } else {
        console.error("Failed to fetch liked songs.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  

  // Function to remove a song from liked songs
  // const removeLikedSong = async (songId) => {
  //   try {
  //     const response = await fetch(`http://localhost:3000/api/favourites/remove/${songId}`, {
  //       method: "DELETE",
  //       headers: {
  //         // Add your headers here if needed (e.g., authorization token)
  //       },
  //     });

  //     if (response.ok) {
  //       // Remove the song from the state
  //       setLikedSongs((prevLikedSongs) => prevLikedSongs.filter((song) => song.songId !== songId));
  //     } else {
  //       console.error("Failed to remove the song from liked songs.");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred:", error);
  //   }
  // };

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
            {likedSongs.map((song, index) => {
              // Add your rendering logic here based on the likedSongs data
              return (
                <tr key={song.songId}>
                  <td style={{ color: "white" }}>{index + 1}</td>
                  <td style={{ color: "white" }}>{song.songTitle}</td>
                  <td style={{ color: "white" }}>{song.title}</td>
                  <td>
                    <Button
                      color="link"
                      // onClick={() => removeLikedSong(song.songId)}
                      className="heart-button"
                      style={{ color: "red" }}
                    >
                      <FaHeart />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <p style={{ color: "white" }}>No liked songs yet.</p>
      )}
    </div>
  );
};

export default LikedSongs;

import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Table, Button } from "reactstrap";

const LikedSongs = () => {
  const [likedSongs, setLikedSongs] = useState(JSON.parse(localStorage.getItem("likedSongs")) || []);

  const handleUnlike = (song) => {
    setLikedSongs(likedSongs.filter((likedSong) => likedSong.id !== song.id));
  };

  useEffect(() => {
    localStorage.setItem("likedSongs", JSON.stringify(likedSongs));
  }, [likedSongs]);

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
              const imageFileName = song.coverImage.split("/").pop();
              const imageUrl = `http://localhost:3000/songs/image/${imageFileName}`;

              return (
                <tr key={song.id}>
                  <td style={{ color: "white" }}>{index + 1}</td>
                  <td style={{ color: "white", verticalAlign: "middle" }}>
                    <img src={imageUrl} alt={song.title} style={{ width: "80px", height: "80px" }} />
                    <span style={{ marginLeft: "10px" }}>{song.title}</span>
                  </td>
                  <td style={{ color: "white" }}>{song.artistId}</td>
                  <td>
                    <Button
                      color="link"
                      onClick={() => handleUnlike(song)}
                      className="heart-button"
                      style={{ color: "red" }} // Set the color to red
                    >
                      {song.isLiked ? <FaRegHeart /> : <FaHeart />}
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

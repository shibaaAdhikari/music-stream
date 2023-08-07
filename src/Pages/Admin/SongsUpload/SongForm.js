import React, { useState } from "react";
import axios from "axios";

const SongForm = ({ albumId }) => {
  const [title, setTitle] = useState("");
  const [featuredArtist, setFeaturedArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [songFile, setSongFile] = useState(null);

  const handleFileChange = (event) => {
    setSongFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("featuredArtist", featuredArtist);
    formData.append("genre", genre);
    formData.append("album", albumId);
    formData.append("songFile", songFile);

    try {
      const response = await axios.post("/api/songs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Song created:", response.data);
      // Handle success, show a success message, etc.
    } catch (error) {
      console.error("Error creating song:", error.response.data);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Featured Artist:</label>
        <input
          type="text"
          value={featuredArtist}
          onChange={(e) => setFeaturedArtist(e.target.value)}
        />
      </div>
      <div>
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div>
        <label>Song File:</label>
        <input type="file" onChange={handleFileChange} />
      </div>
      <button type="submit">Add Song</button>
    </form>
  );
};

export default SongForm;

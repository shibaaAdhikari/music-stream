import React, { useState } from "react";
import axios from "axios";

const AudioUpload = () => {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    type: "",
    songFiles: null,
    coverImage: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = new FormData();
    postData.append("title", formData.title);
    postData.append("artist", formData.artist);
    postData.append("type", formData.type);
    postData.append("songFiles", formData.songFiles);
    postData.append("coverImage", formData.coverImage);

    try {
      const response = await axios.post("/create", postData);
      console.log(response.data.message); // Log the response message
      // You can display a success message or redirect to another page here
    } catch (error) {
      console.error("Error:", error.message);
      // Handle error response here
    }
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>Create New Album</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <br />

        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          name="artist"
          id="artist"
          value={formData.artist}
          onChange={handleInputChange}
          required
        />
        <br />

        <label htmlFor="type">Type:</label>
        <input
          type="text"
          name="type"
          id="type"
          value={formData.type}
          onChange={handleInputChange}
          required
        />
        <br />

        <label htmlFor="songFiles">Select audio files (up to 10):</label>
        <input
          type="file"
          name="songFiles"
          id="songFiles"
          accept=".mp3,.wav,.flac"
          onChange={handleFileChange}
          multiple
          required
        />
        <br />

        <label htmlFor="coverImage">Select cover image (max size 2MB):</label>
        <input
          type="file"
          name="coverImage"
          id="coverImage"
          accept="image/jpeg,image/png,image/webp"
          onChange={handleFileChange}
          required
        />
        <br />

        <button type="submit">Create Album</button>
      </form>
    </div>
  );
};

export default AudioUpload;

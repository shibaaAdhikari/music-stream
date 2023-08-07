import React, { useState } from "react";
import axios from "axios";

const AlbumForm = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [coverImage, setCoverImage] = useState(null);

  const handleFileChange = (event) => {
    setCoverImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("year", year);
    formData.append("coverImage", coverImage);

    try {
      const response = await axios.post("http://127.0.0.1:3000/api/albums/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Album created:", response.data);
      // Handle success, show a success message, etc.
    } catch (error) {
      console.error("Error creating album:", error.response.data);
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
        <label>Year:</label>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div>
        <label>Cover Image:</label>
        <input type="file" onChange={handleFileChange} />
      </div>
      <button type="submit">Create Album</button>
    </form>
  );
};

export default AlbumForm;

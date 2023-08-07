import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [inputData, setInputData] = useState({
    song_id: "",
    artist: "",
    album: "",
    genre: "",
    song_name: "",
    duration: "",
    release_date: "",
  });

  // Starting for image Upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreviewURL(imageURL);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    axios
      .post("http://127.0.0.1:3000/upload", formData)
      .then((response) => {
        console.log(response.data);
        setSelectedFile(null);
        setPreviewURL("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  // Ending for image upload

  // Starting for Audio
  const handleAudioChange = (event) => {
    setSelectedAudio(event.target.files[0]);
  };

  const handleAudioSubmit = (event) => {
    event.preventDefault();
    if (!selectedAudio) {
      return;
    }
    const Data = new FormData();
    Data.append("file", selectedAudio);

    axios
      .post("http://127.0.0.1:3000/upload/audio", Data)
      .then((response) => {
        console.log(response.data);
        setSelectedAudio(null);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  // Ending for Audio

  // Starting for inputField
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setInputData((prevInputData) => ({
  //     ...prevInputData,
  //     [name]: value,
  //   }));
  // };
  const handleInputFieldSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/Songs/song",
        inputData
      );
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // Ending for inputField

  return (
    <div className="mt-5 mx-5 d-flex justify-content-evenly">
      <div
        style={{ width: "400px", height: "400px" }}
        className="shadow-lg p-3 mb-5 bg-body-tertiary rounded  border border-success-subtle pt-5"
      >
        <h5 className="text-light">Image Upload Demo</h5>
        {previewURL && (
          <img
            src={previewURL}
            alt="Preview"
            style={{ width: "200px", height: "200px", borderRadius: "10%" }}
            className="p-3 text-center"
          />
        )}
        <form onSubmit={handleFormSubmit}>
          <input
            type="file"
            accept="image/jpeg, image/png, image/webp"
            onChange={handleFileChange}
          />

          <button type="submit">Upload</button>
        </form>
        <hr />
      </div>
      <div className="container py-5 text-white">
        <h1 className="mb-4">Audio Upload Demo</h1>
        <form onSubmit={handleAudioSubmit}>
          <input
            type="file"
            className="form-control mb-3"
            accept="audio/mpeg, audio/wav"
            onChange={handleAudioChange}
          />

          <button type="submit" className="btn btn-primary">
            Upload Audio
          </button>
        </form>
        <hr />
        <h2>Input Fields</h2>
        <form onSubmit={handleInputFieldSubmit}>
          <label htmlFor="song_id" className="form-label">
            Song ID:
          </label>
          <input
            type="text"
            id="song_id"
            name="song_id"
            className="form-control mb-3"
            value={inputData.song_id}
            onChange={(e) =>
              setInputData({ ...inputData, song_id: e.target.value })
            }
            required
          />

          <label htmlFor="artist" className="form-label">
            Artist:
          </label>
          <input
            type="text"
            id="artist"
            name="artist"
            className="form-control mb-3"
            value={inputData.artist}
            onChange={(e) =>
              setInputData({ ...inputData, artist: e.target.value })
            }
            required
          />

          <label htmlFor="album" className="form-label">
            Album:
          </label>
          <input
            type="text"
            id="album"
            name="album"
            className="form-control mb-3"
            value={inputData.album}
            onChange={(e) =>
              setInputData({ ...inputData, album: e.target.value })
            }
            required
          />

          <label htmlFor="genre" className="form-label">
            Genre:
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            className="form-control mb-3"
            value={inputData.genre}
            onChange={(e) =>
              setInputData({ ...inputData, genre: e.target.value })
            }
            required
          />

          <label htmlFor="song_name" className="form-label">
            Song Name:
          </label>
          <input
            type="text"
            id="song_name"
            name="song_name"
            className="form-control mb-3"
            value={inputData.song_name}
            onChange={(e) =>
              setInputData({ ...inputData, song_name: e.target.value })
            }
            required
          />

          <label htmlFor="duration" className="form-label">
            Duration:
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            className="form-control mb-3"
            value={inputData.duration}
            onChange={(e) =>
              setInputData({ ...inputData, duration: e.target.value })
            }
            required
          />

          <label htmlFor="release_date" className="form-label">
            Release Date:
          </label>
          <input
            type="date"
            id="release_date"
            name="release_date"
            className="form-control mb-3"
            value={inputData.release_date}
            onChange={(e) =>
              setInputData({ ...inputData, release_date: e.target.value })
            }
            required
          />
          <button type="submit" className="btn btn-primary">
            Upload Input Fields
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImageUpload;

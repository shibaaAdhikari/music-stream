import React, { useState } from "react";
import { Table, Form, FormGroup, Input, Button } from "reactstrap";
import axios from "axios";
import "./SongsUpload.css"; // Import custom CSS file

const SongsUpload = () => {
  const [songData, setSongData] = useState({
    artist_id: "",
    album_id: "",
    genre_id: "",
    song_name: "",
    duration: "",
    release_date: "",
    audio_file: null,
    image_file: null,
  });

  const [songs, setSongs] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSongData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setSongData((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create FormData object to send the song data as multipart/form-data
      const formData = new FormData();
      formData.append("artist_id", songData.artist_id);
      formData.append("album_id", songData.album_id);
      formData.append("genre_id", songData.genre_id);
      formData.append("song_name", songData.song_name);
      formData.append("duration", songData.duration);
      formData.append("release_date", songData.release_date);
      formData.append("audio_file", songData.audio_file);
      formData.append("image_file", songData.image_file);

      // Make the POST request using Axios
      // const response = await axios.post(
      //   "http://127.0.0.1:3000/Song/song",
      //   formData
      // );

      // Handle the response
      // console.log(response.data); // You can do something with the response if needed

      // Add the uploaded song to the songs array
      setSongs((prevSongs) => [...prevSongs, songData]);

      // Reset the form
      setSongData({
        artist_id: "",
        album_id: "",
        genre_id: "",
        song_name: "",
        duration: "",
        release_date: "",
        audio_file: null,
        image_file: null,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (index) => {
    setSongs((prevSongs) => prevSongs.filter((_, i) => i !== index));
  };

  return (
    <div className="songs-upload-container d-flex justify-content-around">
      <div className="upload-song-container shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <h2 className="upload-heading">Upload Song</h2>
        <Form onSubmit={handleSubmit} className="upload-form">
          <FormGroup>
            <Input
              type="text"
              name="artist_id"
              value={songData.artist_id}
              onChange={handleChange}
              required
              placeholder="Artist ID"
              className="black-text"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="album_id"
              value={songData.album_id}
              onChange={handleChange}
              placeholder="Album ID"
              className="black-text"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="genre_id"
              value={songData.genre_id}
              onChange={handleChange}
              placeholder="Genre ID"
              className="black-text"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="song_name"
              value={songData.song_name}
              onChange={handleChange}
              required
              placeholder="Song Name"
              className="black-text"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="number"
              name="duration"
              value={songData.duration}
              onChange={handleChange}
              required
              placeholder="Duration"
              className="black-text"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="date"
              name="release_date"
              value={songData.release_date}
              onChange={handleChange}
              required
              placeholder="Release Date"
              className="black-text"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="file"
              name="audio_file"
              onChange={handleFileChange}
              required
              className="black-text"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="file"
              name="image_file"
              onChange={handleFileChange}
              required
              className="black-text"
            />
          </FormGroup>
          <Button type="submit" color="primary" className="upload-button">
            Upload
          </Button>
        </Form>
      </div>
      <div className="songs-table-container shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <Table striped className="songs-table">
          <thead>
            <tr>
              <th>Artist ID</th>
              <th>Album ID</th>
              <th>Genre</th>
              <th>Song Name</th>
              <th>Duration</th>
              <th>Release Date</th>
              <th>Song Audio</th>
              <th>Song Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr key={index}>
                <td>{song.artist_id}</td>
                <td>{song.album_id}</td>
                <td>{song.genre_id}</td>
                <td>{song.song_name}</td>
                <td>{song.duration}</td>
                <td>{song.release_date}</td>
                <td>
                  {song.audio_file ? (
                    <audio controls>
                      <source
                        src={URL.createObjectURL(song.audio_file)}
                        type="audio/mpeg"
                      />
                    </audio>
                  ) : (
                    ""
                  )}
                </td>
                <td>
                  {song.image_file ? (
                    <img
                      src={URL.createObjectURL(song.image_file)}
                      alt={song.image_file.name}
                      style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "5px",
                      }}
                    />
                  ) : (
                    ""
                  )}
                </td>
                <td>
                  <Button color="warning">Update</Button>{" "}
                  <Button color="danger" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default SongsUpload;

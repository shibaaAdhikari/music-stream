import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
// import "./CreateAlbumPage.css"; // Import your custom styles

const CreateAlbumPage = () => {
  const [albumData, setAlbumData] = useState({
    title: "",
    artist: "",
    year: "",
    type: "",
    coverImage: null,
    songs: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAlbumData({ ...albumData, [name]: value });
  };

  const handleCoverImageChange = (event) => {
    setAlbumData({ ...albumData, coverImage: event.target.files[0] });
  };

  const handleSongChange = (index, key, value) => {
    const updatedSongs = [...albumData.songs];
    updatedSongs[index][key] = value;
    setAlbumData({ ...albumData, songs: updatedSongs });
  };

  const handleSongFileChange = (event, index) => {
    const updatedSongs = [...albumData.songs];
    updatedSongs[index].songFile = event.target.files[0];
    setAlbumData({ ...albumData, songs: updatedSongs });
  };

  const handleAddSong = () => {
    const newSong = {
      title: "",
      featuredArtist: "",
      genre: "",
      songFile: null,
    };

    setAlbumData({
      ...albumData,
      songs: [...albumData.songs, newSong],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("albumData", JSON.stringify(albumData));
      formData.append("coverImage", albumData.coverImage);

      for (let i = 0; i < albumData.songs.length; i++) {
        formData.append("songFiles", albumData.songs[i].songFile);
      }

      const response = await axios.post(
        "http://127.0.0.1:3000/api/albums/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Album created successfully:", response.data);
    } catch (error) {
      console.error("Error creating album:", error);
    }
  };

  return (
    <Container className="create-album-container">
      <h1 className="text-white text-center mb-4">Create Album</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md="6">
            <FormGroup>
              <Label className="text-white">Title:</Label>
              <Input
                type="text"
                name="title"
                value={albumData.title}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="text-white">Artist:</Label>
              <Input
                type="text"
                name="artist"
                value={albumData.artist}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <FormGroup>
              <Label className="text-white">Year:</Label>
              <Input
                type="text"
                name="year"
                value={albumData.year}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="text-white">Type:</Label>
              <Input
                type="text"
                name="type"
                value={albumData.type}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormGroup>
              <Label className="text-white">Cover Image:</Label>
              <Input type="file" onChange={handleCoverImageChange} />
            </FormGroup>
          </Col>
        </Row>

        <h2 className="text-white mt-4">Songs</h2>
        {albumData.songs.map((song, index) => (
          <div key={index} className="song-entry">
            <FormGroup>
              <Input
                type="text"
                name="title"
                value={song.title}
                onChange={(e) =>
                  handleSongChange(index, "title", e.target.value)
                }
                placeholder="Song Title"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="featuredArtist"
                value={song.featuredArtist}
                onChange={(e) =>
                  handleSongChange(index, "featuredArtist", e.target.value)
                }
                placeholder="Featured Artist"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="genre"
                value={song.genre}
                onChange={(e) =>
                  handleSongChange(index, "genre", e.target.value)
                }
                placeholder="Genre"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="file"
                name="songFile"
                id={`songFile_${index}`}
                onChange={(e) => handleSongFileChange(e, index)}
              />
            </FormGroup>
          </div>
        ))}

        <Button
          type="button"
          onClick={handleAddSong}
          color="secondary"
          className="mb-4"
        >
          Add Song
        </Button>

        <Button type="submit" color="primary" size="lg">
          Create Album
        </Button>
      </Form>
    </Container>
  );
};

export default CreateAlbumPage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";

const FeatureContainer = () => {
  // Access the genre parameter from the URL
  const { genre } = useParams();
  console.log(genre)

  // State to store the fetched songs
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Define the API endpoint to fetch songs by genre
    const apiUrl = `http://127.0.0.1:3000/api/albums/genre/${genre}`;


    // Fetch songs from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Debugging: Log the data received from the API
        console.log("Fetched songs:", data);

        if (Array.isArray(data)) {
          // If data is an array, set it as the songs state
          setSongs(data);
        } else if (typeof data === "object") {
          // If data is a single song object, wrap it in an array
          setSongs([data]);
        } else {
          // Handle unexpected data format here
          console.error("Unexpected data format:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching songs:", error);
      });
  }, [genre]);

  // Debugging: Log the value of the songs variable before mapping
  console.log("Songs:", songs);

  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h2>Songs of Genre: {genre}</h2>
      <Table style={{ width: "80%", color: "white", margin: "0 auto" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song.id}>
              <td>{song.songTitle}</td>
              <td>{song.artist}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FeatureContainer;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";

const FeatureContainer = () => {
  // Access the genre parameter from the URL
  const { genre } = useParams();

  // State to store the fetched songs
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null); // State to track the currently playing song

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

  // Function to handle play button click
  const handlePlayClick = (song) => {
    setCurrentSong(song); // Set the current song to the one clicked
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = `http://localhost:3000/songs/audio/${song.filePath.split("/").pop()}`;
    audioPlayer.play(); // Play the audio
  };

  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h2>Songs of Genre: {genre}</h2>
      {songs.length === 0 ? (
        <p>No features songs available.</p>
      ) : (
        <div> {/* Wrap the table and related JSX in a div */}
          <Table style={{ width: "80%", color: "white", margin: "0 auto" }}>
            <thead>
              <tr>
                <th>Song Name</th>
                <th>Artist Name</th>
                <th>Play</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song) => (
                <tr key={song.songId}>
                  <td>{song.songTitle}</td>
                  <td>{song.artistId}</td>
                  <td>
                    <button onClick={() => handlePlayClick(song)}>Play</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
      {currentSong && <div>Now Playing: {currentSong.songTitle}</div>}
      <audio
        id="audioPlayer"
        src=""
        controls
      ></audio>
    </div>
  );
};

export default FeatureContainer;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTrendingSongsData } from "../TrendingContext/TrendingSongsContext";
import { FaPlay, FaPause } from "react-icons/fa";
import ProgressBar from "./ProgressBar"; // Import the ProgressBar component

import { Table, Container, Row, Col, Button } from "reactstrap";

const TrendingTable = ({ trendingNumber }) => {
  const trendingSongs = useTrendingSongsData();
  const [currentSong, setCurrentSong] = useState(null);
  const [audioPlayer, setAudioPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false); // State to track playback state
  const [currentTime, setCurrentTime] = useState(0); // Current playback time
  const [duration, setDuration] = useState(0); // Song duration

  useEffect(() => {
    if (audioPlayer) {
      audioPlayer.addEventListener("timeupdate", () => {
        setCurrentTime(audioPlayer.currentTime);
        setDuration(audioPlayer.duration);
      });

      audioPlayer.addEventListener("ended", () => {
        setIsPlaying(false); // Playback finished, set to pause state
      });
    }
  }, [audioPlayer]);

  // Function to toggle play/pause for a song
  const togglePlayPause = (song) => {
    if (currentSong === song && audioPlayer) {
      // If the same song is clicked again, toggle play/pause
      if (isPlaying) {
        audioPlayer.pause();
      } else {
        audioPlayer.play();
      }
      setIsPlaying(!isPlaying); // Toggle the playback state
    } else {
      // If a different song is clicked, stop the current one and play the new one
      if (audioPlayer) {
        audioPlayer.pause();
      }
      const newAudioPlayer = new Audio(`http://localhost:3000/songs/audio/${song.filePath.split("/").pop()}`);
      newAudioPlayer.play();
      setAudioPlayer(newAudioPlayer);
      setCurrentSong(song);
      setIsPlaying(true); // Set the playback state to playing
    }
  };

  if (!trendingSongs) {
    return <div style={{ color: "white" }}>Loading...</div>;
  }

  return (
    <Container>
      <h4 className="text-white fw-bold" style={{ marginTop: "10px", marginLeft: "20px" }}>
        Trending Songs
      </h4>
      <Table striped hover style={{ color: "white" }}>
        <thead>
          <tr>
            <th>#</th> {/* ID Column */}
            <th>Song Title</th>
            <th>Artist</th>
            <th>Play/Pause</th> {/* Updated header */}
          </tr>
        </thead>
        <tbody>
          {trendingSongs.map((song, index) => (
            <tr key={song.songId} style={{ cursor: "pointer" }}>
              <td>{index + 1}</td> {/* Display the index as the ID */}
              <td>
                <Link to={`/Song/${song.songId}`} className="text-decoration-none" style={{ color: "white" }}>
                  {song.songTitle}
                </Link>
              </td>
              <td>{song.artistId}</td>
              <td>
                <Button color="primary" onClick={() => togglePlayPause(song)}>
                  {currentSong === song && isPlaying ? (
                    // If the same song is playing, show a pause icon
                    <FaPause /> 
                  ) : (
                    // Otherwise, show a play icon
                    <FaPlay /> 
                  )}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {currentSong && (
        <Row className="mt-3">
          <Col>
            <div style={{ color: "white" }}>Now Playing: {currentSong.songTitle}</div>
            {audioPlayer && <ProgressBar audioPlayer={audioPlayer} />} {/* Render ProgressBar */}
            <div style={{ color: "white" }}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

// Function to format time in minutes and seconds
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default TrendingTable;

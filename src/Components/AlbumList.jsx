import React, { useState, useEffect, useRef } from "react";
import SelectedMusic from "./SelectedMusic/SelectedMusic";
import { Table, Button } from "reactstrap";
import {
  FaStepBackward,
  FaPlay,
  FaStepForward,
  FaPause,
  FaRegHeart,
  FaHeart,
} from "react-icons/fa";
import { useLocation } from "react-router";
import axios from "axios";
import { useAlbumData } from "../Components/MusicPlayer/MusicPlayer";

const AlbumList = () => {
  const location = useLocation();
  const music = location.state;
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [playCounts, setPlayCounts] = useState({});
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || {}
  );
  const [isFavorited, setIsFavorited] = useState(false);
  const cdImageRef = useRef(null);
  const album = useAlbumData();

  const addSongToFavorites = async (songId, title, songTitle) => {
    const username = localStorage.getItem("username"); // Assuming the username is stored in localStorage

    try {
      const response = await axios.post(
        `http://localhost:3000/api/favourites/addtofavourites/${songId}`,
        { username, title, songTitle },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Song added to favorites!");
      } else {
        console.error("Failed to add song to favorites.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }

    setIsFavorited(true);

    const updatedFavorites = { ...favorites };
    updatedFavorites[songId] = music;
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const incrementPlayCountOnServer = async (songId) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:3000/api/playcounts/increment-play-count/${songId}`
      );

      if (response.status === 200) {
        console.log("Play count incremented!");
        // Update the playCounts state with the updated value from the server
        const updatedPlayCounts = { ...playCounts };
        updatedPlayCounts[songId] =
          (updatedPlayCounts[songId] || 0) + 1;
        setPlayCounts(updatedPlayCounts);
      } else {
        console.error("Failed to increment play count.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleToggleFavorite = () => {
    if (isFavorited) {
      return;
    }
    addSongToFavorites(music.id, music.title, music.artistId);
    setIsFavorited(true);
  };

  const handleMusicSelect = (music) => {
    setSelectedMusic(music);
  };

  const imageFileName = music.coverImage.split("/").pop();

  const handlePlayPause = () => {
    const audioElement = document.getElementById("audioPlayer");

    if (!isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }

    setIsPlaying(!isPlaying);

    audioElement.addEventListener("timeupdate", updateProgress);

    audioElement.addEventListener("ended", () => {
      handleSongEnd();
      incrementPlayCountOnServer(selectedMusic.id);
    });

    const cdImageElement = cdImageRef.current;
    if (cdImageElement) {
      cdImageElement.style.animation = isPlaying
        ? "rotate 15s infinite linear"
        : "none";
    }
  };

  const updateProgress = () => {
    const audioElement = document.getElementById("audioPlayer");
    const progressBar = document.getElementById("progressBar");

    const progress = audioElement.currentTime / audioElement.duration;
    progressBar.value = progress;

    const currentTime = Math.floor(audioElement.currentTime);
    const totalDuration = Math.floor(audioElement.duration);
    setCurrentTime(currentTime);
    setTotalDuration(totalDuration);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
  };

  const handleSongEnd = () => {
    const audioElement = document.getElementById("audioPlayer");

    audioElement.removeEventListener("timeupdate", updateProgress);
    audioElement.removeEventListener("ended", handleSongEnd);

    setIsPlaying(false);
    setCurrentTime(0);
    setTotalDuration(0);

    const cdImageElement = cdImageRef.current;
    if (cdImageElement) {
      cdImageElement.style.animation = "none";
    }

    if (selectedMusic) {
      incrementPlayCountOnServer(selectedMusic.id);
    }
  };

  // Load playCounts from localStorage when the component mounts
  useEffect(() => {
    const storedPlayCounts =
      JSON.parse(localStorage.getItem("playCounts")) || {};
    setPlayCounts(storedPlayCounts);
  }, []);

  // Save playCounts to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("playCounts", JSON.stringify(playCounts));
  }, [playCounts]);

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(170deg, #221f1e 0%, #beb09e69 46%, #5b3d34 100%)",
            paddingBottom: "20px",
            border: "1px solid",
            borderTop: "10px solid",
            backgroundClip: "padding-box",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          className="mx-5 mt-4 "
        >
          <div>
            <SelectedMusic music={music} isPlaying={isPlaying} />
          </div>
          <div></div>
        </div>

        <Table
          className="container-fluid  text-light  mt-5 mb-5 "
          style={{ width: "80%" }}
          borderless
        >
          <thead className="border-bottom">
            <tr>
              <th>Title </th>
              <th>Artist</th>
              <th>Genre</th>
              <th>Year</th>
              <th>Like</th>
              <th>Playcount</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => handleMusicSelect(music)}>
              <td className="gap-3">
                <img
                  src={`http://localhost:3000/songs/image/${imageFileName}`}
                  style={{ width: "50px", paddingRight: "15px" }}
                  alt="images"
                />
                {music.title}
              </td>
              <td>{music.artistId}</td>
              <td>{music.type}</td>
              <td>{music.year}</td>
              <td>
                <Button color="link" onClick={handleToggleFavorite}>
                  {favorites[music.id] ? (
                    <FaRegHeart color="red" />
                  ) : (
                    <FaHeart />
                  )}
                </Button>
              </td>
              <td>{playCounts[music.id] || 0}</td>
            </tr>
          </tbody>
        </Table>
        <div>
          {selectedMusic && (
            <div
              style={{
                position: "fixed",
                bottom: "1%",
                backgroundColor: "rgba(57, 55, 55, 0.8)",
                padding: "7px",
                color: "#fff",
                borderRadius: "40px",
                width: "80%",
              }}
            >
              <div className="text-center">
                <progress
                  id="progressBar"
                  value="0"
                  max="1"
                  style={{ width: "80%" }}
                />
                <p>
                  {formatTime(currentTime)} / {formatTime(totalDuration)}
                </p>
                <Button color="dark" className="mx-4">
                  <FaStepBackward />
                </Button>
                <Button color="success" onClick={handlePlayPause}>
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </Button>
                <Button color="dark" className="mx-4">
                  <FaStepForward />
                </Button>{" "}
              </div>
            </div>
          )}
        </div>
        <audio
          id="audioPlayer"
          src={`http://localhost:3000/songs/audio/${
            music &&
            music.songs &&
            music.songs[0] &&
            music.songs[0].filePath.split("/").pop()
          }`}
        ></audio>
      </div>
    </div>
  );
};

export default AlbumList;

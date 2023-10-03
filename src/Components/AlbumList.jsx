import React, { useState, useEffect, useRef } from "react";
import SelectedMusic from "./SelectedMusic/SelectedMusic";
import { Table, Button } from "reactstrap";
import {
  FaStepBackward,
  FaPlay,
  FaStepForward,
  FaPause,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { useLocation } from "react-router";

const AlbumList = () => {
  const location = useLocation();
  const music = location.state;
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [playCounts, setPlayCounts] = useState({});
  const [likedSongs, setLikedSongs] = useState(
    JSON.parse(localStorage.getItem("likedSongs")) || []
  );
  const cdImageRef = useRef(null);

  const handleMusicSelect = (music) => {
    setSelectedMusic(music);
  };

  // const handleLike = (songId) => {
  //   if (!likedSongs.includes(songId)) {
  //     const newLikedSongs = [...likedSongs, songId];
  //     setLikedSongs(newLikedSongs);
  //     localStorage.setItem("likedSongs", JSON.stringify(newLikedSongs));
  //   }
  // };
  const handleLike = async (songId) => {
    console.log(songId.id);
    try {
      const token = localStorage.getItem("token");

      if (!isLiked(songId)) {
        // Make a POST request to add the song to favorites
        const response = await fetch(
          "http://127.0.0.1:3000/api/favourites/addtofavourites",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Include the JWT token here
            },
            body: JSON.stringify({ songId: songId.id }), // Send only the id
          }
        );

        if (response.status === 200) {
          console.log(response);
          // Song added to favorites successfully
          const newLikedSongs = [...likedSongs, songId.id];
          setLikedSongs(newLikedSongs);
        } else {
          // Handle error response from the server
          console.error("Failed to add song to favorites");
        }
      } else {
        // Make a DELETE request to remove the song from favorites
        const response = await fetch(
          `http://127.0.0.1:3000/api/favourites/removefromfavourites/${songId.id}`,
          {
            // Use songId.id
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`, // Include the JWT token here
            },
          }
        );

        if (response.status === 200) {
          // Song removed from favorites successfully
          const newLikedSongs = likedSongs.filter((id) => id !== songId.id);
          setLikedSongs(newLikedSongs);
        } else {
          // Handle error response from the server
          console.error("Failed to remove song from favorites");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isLiked = (songId) => likedSongs.includes(songId);

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

    // Listen for the "ended" event to detect when the song finishes playing
    audioElement.addEventListener("ended", () => {
      handleSongEnd();
      incrementPlayCount(selectedMusic.id); // Increment play count when the song ends
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
  };

  useEffect(() => {
    localStorage.setItem("likedSongs", JSON.stringify(likedSongs));
  }, [likedSongs]);

  useEffect(() => {
    // Load play counts from localStorage
    const storedPlayCounts =
      JSON.parse(localStorage.getItem("playCounts")) || {};
    setPlayCounts(storedPlayCounts);
  }, []);

  useEffect(() => {
    // Save play counts to localStorage whenever it changes
    localStorage.setItem("playCounts", JSON.stringify(playCounts));
  }, [playCounts]);

  const incrementPlayCount = (songId) => {
    const newPlayCounts = { ...playCounts };
    newPlayCounts[songId] = (newPlayCounts[songId] || 0) + 1;
    setPlayCounts(newPlayCounts);
  };

  return (
    <div>
      <div>
        <div
          style={{
            // backgroundColor: "#33343b",
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
              {/* <th>#</th> */}
              <th>Title </th>
              <th>Artist</th>
              <th>Gerne</th>
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
                <Button color="link" onClick={() => handleLike(music)}>
                  {isLiked(music) ? (
                    <FaHeart style={{ color: "red" }} />
                  ) : (
                    <FaRegHeart />
                  )}
                </Button>
              </td>
              <td>
                {" "}
                {playCounts[music.id] || 0} {/* Display the play count */}
              </td>
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

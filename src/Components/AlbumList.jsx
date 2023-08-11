import React from "react";
import SelectedMusic from "./SelectedMusic/SelectedMusic";
import { Table } from "reactstrap";
import { BiTime } from "react-icons/bi";
// import Songs from "../Data/songs.json";
import { useLocation } from "react-router";
import { Button } from "reactstrap";
import { FaStepBackward, FaPlay, FaStepForward, FaPause } from "react-icons/fa";
import { useState } from "react";

const AlbumList = () => {
  const location = useLocation();
  const music = location.state;
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
  };

  return (
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
          <SelectedMusic music={music} />
        </div>
        <div></div>
      </div>

      <Table
        className="container-fluid  text-light  mt-5 mb-5 "
        style={{ width: "90%" }}
        borderless
      >
        <thead className="border-bottom">
          <tr>
            <th>#</th>
            <th>Title </th>
            <th>Type</th>
            <th>Year</th>
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
            <td>{music.type}</td>
            <td>{music.year}</td>
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
            <div className="text-center ">
              <Button color="dark" className="mx-4">
                <FaStepBackward />
              </Button>
              <Button color="success" onClick={handlePlayPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </Button>
              <Button color="dark" className="mx-4">
                <FaStepForward />
              </Button>
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
  );
};

export default AlbumList;

import React from "react";
import SelectedMusic from "./SelectedMusic/SelectedMusic";
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { Table } from "reactstrap";
import { BiTime } from "react-icons/bi";
import Songs from "../Data/songs.json";
import { useLocation } from "react-router";
import { Button } from "reactstrap";
import { FaStepBackward, FaPlay, FaStepForward } from "react-icons/fa";
import { useState } from "react";

const AlbumList = () => {
  const location = useLocation();
  const music = location.state;
  const [selectedMusic, setSelectedMusic] = useState(null);

  const handleMusicSelect = (music) => {
    setSelectedMusic(music);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#33343b",
          backgroundImage:
            "linear-gradient(185deg, #33343b 0%, #465156 46%, #729ba6 100%)",
          paddingBottom: "20px",
          border: "1px solid",
          borderTop: "10px solid",
          backgroundClip: "padding-box",
        }}
      >
        <div>
          <SelectedMusic music={music} />
        </div>
        <div>
          <div className="container-fluid  ">
            <AiFillPlayCircle
              style={{ fontSize: "60px", color: "green" }}
              className="playbutton"
            />
            <AiOutlineHeart
              style={{ fontSize: "40px", color: "gray", marginLeft: "15px" }}
              className="heart"
            />
            <BsThreeDots
              style={{ fontSize: "30px", color: "gray", marginLeft: "15px" }}
              className="heart"
            />
          </div>
        </div>
      </div>

      <Table
        className="container-fluid  text-light  mt-5 "
        style={{ width: "90%" }}
        borderless
      >
        <thead className="border-bottom">
          <tr>
            <th>#</th>
            <th>Title </th>
            <th>Album</th>
            <th>Date Added</th>
            <th>
              <BiTime />
            </th>
          </tr>
        </thead>
        <tbody>
          {Songs.songs.map((song, index) => (
            <tr
              key={index}
              className="mb-2  "
              onClick={() => handleMusicSelect(song)}
            >
              <th scope="row">{index + 1}</th>
              <td className="gap-3">
                <img
                  src={song.image}
                  style={{ width: "50px", paddingRight: "15px" }}
                  alt="images"
                />
                {song.title}
              </td>
              <td>{song.album}</td>
              <td>{song.date}</td>
              <td>{song.duration}</td>
            </tr>
          ))}
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
              <Button color="success">
                <FaPlay />
              </Button>
              <Button color="dark" className="mx-4">
                <FaStepForward />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlbumList;

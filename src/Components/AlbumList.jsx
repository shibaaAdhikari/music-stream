import React from "react";
import SelectedMusic from "./SelectedMusic/SelectedMusic";
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { Table } from "reactstrap";
import { BiTime } from "react-icons/bi";
import Songs from "../Data/songs.json";
import { useLocation } from "react-router";

const AlbumList = () => {
  const location = useLocation();
  const music = location.state;

  return (
    <div>
      <div>
        <div>
          <SelectedMusic music={music} />
        </div>
        <div>
          <div className="container-fluid  mt-4">
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
            <tr key={index} className="mb-2  ">
              <th scope="row">{index + 1}</th>
              <td className="gap-3">
                <img
                  src={song.image}
                  style={{ width: "50px", paddingRight: "15px" }}
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
    </div>
  );
};

export default AlbumList;

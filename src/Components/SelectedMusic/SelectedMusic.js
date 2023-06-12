import React from "react";

import { BsSpotify } from "react-icons/bs";
const SelectedMusic = ({ music }) => {
  const { color, backgroundImage } = music;
  return (
    <div
      className=" d-flex  gap-5 p-3 m-0   "
      style={{
        width: "100%",
        background: `${color} `,
        backgroundImage: `${backgroundImage}`,
      }}
    >
      <div>
        <img
          src={music.image}
          alt="img"
          style={{ width: "100%", height: "100%" }}
          className="text-light"
        />
      </div>
      <div>
        <p className="text-light mt-5">Playlist</p>
        <h1
          className="text-light fs-1 mt-5 mb-3"
          style={{ fontWeight: "bolder", fontSize: "50px" }}
        >
          {music.title}
          {/* musicTitle */}
        </h1>
        <h6 className="text-light mt-1">
          {music.subTitle}
          {/* musicArtist */}
        </h6>

        <div className="mt-5">
          <BsSpotify
            style={{ color: "green", fontSize: "24px", cursor: "pointer" }}
          />
          <span className="text-light mx-3">Spotify</span>
          <span className="text-light mx-1">.7,70,722 likes</span>
          <span className="text-light mx-1">.300 likes</span>
        </div>
      </div>
    </div>
  );
};

export default SelectedMusic;

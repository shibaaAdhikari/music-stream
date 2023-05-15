import React from "react";
import images from "../../Assests/coverSong.jpeg";
import { BsSpotify } from "react-icons/bs";
const SelectedMusic = ({ music }) => {
  console.log(music);
  // console.log("selectedd music items");
  // const { color } = music; // Destructure the color property from the music object
  // console.log(music);

  return (
    <div
      className=" d-flex gap-4  p-3 m-0 container-fluid"
      style={{
        width: "100%",
        background: " linear-gradient(315deg, #000000 0%, #958e69 74%)",
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
        <p className="text-light">Playlist</p>
        <h1 className="text-light fs-1  mb-5" style={{ fontWeight: "bolder" }}>
          {music.title}
          {/* musicTitle */}
        </h1>
        <h6 className="text-light mt-1">
          {/* {music.artist} */}
          {/* musicArtist */}
        </h6>
        <BsSpotify
          style={{ color: "green", fontSize: "24px", cursor: "pointer" }}
        />
        <span className="text-light mx-3">Spotify</span>
        <span className="text-light mx-1">.7,70,722 likes</span>
        <span className="text-light mx-1">.300 likes</span>
      </div>
    </div>
  );
};

export default SelectedMusic;

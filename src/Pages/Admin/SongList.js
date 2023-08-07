import React from "react";
import SongInput from "./SongInput";

const SongList = ({ songs, handleSongChange, handleSongFileChange }) => {
  return (
    <div>
      {songs.map((song, index) => (
        <SongInput
          key={index}
          song={song}
          index={index}
          handleSongChange={handleSongChange}
          handleSongFileChange={handleSongFileChange}
        />
      ))}
    </div>
  );
};

export default SongList;

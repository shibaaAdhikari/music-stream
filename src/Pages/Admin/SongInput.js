import React from "react";

const SongInput = ({ song, index, handleSongChange, handleSongFileChange }) => {
  return (
    <div>
      <input
        type="text"
        name="title"
        value={song.title}
        onChange={(e) => handleSongChange(index, "title", e.target.value)}
        placeholder="Song Title"
      />
      <input
        type="text"
        name="featuredArtist"
        value={song.featuredArtist}
        onChange={(e) =>
          handleSongChange(index, "featuredArtist", e.target.value)
        }
        placeholder="Featured Artist"
      />
      <input
        type="text"
        name="genre"
        value={song.genre}
        onChange={(e) => handleSongChange(index, "genre", e.target.value)}
        placeholder="Genre"
      />
      <input type="file" onChange={(e) => handleSongFileChange(e, index)} />
    </div>
  );
};

export default SongInput;

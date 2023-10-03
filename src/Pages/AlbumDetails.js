// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Album = ({ albumId }) => {
//   const [album, setAlbum] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false); // Track whether audio is playing

//   useEffect(() => {
//     const fetchAlbum = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3000/api/albums/${albumId}`
//         );
//         setAlbum(response.data);
//       } catch (error) {
//         console.error("Error fetching album:", error);
//       }
//     };

//     fetchAlbum();
//   }, [albumId]);

//   const handlePlayPause = () => {
//     const audioElement = document.getElementById("audioPlayer");

//     if (!isPlaying) {
//       audioElement.play();
//     } else {
//       audioElement.pause();
//     }

//     setIsPlaying(!isPlaying);
//   };

//   if (!album) {
//     return <div style={{ color: "white" }}>Loading...</div>;
//   }

//   const imageFileName = album.coverImage.split("/").pop();

//   return (
//     <div style={{ color: "white" }}>
//       <h2>{album.title}</h2>
//       <p>Artist: {album.artist}</p>
//       <p>Year: {album.year}</p>
//       <h3>Songs:</h3>

//       <img
//         src={`http://localhost:3000/songs/image/${imageFileName}`}
//         alt={imageFileName}
//         onError={(e) => {
//           console.error("Error loading image:", e);
//         }}
//       />
//       <audio
//         id="audioPlayer"
//         src={`http://localhost:3000/songs/audio/${
//           album &&
//           album.songs &&
//           album.songs[0] &&
//           album.songs[0].filePath.split("/").pop()
//         }`}
//       ></audio>
//       <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
//     </div>
//   );
// };

// export default Album;

import React, { useEffect, useState } from "react";

function Album() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const response = await fetch("http://127.0.0.1:3000/api/albums/albums"); // Update the URL if needed
        const data = await response.json();
        setAlbums(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    }

    fetchAlbums();
  }, []);

  return (
    <div className="App">
      <h1>Albums and Songs</h1>
      {albums.length === 0 ? (
        <p>Loading...</p>
      ) : (
        albums.map((album) => (
          <div key={album.id}>
            <h2>{album.title}</h2>
            <p>Artist: {album.artistId}</p>
            <p>Year: {album.year}</p>
            <ul>
              {album.songs.map((song) => (
                <li key={song.songId}>
                  {song.songTitle} - {song.filePath}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default Album;

// import React, { useState } from "react";
// import Cardss from "../Cardss";
// import { Link } from "react-router-dom";
// import { useTrendingSongsData } from "../TrendingContext/TrendingSongsContext";// Import the useTrendingSongsData hook

// const TrendingSongsCardContainer = ({ ...props }) => {
//   const trendingSongs = useTrendingSongsData(); // Use the hook to access trending songs data
//   const [showAllTrendingSongs, setShowAllTrendingSongs] = useState(false);

//   if (!trendingSongs) {
//     return <div style={{ color: "white" }}>Loading...</div>;
//   }

//   // Define the number of trending songs to display initially and when "Show All" is clicked
//   const trendingSongsToShow = showAllTrendingSongs ? trendingSongs.length : 7;

//   const handleShowAllTrendingSongs = () => {
//     setShowAllTrendingSongs(true);
//   };

//   const handleShowLessTrendingSongs = () => {
//     setShowAllTrendingSongs(false);
//   };

//   return (
//     <div className="cards-container mt-3 mb-4">
//       <div className="d-flex justify-content-between align-items-center mx-4 p-2">
//         <h4 className="text-white fw-bold">{props.containerTitle}</h4>
        
//         {!showAllTrendingSongs && trendingSongs.length > 7 && (
//           <p>
//             <button
//               className="text-white link fw-bold btn btn-link"
//               onClick={handleShowAllTrendingSongs}
//             >
//               Show all
//             </button>
//           </p>
//         )}
//         {showAllTrendingSongs && (
//           <p>
//             <button
//               className="text-white link fw-bold btn btn-link"
//               onClick={handleShowLessTrendingSongs}
//             >
//               Show less
//             </button>
//           </p>
//         )}
//       </div>
//       <div className="d-flex gap-3 md-4 sm-3 flex-wrap">
//         {trendingSongs.slice(0, trendingSongsToShow).map((song) => {
//           // Customize this part to display trending songs
//           const imageUrl = `http://localhost:3000/songs/image/${song.imageFileName}`;

//           return (
//             <Link
//               to={`/Song/${song.id}`}
//               state={song}
//               className="text-decoration-none"
//               key={song.id}
//             >
//               <Cardss
//                 title={song.songTitle}
//                 image={imageUrl}
//               />
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default TrendingSongsCardContainer;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTrendingSongsData } from "../TrendingContext/TrendingSongsContext";

const TrendingSongsTable = () => {
  const trendingSongs = useTrendingSongsData();
  const [currentSong, setCurrentSong] = useState(null); // State to track the currently playing song

  if (!trendingSongs) {
    return <div style={{ color: "white" }}>Loading...</div>;
  }

  // Function to handle play button click
  const handlePlayClick = (song) => {
    setCurrentSong(song); // Set the current song to the one clicked
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = `http://localhost:3000/songs/audio/${song.filePath.split("/").pop()}`;
    audioPlayer.play(); // Play the audio
  };

  return (
    <div>
      <h4 className="text-white fw-bold">Trending Songs</h4>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Song Title</th>
            <th>Artist</th>
            <th>Play</th>
          </tr>
        </thead>
        <tbody>
          {trendingSongs.map((song) => (
            <tr key={song.songId}>
              <td>
                <Link to={`/Song/${song.songId}`} className="text-decoration-none">
                  {song.songTitle}
                </Link>
              </td>
              <td>{song.artistId}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handlePlayClick(song)}
                >
                  Play
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Display the currently playing song, if any */}
      {currentSong && <div>Now Playing: {currentSong.songTitle}</div>}
      <audio
        id="audioPlayer"
        src=""
        controls // Add the controls attribute for playback control
      ></audio>
    </div>
  );
};

export default TrendingSongsTable;

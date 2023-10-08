import React, { useState } from "react";
import Cardss from "../Cardss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAlbumData } from '../MusicPlayer/MusicPlayer';

const CardContainer = ({ albumId, ...props }) => {
  const album = useAlbumData();
  const [showAllAlbums, setShowAllAlbums] = useState(false);

  if (!album) {
    return <div style={{ color: "white" }}>Loading...</div>;
  }

  // Define the number of albums to display initially and when "Show All" is clicked
  const albumsToShow = showAllAlbums ? album.length : 7;

  const handleShowAllAlbums = () => {
    setShowAllAlbums(true);
  };

  const handleShowLessAlbums = () => {
    setShowAllAlbums(false);
  };

  return (
    <div className="cards-container mt-3 mb-4">
      <div className="d-flex justify-content-between align-items-center mx-4 p-2">
        <h4 className="text-white fw-bold">{props.containerTitle}</h4>
        
        {!showAllAlbums && album.length > 7 && (
          <p>
            <button
              className="text-white link fw-bold btn btn-link"
              onClick={handleShowAllAlbums}
            >
              Show all
            </button>
          </p>
        )}
        {showAllAlbums && (
          <p>
            <button
              className="text-white link fw-bold btn btn-link"
              onClick={handleShowLessAlbums}
            >
              Show less
            </button>
          </p>
        )}
      </div>
      <div className="d-flex gap-3 md-4 sm-3 flex-wrap">
        {album.slice(0, albumsToShow).map((album) => {
          const imageFileName = album.coverImage.split("/").pop();
          const imageUrl = `http://localhost:3000/songs/image/${imageFileName}`;

          return (
            <Link
              to={`/Album/${album.id}`}
              state={album}
              className="text-decoration-none"
              key={album.id}
            >
              <Cardss
                title={album.title}
                image={imageUrl}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CardContainer;

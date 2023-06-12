import React, { useState } from "react";
import Cardss from "../Cardss";
import { Link } from "react-router-dom";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

const CardContainer = (props) => {
  const dummyMusics = props.musics || [];
  const playlistData = props.playlistData || [];

  const [showAllMusics, setShowAllMusics] = useState(false);
  const [showAllPlaylist, setShowAllPlaylist] = useState(false);

  const displayedMusics = showAllMusics ? dummyMusics : dummyMusics.slice(0, 7);
  const displayedPlaylist = showAllPlaylist
    ? playlistData
    : playlistData.slice(0, 7);

  const handleShowAllMusics = () => {
    setShowAllMusics(true);
  };

  const handleShowLessMusics = () => {
    setShowAllMusics(false);
  };

  const handleShowAllPlaylist = () => {
    setShowAllPlaylist(true);
  };

  const handleShowLessPlaylist = () => {
    setShowAllPlaylist(false);
  };

  return (
    <div className="cards-container mt-3 mb-4">
      <div className="d-flex justify-content-between align-items-center mx-4 p-2">
        <h4 className="text-white fw-bold">{props.containerTitle}</h4>

        {!showAllMusics && dummyMusics.length > 7 && (
          <p>
            <button
              className="text-white link fw-bold btn btn-link"
              onClick={handleShowAllMusics}
            >
              Show all <FaAngleDoubleDown />
            </button>
          </p>
        )}
        {showAllMusics && (
          <p>
            <button
              className="text-white link fw-bold btn btn-link"
              onClick={handleShowLessMusics}
            >
              Show less <FaAngleDoubleUp />
            </button>
          </p>
        )}

        {!showAllPlaylist && playlistData.length > 7 && (
          <p>
            <button
              className="text-white link fw-bold btn btn-link"
              onClick={handleShowAllPlaylist}
            >
              Show all <FaAngleDoubleDown />
            </button>
          </p>
        )}
        {showAllPlaylist && (
          <p>
            <button
              className="text-white link fw-bold btn btn-link"
              onClick={handleShowLessPlaylist}
            >
              Show less <FaAngleDoubleUp />
            </button>
          </p>
        )}
      </div>
      <div className="d-flex gap-3 md-4 sm-3 flex-wrap">
        {displayedMusics.map((music) => (
          <Link
            to={`/Album/${music.id}`}
            state={music}
            className="text-decoration-none"
            key={music.id}
          >
            <Cardss
              image={music.image}
              title={music.title}
              album={music.album}
              color={music.color}
            />
          </Link>
        ))}
        {displayedPlaylist.map((playlist) => (
          <Link
            to={`/Album/${playlist.id}`}
            state={playlist}
            className="text-decoration-none"
            key={playlist.id}
          >
            <Cardss
              key={playlist.id}
              image={playlist.image}
              title={playlist.title}
              subTitle={playlist.subTitle}
              backgroundColor={playlist.backgroundColor}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;

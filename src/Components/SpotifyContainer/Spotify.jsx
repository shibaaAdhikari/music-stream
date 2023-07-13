import React from "react";
import SongList from "../SpotifyPlayList/SpotifyList";
import Cardss from "../Cardss";

const Spotify = ({ props }) => {
  return (
    <div>
      <div className="cards-container mt-3 mb-4">
        <div className="d-flex justify-content-between align-items-center mx-4 p-2">
          <h4 className="text-white fw-bold">{props.containerTitle}</h4>
          <p></p>
        </div>
        <div className="d-flex gap-3 md-4 sm-3 flex-wrap ">
          {SongList.list.map((list) => (
            <Cardss
              key={list.id}
              image={list.title}
              title={list.subTitle}
              album={list.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spotify;

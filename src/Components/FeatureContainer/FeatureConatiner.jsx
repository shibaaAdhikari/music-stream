import React from "react";
import Cardss from "../Cardss";
import tracks from "../../Data/db.json";
const FeatureConatiner = () => {
  return (
    <div>
      <div className="cards-container mt-3 mb-4">
        <div className="d-flex justify-content-between align-items-center mx-4 p-2">
          <h4 className="text-white fw-bold">Features Title</h4>
        </div>
        <div className="d-flex gap-3 md-4 sm-3 flex-wrap">
          {tracks.tracks.map((track) => (
            <Cardss
              key={track.id}
              title={track.title}
              image={track.image}
              subtitle={track.subtitle}
            />
          ))}{" "}
          {tracks.tracks.map((track) => (
            <Cardss
              key={track.id}
              title={track.title}
              image={track.image}
              subtitle={track.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureConatiner;

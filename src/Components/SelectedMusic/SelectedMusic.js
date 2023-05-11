import React from "react";

const SelectedMusic = ({ image, title, descriptions }) => {
  return (
    <div className="container d-flex">
      <div>
        <img
          src={image}
          alt="img"
          style={{ width: "500px", height: "500px" }}
        />
      </div>
      <div>
        <h1>{title}</h1>
        <h6>{descriptions}</h6>
      </div>
    </div>
  );
};

export default SelectedMusic;

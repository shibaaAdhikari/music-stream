import React from "react";
import CardContainer from "../../Components/CardContainer/CardContainer";
import { PlayListSelector } from "../../Components/Recoil/selector";
import { useRecoilValue } from "recoil";

const Playlist = () => {
  const playlistData = useRecoilValue(PlayListSelector);
  return (
    <div
      className="container-fluid  justify-content-center"
      style={{ marginLeft: "3%" }}
    >
      <CardContainer containerTitle={"Playlist"} playlistData={playlistData} />
    </div>
  );
};

export default Playlist;

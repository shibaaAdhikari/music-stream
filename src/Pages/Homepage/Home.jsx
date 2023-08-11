import React from "react";
import CardContainer from "../../Components/CardContainer/CardContainer";
import { useRecoilValue } from "recoil";
// import { PlayListSelector } from "../../Components/Recoil/selector";
import { musics } from "../../Components/Recoil/selector";

const Home = () => {
  // const playlistData = useRecoilValue(PlayListSelector);
  const dummyMusics = useRecoilValue(musics);
  const albumId = "65c1c903-b7cf-495d-8442-4438b42d96c3";

  return (
    <div
      className="container-fluid  justify-content-center"
      style={{ marginLeft: "3%" }}
    >
      <CardContainer
        containerTitle={"Songs"}
        musics={dummyMusics}
        albumId={albumId}
      />
      {/* <CardContainer containerTitle={"Playlist"} playlistData={playlistData} /> */}
    </div>
  );
};

export default Home;

import React from "react";
import CardContainer from "../../Components/CardContainer/CardContainer";
import { useRecoilValue } from "recoil";
import { PlayListSelector } from "../../Components/Recoil/selector";
import { musics } from "../../Components/Recoil/selector";

const Home = () => {
  const playlistData = useRecoilValue(PlayListSelector);
  const dummyMusics = useRecoilValue(musics);
  return (
    <div className="container-fluid  justify-content-center">
      <CardContainer containerTitle={"Focus"} musics={dummyMusics} />
      <CardContainer
        containerTitle={"Spotify Playlist"}
        playlistData={playlistData}
      />
    </div>
  );
};

export default Home;

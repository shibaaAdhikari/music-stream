import React from "react";
import { Card, Col, Row } from "reactstrap";
import Cardss from "../../Components/Cardss";
import SearchBar from "../../Components/SearchBar";
import CardContainer from "../../Components/CardContainer/CardContainer";

const Home = () => {
  return (
    <div className="container-fluid   justify-content-center">
      <SearchBar />
      <CardContainer containerTitle={"Focus"} />
      <CardContainer containerTitle={"SpotifyPlaylist"} />
    </div>
  );
};

export default Home;

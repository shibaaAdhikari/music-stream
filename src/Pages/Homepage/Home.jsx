import React from "react";
import { Card, Col, Row } from "reactstrap";
import Cardss from "../../Components/Cardss";
import SearchBar from "../../Components/SearchBar";
import CardContainer from "../../Components/CardContainer/CardContainer";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="container-fluid   justify-content-center">
      {/* <SearchBar /> */}
      <CardContainer containerTitle={"Focus"} />
      <CardContainer containerTitle={"SpotifyPlaylist"} />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

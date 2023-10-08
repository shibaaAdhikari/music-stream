import React from "react";
import CardContainer from "../../Components/CardContainer/CardContainer";

const Home = () => {
  const albumId = "65c1c903-b7cf-495d-8442-4438b42d96c3";

  return (
    <div
      className="container-fluid  justify-content-center"
      style={{ marginLeft: "3%" }}
    >
      <CardContainer
        containerTitle={"Songs"}
        albumId={albumId}
      />
    </div>
  );
};

export default Home;

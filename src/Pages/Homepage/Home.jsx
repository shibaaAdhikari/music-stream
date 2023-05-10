import React from "react";
import { Col, Row } from "reactstrap";
import Cardss from "../../Components/Cardss";

const Home = () => {
  return (
    <div className="container-fluid">
      <Row className="justify-content-center">
        <p className="text-white">FOCUS</p>
        <Col md="5" sm="1" lg="2" className="mb-4">
          <Cardss />
        </Col>
        <Col md="5" sm="1" lg="2">
          <Cardss />
        </Col>
        <Col md="5" sm="1" lg="2">
          <Cardss />
        </Col>
        <Col md="5" sm="1" lg="2">
          <Cardss />
        </Col>
        <Col md="5" sm="1" lg="2" className="mb-4">
          <Cardss />
        </Col>
        <Col md="5" sm="1" lg="2">
          <Cardss />
        </Col>
        <Col md="5" sm="1" lg="2">
          <Cardss />
        </Col>
        <Col md="5" sm="1" lg="2">
          <Cardss />
        </Col>
        <Col md="5" sm="1" lg="2">
          <Cardss />
        </Col>
        <Col md="5" sm="1" lg="2">
          <Cardss />
        </Col>
        <Col md="5" sm="1" lg="2">
          <Cardss />
        </Col>
        <Col md="5" sm="1" lg="2">
          <Cardss />
        </Col>
      </Row>
    </div>
  );
};

export default Home;

import React from "react";
import Card from "react-bootstrap/Card";
import { CardBody, CardTitle, CardText } from "reactstrap";

const Cards = () => {
  return (
    <>
      <div>
        <Card
          style={{
            width: "5rem",
            // height: "10rem",
            backgroundColor: "rgb(24,24,24)",
            borderRadius: "7px",
          }}
          className="m-2"
        >
          <img
            alt="Sample"
            src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"
            style={{ width: "90%", margin: "10px", borderRadius: "7px" }}
          />
          <CardBody>
            <CardTitle tag="h5" style={{ color: "white" }}>
              Peaceful Piano
            </CardTitle>
            <CardText style={{ color: "rgb(167,167,167)" }}>
              Peaceful and indludge with beautiful piano pieces
            </CardText>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Cards;

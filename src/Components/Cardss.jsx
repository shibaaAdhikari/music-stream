import React from "react";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";

const Cardss = () => {
  return (
    <>
      <CardGroup style={{ width: "12rem" }} className="cardgroup">
        <Card
          style={{
            backgroundColor: "rgb(24,24,24)",
            borderRadius: "7px",
            height: "12rem",
          }}
          className="cards"
        >
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            style={{ width: "90%", margin: "10px", borderRadius: "7px" }}
            className="cardImg"
          />
          <CardBody className="cardbody">
            <CardTitle tag="h5" style={{ color: "white" }}>
              Card title
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
              style={{ color: "rgb(167,167,167)" }}
            >
              Card subtitle
            </CardSubtitle>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  );
};

export default Cardss;

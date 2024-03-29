import React from "react";
import { CardGroup, Card, CardImg, CardTitle, CardSubtitle } from "reactstrap";
import { FaSpotify } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { useState } from "react";
import "./Cardss.css";

const Cardss = ({ title, image, descriptions, album }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div
        className={`card-container ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardGroup
          style={{
            width: "12rem",
            cursor: "pointer",
          }}
        >
          <Card
            style={{
              borderRadius: "7px",
              height: "17rem",
              backgroundColor: "rgb(19,19,19)",
            }}
            className="card-song "
          >
            <CardImg
              alt="Card image cap"
              src={image}
              top
              style={{
                width: "80%",
                height: "15vh",
                margin: " 0 auto",
                marginTop: "10px",
                borderRadius: "7px",
                cursor: "pointer",
              }}
              className="cardImg custom-card-img bg-white"
            />

            <CardTitle
              tag="h5"
              style={{ color: "white", position: "absolute" }}
              className="cardgroup"
            >
              {descriptions}
              <div>{/* <FaSpotify /> */}</div>
              {isHovered && (
                <div className="playButtons ">
                  <FaPlayCircle
                    style={{
                      fontSize: "45px",
                      color: "#D94919",
                      position: "relative",
                      left: "135px",
                      bottom: "-70px",
                      backgroundColor: "white",
                    }}
                    className="rounded-circle"
                  />
                </div>
              )}
            </CardTitle>

            <CardSubtitle
              className=" text-muted cardgroup "
              tag="h6"
              style={{
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              <p style={{ color: "white" }} className="mt-1">
                {" "}
                {title}
              </p>
            </CardSubtitle>

            <CardSubtitle
              className="text-muted cardgroup"
              tag="h6"
              style={{
                color: "rgb(167,167,167)",
                marginTop: "10px",
                marginLeft: "19px",
                textAlign: "start",
              }}
            >
              {album}
            </CardSubtitle>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default Cardss;

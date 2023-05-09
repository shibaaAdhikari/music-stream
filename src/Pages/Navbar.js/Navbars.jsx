import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import spotifyLogo from "../../Assests/spotify.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiSearch, BiLibrary } from "react-icons/bi";
import { TbSquarePlus } from "react-icons/tb";
import { CgCardHearts } from "react-icons/cg";
// import Homepage from "../Homepage/Homepage";
const Navbars = () => {
  return (
    <>
      <Router>
        <Navbar
          bg="dark"
          expand="lg"
          style={{ width: "15%", height: "100vh" }}
          className="align-items-start d-flex justify-content-start"
        >
          <Container className=" flex-column align-item-start d-flex d-flex align-items-start  ">
            <Image src={spotifyLogo} fluid style={{ width: "75%" }} />
            <Nav className=" flex-column d-flex text-start">
              <Nav.Link
                as={Link}
                to={"/home"}
                style={{ color: "white" }}
                className="fs-5 mt-5"
              >
                <FaHome style={{ marginRight: "0.5rem" }} />
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/features"}
                style={{ color: "white" }}
                className="fs-5"
              >
                <BiSearch style={{ marginRight: "0.5rem" }} />
                Features
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/Library"}
                style={{ color: "white" }}
                className="mb-3 fs-5"
              >
                <BiLibrary style={{ marginRight: "0.5rem" }} />
                Your Library
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/features"}
                style={{ color: "white" }}
                className="fs-5"
              >
                <TbSquarePlus style={{ marginRight: "0.5rem" }} />
                Create Playlist
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/features"}
                style={{ color: "white" }}
                className="fs-5"
              >
                <CgCardHearts style={{ marginRight: "1rem" }} />
                Liked Songs
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Router>
    </>
  );
};

export default Navbars;

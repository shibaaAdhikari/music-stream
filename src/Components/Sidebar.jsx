import React from "react";
import "../App.css";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import { FaHome } from "react-icons/fa";
import { BiSearch, BiLibrary } from "react-icons/bi";
import { TbSquarePlus } from "react-icons/tb";
import { CgCardHearts } from "react-icons/cg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import spotifyLogo from "../Assests/spotify.png";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Row, Col } from "reactstrap";

const Sidebar = ({ children }) => {
  const menuItems = [
    {
      path: "/",
      icon: <FaHome />,
      name: "Home",
    },
    {
      path: "/features",
      icon: <BiSearch />,
      name: "Features",
    },
    {
      path: "/library",
      icon: <BiLibrary />,
      name: "Your Libary",
    },
    {
      path: "/PlayList",
      icon: <TbSquarePlus />,
      name: "Create Paylist",
    },
    {
      path: "/liked",
      icon: <CgCardHearts />,
      name: "Liked Songs",
    },
  ];
  return (
    <>
      <div>
        {/* <Row className="navBar p-0 m-0">
          <Col xs="10"> */}
        <Navbar
          // bg="dark"
          expand="lg"
          style={{
            height: "100vh",
            backgroundColor: "rgb(0,0,0)",
            width: "1%",
          }}
          className="align-items-start d-flex justify-content-start fixed-top"
        >
          <Container className=" flex-column  d-flex d-flex align-items-start  ">
            <div>
              <Image
                src={spotifyLogo}
                fluid
                className="mb-3"
                style={{ width: "75%" }}
              />
            </div>
            {menuItems.map((item, index) => (
              <Nav className=" flex-column d-flex text-start">
                <Nav.Link
                  as={Link}
                  to={item.path}
                  key={index}
                  style={{ color: "white" }}
                  className="fs-5 mb-2"
                  activeclassName="active"
                >
                  <div className="d-flex">
                    <div style={{ marginRight: "0.5rem" }}>{item.icon}</div>
                    <div className="link_text">{item.name}</div>
                  </div>
                </Nav.Link>
              </Nav>
            ))}
          </Container>
        </Navbar>
        {/* </Col> */}
        {/* <Col xs="10"> */}
        {/* <main> */}
        {/* <SearchBar /> */}
        {/* {children} */}
        {/* </main> */}
        {/* </Col> */}
        {/* </Row> */}
      </div>
    </>
  );
};

export default Sidebar;

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
      <div className="navBar">
        <Navbar
          bg="dark"
          expand="lg"
          style={{ width: "15%", height: "100vh" }}
          className="align-items-start d-flex justify-content-start "
        >
          <Container className=" flex-column align-item-start d-flex d-flex align-items-start  ">
            <div>
              <Image src={spotifyLogo} fluid className="mb-3" />
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
        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;

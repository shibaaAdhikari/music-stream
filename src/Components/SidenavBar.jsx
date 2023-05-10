import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiSearch, BiLibrary } from "react-icons/bi";
import { TbSquarePlus } from "react-icons/tb";
import { CgCardHearts } from "react-icons/cg";
import { Media } from "reactstrap";
import Spotify from "../Assests/spotify.png";

const SidenavBar = ({ children }) => {
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
    <div>
      <Nav
        vertical
        style={{
          height: "100vh",
          backgroundColor: "rgb(0,0,0)",
          width: "17%",
        }}
        className="align-items-start d-flex justify-content-start fixed-top"
      >
        <Media>
          <Media object src={Spotify} alt="My Image" style={{ width: "75%" }} />
        </Media>
        {menuItems.map((item, index) => (
          <NavItem key={index} className=" flex-column d-flex text-start">
            <NavLink
              href={item.path}
              style={{ color: "white" }}
              className="fs-5 mb-2"
            >
              <div className="d-flex">
                <div style={{ marginRight: "0.5rem" }}>{item.icon}</div>
                <div lassName="link_text">{item.name}</div>
              </div>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      {/* <main>{children}</main> */}
    </div>
  );
};

export default SidenavBar;

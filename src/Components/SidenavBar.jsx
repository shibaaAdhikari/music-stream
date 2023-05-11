import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { FaHome } from "react-icons/fa";
import { BiSearch, BiLibrary } from "react-icons/bi";
import { TbSquarePlus } from "react-icons/tb";
import { CgCardHearts } from "react-icons/cg";
import { Media } from "reactstrap";
import Spotify from "../Assests/spotify.png";
import { useNavigate } from "react-router-dom";

const SidenavBar = ({ children }) => {
  const navigate = useNavigate();
  const menuItems = [
    {
      path: "/",
      icon: <FaHome />,
      name: "Home",
    },
    {
      path: "/Features",
      icon: <BiSearch />,
      name: "Features",
    },
    {
      path: "/library",
      icon: <BiLibrary />,
      name: "Your Libary",
    },
  ];

  const playlist = [
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

  const handleItemClick = (path) => {
    navigate(path);
  };
  return (
    <div>
      <Nav
        vertical
        style={{
          height: "100vh",
          backgroundColor: "rgb(0,0,0)",
          width: "13%",
        }}
        className="align-items-start d-flex justify-content-start fixed-top "
      >
        <Media
          style={{ marginLeft: "5%", marginTop: "15px", marginBottom: "15px" }}
        >
          <Media object src={Spotify} alt="My Image" style={{ width: "45%" }} />
        </Media>

        {menuItems.map((item, index) => (
          <NavItem key={index} className=" flex-column d-flex text-start ">
            <NavLink
              onClick={() => handleItemClick(item.path)}
              style={{ color: "rgb(179,179,167)", cursor: "pointer" }}
              className="fs-6"
            >
              <div className="d-flex ">
                <div style={{ marginRight: "1rem" }}>{item.icon}</div>
                <div lassName="link_text">{item.name}</div>
              </div>
            </NavLink>
          </NavItem>
        ))}

        <div className="mt-4">
          {playlist.map((item, index) => (
            <NavItem key={index} className=" flex-column d-flex text-start ">
              <NavLink
                onClick={() => handleItemClick(item.path)}
                style={{ color: "rgb(179,179,167)", cursor: "pointer" }}
                className="fs-6"
              >
                <div className="d-flex">
                  <div style={{ marginRight: "1rem" }}>{item.icon}</div>
                  <div lassName="link_text">{item.name}</div>
                </div>
              </NavLink>
            </NavItem>
          ))}
        </div>
      </Nav>
      <main>{children}</main>
    </div>
  );
};

export default SidenavBar;

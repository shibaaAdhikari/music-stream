import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { FaHome } from "react-icons/fa";
import { BiSearch, BiLibrary } from "react-icons/bi";
import { TbSquarePlus } from "react-icons/tb";
import { CgCardHearts } from "react-icons/cg";
import { Media } from "reactstrap";
// import Spotify from "../Assests/spotify.png";
import Music from "../Assests/music3.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Popover, PopoverBody } from "reactstrap";

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
      path: "/Playlist",
      icon: <TbSquarePlus />,
      name: "Playlist",
    },
    {
      path: "/LikedSong",
      icon: <CgCardHearts />,
      name: "Liked Song",
    },
  ];

  const handleItemClick = (path) => {
    navigate(path);
  };

  const [libraryTooltipOpen, setLibraryTooltipOpen] = useState(false);
  const [playlistTooltipOpen, setPlaylistTooltipOpen] = useState(false);
  const [likedSongTooltipOpen, setLikedSongTooltipOpen] = useState(false);

  return (
    <div>
      <Nav
        vertical
        style={{
          height: "100vh",
          backgroundColor: "#000000",
          width: "13%",
          padding: "10px",
        }}
        className="align-items-start d-flex justify-content-start fixed-top "
      >
        <Media
          style={{ marginLeft: "25%", marginTop: "20px", marginBottom: "2rem" }}
        >
          <Media object src={Music} alt="My Image" style={{ width: "60%" }} />
        </Media>
        <div style={{ paddingLeft: "1rem" }}>
          {menuItems.map((item, index) => (
            <NavItem key={index} className=" flex-column d-flex text-start ">
              <NavLink
                onClick={() => {
                  handleItemClick(item.path);
                }}
                style={{ color: "#DDE6ED", cursor: "pointer" }}
                className="fs-6"
              >
                <div className="d-flex align-items-center sideItems ">
                  <div style={{ marginRight: "1rem", fontSize: "30px" }}>
                    {item.icon}
                  </div>
                  <div className="link_text mt-3 sideNav">{item.name}</div>
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

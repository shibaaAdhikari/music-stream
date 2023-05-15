import React from "react";
import { Nav, NavItem, NavLink, Tooltip } from "reactstrap";
import { FaHome } from "react-icons/fa";
import { BiSearch, BiLibrary } from "react-icons/bi";
import { TbSquarePlus } from "react-icons/tb";
import { CgCardHearts } from "react-icons/cg";
import { Media } from "reactstrap";
import Spotify from "../Assests/spotify.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

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
          backgroundColor: "rgb(0,0,0)",
          width: "13%",
        }}
        className="align-items-start d-flex justify-content-start fixed-top "
      >
        <Media
          style={{ marginLeft: "5%", marginTop: "15px", marginBottom: "15px" }}
        >
          <Media object src={Spotify} alt="My Image" style={{ width: "75%" }} />
        </Media>

        {menuItems.map((item, index) => (
          <NavItem key={index} className=" flex-column d-flex text-start ">
            <NavLink
              onClick={() => {
                handleItemClick(item.path);
              }}
              style={{ color: "rgb(179,179,167)", cursor: "pointer" }}
              className="fs-6"
            >
              <div className="d-flex align-items-center sideItems ">
                <div style={{ marginRight: "1rem", fontSize: "30px" }}>
                  {item.icon}
                </div>
                <div className="link_text mt-3  sideNav">{item.name}</div>
              </div>
            </NavLink>
          </NavItem>
        ))}

        <div className="flex-column d-flex text-start mx-3">
          <div className="mb-4 mt-3 sideItems">
            <BiLibrary
              style={{
                marginRight: "1rem",
                fontSize: "30px",
                color: "rgb(179,179,167)",
              }}
              className="sideNav"
            />
            <Link
              to="#"
              style={{ color: "rgb(179,179,167)", cursor: "pointer" }}
              className="text-decoration-none sideItems"
              id="libraryTooltip"
            >
              Library
            </Link>
            <Tooltip
              isOpen={libraryTooltipOpen}
              placement="right"
              target="libraryTooltip"
              toggle={() => {
                setLibraryTooltipOpen(!libraryTooltipOpen);
              }}
              style={{
                backgroundColor: "blue",
                width: "1000px",
                height: "150px",
              }}
            >
              <div>
                <p className="text-start">Create a playlist</p>
                <p className="text-start">
                  Login to create and share playlists.
                </p>
                <div className="d-flex justify-content-end gap-3">
                  <p className="mt-2">Not now</p>
                  <button className="rounded-pill">Login</button>
                </div>
              </div>
            </Tooltip>
          </div>

          <div className="mt-4">
            <div>
              <TbSquarePlus
                style={{
                  marginRight: "1rem",
                  fontSize: "30px",
                  color: "rgb(179,179,167)",
                }}
              />
              <Link
                to="#"
                style={{ color: "rgb(179,179,167)", cursor: "pointer" }}
                className="text-decoration-none mb-1"
                id="playlistTooltip"
              >
                PlayList
              </Link>
              <Tooltip
                isOpen={playlistTooltipOpen}
                placement="right"
                target="playlistTooltip"
                toggle={() => {
                  setPlaylistTooltipOpen(!playlistTooltipOpen);
                }}
                style={{
                  backgroundColor: "blue",
                  width: "1000px",
                  height: "150px",
                }}
              >
                <div>
                  <p className="text-start">Create a playlist</p>
                  <p className="text-start">
                    Login to create and share playlists.
                  </p>
                  <div className="d-flex justify-content-end gap-3">
                    <p className="mt-2">Not now</p>
                    <button className="rounded-pill">Login</button>
                  </div>
                </div>
              </Tooltip>
            </div>
            <div className="mt-3">
              <CgCardHearts
                style={{
                  marginRight: "1rem",
                  fontSize: "30px",
                  color: "rgb(179,179,167)",
                }}
              />
              <Link
                to="#"
                style={{ color: "rgb(179,179,167)", cursor: "pointer" }}
                className="text-decoration-none "
                id="likedSongTooltip"
              >
                Liked Song
              </Link>
              <Tooltip
                isOpen={likedSongTooltipOpen}
                placement="right"
                target="likedSongTooltip"
                toggle={() => {
                  setLikedSongTooltipOpen(!likedSongTooltipOpen);
                }}
                style={{
                  backgroundColor: "blue",
                  width: "1000px",
                  height: "150px",
                }}
              >
                <div>
                  <p className="text-start">Create a playlist</p>
                  <p className="text-start">
                    Login to create and share playlists.
                  </p>
                  <div className="d-flex justify-content-end gap-3">
                    <p className="mt-2">Not now</p>
                    <button className="rounded-pill">Login</button>
                  </div>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column ">
          <div
            style={{
              marginTop: "200%",
              marginLeft: "3%",
              color: "rgb(179,179,167",
            }}
          >
            <div className="d-flex gap-3">
              <p style={{ color: "rgb(179,179,167" }}>Legal</p>
              <p style={{ color: "rgb(179,179,167" }}>Privacy Center</p>
            </div>
            <div className="d-flex gap-3">
              <p style={{ color: "rgb(179,179,167" }}>Privacy Policy</p>
              <p style={{ color: "rgb(179,179,167" }}>Cookies</p>
            </div>
            <div className=" mb-3" style={{ color: "rgb(179,179,167" }}>
              About Ads
            </div>
            <div style={{ color: "rgb(179,179,167" }}>Cookies</div>
          </div>
        </div>
      </Nav>
      <main>{children}</main>
    </div>
  );
};

export default SidenavBar;

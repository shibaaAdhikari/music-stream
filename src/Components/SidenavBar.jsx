import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { FaHome } from "react-icons/fa";
import { BiSearch, BiLibrary } from "react-icons/bi";
import { TbSquarePlus } from "react-icons/tb";
import { CgCardHearts } from "react-icons/cg";
import { Media } from "reactstrap";
import Spotify from "../Assests/spotify.png";
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

        <div className="d-flex flex-column  " style={{ height: "300px" }}>
          <div className="flex-column   d-flex text-start mx-3">
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
              <Popover
                isOpen={libraryTooltipOpen}
                placement="right"
                target="libraryTooltip"
                toggle={() => {
                  setLibraryTooltipOpen(!libraryTooltipOpen);
                }}
                style={{
                  backgroundColor: "#0D72EA",
                  width: "300px",
                  height: "170px",
                  borderRadius: "10px",
                }}
              >
                <PopoverBody>
                  <p
                    className="text-start text-light"
                    style={{ fontWeight: "bolder", fontSize: "20px" }}
                  >
                    Enjoy your Library
                  </p>
                  <p className="text-start text-light">
                    Login to see saved songs,podcasts and playlist in your
                    Library.
                  </p>
                  <div className="d-flex justify-content-end gap-3">
                    <p className="mt-2">Not now</p>
                    <button className="rounded-pill">Login</button>
                  </div>
                </PopoverBody>
              </Popover>
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
                <Popover
                  isOpen={playlistTooltipOpen}
                  placement="right"
                  target="playlistTooltip"
                  toggle={() => {
                    setPlaylistTooltipOpen(!playlistTooltipOpen);
                  }}
                  style={{
                    backgroundColor: "#0D72EA",
                    width: "300px",
                    height: "150px",
                    borderRadius: "10px",
                  }}
                >
                  <PopoverBody>
                    <div>
                      <p
                        className="text-start text-light"
                        style={{ fontWeight: "bolder", fontSize: "20px" }}
                      >
                        Create a playlist
                      </p>
                      <p className="text-start text-light">
                        Login to create and share playlists.
                      </p>
                      <div className="d-flex justify-content-end gap-3">
                        <p className="mt-2">Not now</p>
                        <button className="rounded-pill">Login</button>
                      </div>
                    </div>
                  </PopoverBody>
                </Popover>
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
                <Popover
                  isOpen={likedSongTooltipOpen}
                  placement="right"
                  target="likedSongTooltip"
                  toggle={() => {
                    setLikedSongTooltipOpen(!likedSongTooltipOpen);
                  }}
                  style={{
                    backgroundColor: "#0D72EA",
                    width: "300px",
                    height: "150px",
                    borderRadius: "10px",
                  }}
                >
                  <PopoverBody>
                    <div>
                      <p
                        className="text-start text-light"
                        style={{ fontWeight: "bolder", fontSize: "20px" }}
                      >
                        Enjoyed your liked Song
                      </p>
                      <p className="text-start text-light">
                        Login to see all the songs you've liked.
                      </p>
                      <div className="d-flex justify-content-end gap-3">
                        <p className="mt-2">Not now</p>
                        <button style={{ borderRadius: "30px" }}>Login</button>
                      </div>
                    </div>
                  </PopoverBody>
                </Popover>
              </div>
            </div>
          </div>

          <div className="d-flex    justify-content-end  footer">
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
        </div>
      </Nav>
      <main>{children}</main>
    </div>
  );
};

export default SidenavBar;

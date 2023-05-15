import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const navigate = useNavigate();
  const navigateSignup = () => {
    navigate("/Signup");
  };
  const navigateLogin = () => {
    navigate("/Login");
  };

  const currentLocation = useLocation();
  const hideInput = currentLocation.pathname === "/";
  const searchBar = currentLocation.pathname === "/";

  return (
    <Navbar
      className="container-fluid d-flex sticky-top text-center justify-content-center align-items-center"
      color="black"
      // style={{ color: "black" }}
      dark
    >
      {!searchBar ? (
        <div className="d-flex justify-content-end" style={{ width: "42%" }}>
          <NavbarBrand
            style={{
              textAlign: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            className="d-flex gap-3 mx-5 justify-content-end"
          >
            <div
              className="p-2 bg-black rounded-circle"
              style={{ width: "50px", height: "50px" }}
            >
              <MdArrowBackIosNew />
            </div>
            <div
              className="p-2 bg-black rounded-circle"
              style={{ width: "50px", height: "50px" }}
            >
              <MdArrowForwardIos />
            </div>
          </NavbarBrand>
          <NavbarBrand>
            {!hideInput && (
              <div className="search-input-container">
                <input
                  className="rounded-pill p-2"
                  type="search"
                  placeholder="What do you want to feature?"
                />
                <div className="search-icon">
                  <AiOutlineSearch
                    style={{ fontSize: "30px", color: "black" }}
                  />
                </div>
              </div>
            )}
          </NavbarBrand>
        </div>
      ) : (
        <div className="d-flex justify-content-end" style={{ width: "25%" }}>
          <NavbarBrand
            style={{
              textAlign: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            className="d-flex gap-5 mx-5 justify-content-end"
          >
            <div
              className="p-2 bg-black rounded-circle"
              style={{ width: "50px", height: "50px" }}
            >
              <MdArrowBackIosNew />
            </div>
            <div
              className="p-2 bg-black rounded-circle"
              style={{ width: "50px", height: "50px" }}
            >
              <MdArrowForwardIos />
            </div>
          </NavbarBrand>
          <NavbarBrand>
            {!hideInput && (
              <input
                className="rounded-pill p-2"
                type="search"
                placeholder="What do you want to feature?"
              />
            )}
          </NavbarBrand>
        </div>
      )}

      <NavbarBrand className="d-flex">
        <p
          style={{
            color: "rgb(249,249,249)",
            cursor: "pointer",
          }}
          className="mx-4 fs-5 mt-2"
          onClick={navigateSignup}
          onMouseEnter={(e) => {
            e.target.style.color = "white";
            e.target.style.animationFillMode = "forwards";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "rgb(179,179,167)";
            e.target.style.animationFillMode = "none";
          }}
        >
          Signup
        </p>

        <p
          className="bg-white text-black px-4 py-2 rounded-pill"
          onClick={navigateLogin}
        >
          Login
        </p>
      </NavbarBrand>
    </Navbar>
  );
};

export default SearchBar;

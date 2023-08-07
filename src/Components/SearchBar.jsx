import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { searchFunction } from "./Recoil/Store";
import { useSetRecoilState } from "recoil";

const SearchBar = () => {
  const user = localStorage.getItem("username") || "";
  console.log(user);
  const navigate = useNavigate();
  const navigateSignup = () => {
    navigate("/Signup");
  };
  const navigateLogin = () => {
    navigate("/Login");
    localStorage.clear();
  };

  const currentLocation = useLocation();
  const hideInput = currentLocation.pathname === "/";
  const searchBar = currentLocation.pathname === "/";
  const setSearchQuery = useSetRecoilState(searchFunction);

  const goBack = () => {
    navigate(-1); // Navigate back
  };

  const goForward = () => {
    navigate(1); // Navigate forward
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Navbar
      className="container-fluid d-flex sticky-top text-center justify-content-center align-items-center"
      // color="black"
      style={{ backgroundColor: "#000000" }}
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
              className="p-2  rounded-circle goBack"
              style={{ width: "50px", height: "50px" }}
              onClick={goBack}
            >
              <MdArrowBackIosNew />
            </div>
            <div
              className="p-2  rounded-circle goForward"
              style={{ width: "50px", height: "50px" }}
              onClick={goForward}
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
                  onChange={handleInputChange}
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
              className="p-2  rounded-circle goBack"
              style={{ width: "50px", height: "50px" }}
              onClick={goBack}
            >
              <MdArrowBackIosNew />
            </div>
            <div
              className="p-2  rounded-circle goForward"
              style={{ width: "50px", height: "50px" }}
              onClick={goForward}
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
                onChange={handleInputChange}
              />
            )}
          </NavbarBrand>
        </div>
      )}

      <NavbarBrand className="d-flex">
        {user ? (
          // Display the user's name as "Username"
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
            {user}
          </p>
        ) : (
          // Display "Signup" when user.displayName is empty
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
        )}
        <p
          className="bg-white text-black px-4 py-2 rounded-pill"
          onClick={navigateLogin}
          style={{ cursor: "pointer" }}
        >
          {user ? "Logout" : "Login"}
        </p>
      </NavbarBrand>
    </Navbar>
  );
};

export default SearchBar;

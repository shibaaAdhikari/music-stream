import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const navigate = useNavigate();
  const navigateSignup = () => {
    navigate("/Signup");
  };
  const navigateLogin = () => {
    navigate("/Login");
  };
  return (
    <>
      <Navbar
        className=" container-fluid  d-flex sticky-top text-center"
        color="dark"
        dark
      >
        <NavbarBrand
          style={{ width: "15%", textAlign: "end" }}
          className="d-flex gap-3 mx-5 justify-content-end  "
        >
          <div>
            <MdArrowBackIosNew />
          </div>
          <div>
            <MdArrowForwardIos />
          </div>
        </NavbarBrand>
        <NavbarBrand className="d-flex">
          <p
            style={{
              color: "rgb(249,249,249)",
              cursor: "pointer",
            }}
            className="mx-4  fs-5 mt-2"
            onClick={navigateSignup}
            onMouseEnter={(e) => {
              e.target.style.color = "white";
              e.target.style.animationFillMode = "forwards";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "rgb(179,179,167)";
              e.target.style.animationFillMode = "none  ";
            }}
          >
            Signup
          </p>

          <p
            className="bg-white text-black px-4 py-2  rounded-pill"
            onClick={navigateLogin}
          >
            Login
          </p>
        </NavbarBrand>
      </Navbar>
    </>
  );
};

export default SearchBar;

import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { TbMathGreater } from "react-icons/tb";

const SearchBar = () => {
  return (
    <>
      <Navbar className=" d-flex sticky-top text-center" color="dark" dark>
        <NavbarBrand style={{ width: "20%", textAlign: "end" }}>
          <TbMathGreater />
          <TbMathGreater />
        </NavbarBrand>
        <NavbarBrand className="d-flex">
          <p style={{ color: "rgb(249,249,249)" }} className="mx-4 mt-2">
            Signup
          </p>
          <p className="bg-white text-black px-4 py-2  rounded-pill">Login </p>
        </NavbarBrand>
      </Navbar>
    </>
  );
};

export default SearchBar;

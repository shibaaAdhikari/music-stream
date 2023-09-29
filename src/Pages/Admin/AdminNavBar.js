import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";


const AdminNavBar = () => {
  return (
    <Navbar
      className="container-fluid d-flex sticky-top text-center justify-content-center align-items-center"
      style={{ backgroundColor: "#000000" }}
      dark
    >
     
        <div className="d-flex justify-content-end" style={{height:"7vh"}}>
          <NavbarBrand
            style={{
              textAlign: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            className="d-flex gap-3 mx-5 justify-content-end"
          >
          </NavbarBrand>
        </div>
    </Navbar>
  );
};

export default AdminNavBar;

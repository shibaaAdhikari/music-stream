import React from "react";
import SidenavBar from "../../Components/SidenavBar";
import { Outlet } from "react-router-dom";
import SearchBar from "../../Components/SearchBar";
import Footer from "../Footer/Footer";

const Mainpage = () => {
  return (
    <>
      <SearchBar />
      <div className="d-flex ">
        <div className="sidebar-section bg-white">
          <SidenavBar />
        </div>
        <div
          className="content-section "
          style={{ width: "100%", marginLeft: "13%" }}
        >
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mainpage;

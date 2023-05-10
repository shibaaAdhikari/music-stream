import React from "react";
import SidenavBar from "../../Components/SidenavBar";
import Home from "../Homepage/Home";

const Mainpage = () => {
  return (
    <div className="d-flex">
      <div className="sidebar-section">
        <SidenavBar />
      </div>
      <div className="content-section">
        <Home />
      </div>
    </div>
  );
};

export default Mainpage;

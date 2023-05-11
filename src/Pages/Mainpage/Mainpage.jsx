import React from "react";
import SidenavBar from "../../Components/SidenavBar";
import Home from "../Homepage/Home";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Features from "../Features/Features";

const Mainpage = () => {
  return (
    <div className="d-flex">
      <div className="sidebar-section">
        <SidenavBar />
      </div>
      <div className="content-section">
        <Outlet />
      </div>
    </div>

    // <div className="d-flex">
    //   <div className="sidebar-section">
    //     <SidenavBar />
    //   </div>
    //   <div className="content-section">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/Features" element={<Features />} />
    //     </Routes>
    //   </div>
    // </div>
  );
};

export default Mainpage;
